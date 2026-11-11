"""Local static preview server for portfolio verification with gzip, clean MIME types, and dev routes."""

from __future__ import annotations

import gzip
import os
import posixpath
import sys
from email.utils import formatdate
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlsplit

ROOT_DIR = Path(__file__).resolve().parent
DEV_AGENTATION = ROOT_DIR.parent / "dev" / "agentation.dev.js"

COMPRESSIBLE_EXTS = frozenset({
    ".html",
    ".css",
    ".js",
    ".mjs",
    ".json",
    ".map",
    ".svg",
    ".txt",
    ".xml",
    ".glb",
})

LONG_CACHE_EXTS = frozenset({
    ".woff2",
    ".avif",
    ".webp",
    ".png",
    ".jpg",
    ".jpeg",
    ".svg",
    ".glb",
    ".pdf",
})

MIME_OVERRIDES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".mjs": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".map": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".avif": "image/avif",
    ".webp": "image/webp",
    ".png": "image/png",
    ".woff2": "font/woff2",
    ".glb": "model/gltf-binary",
    ".pdf": "application/pdf",
}


class ReusableThreadingHTTPServer(ThreadingHTTPServer):
    allow_reuse_address = True
    daemon_threads = True


class PortfolioRequestHandler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map, **MIME_OVERRIDES}

    def log_message(self, format: str, *args: object) -> None:
        if os.environ.get("PREVIEW_QUIET") == "1":
            return
        super().log_message(format, *args)

    def handle_one_request(self) -> None:
        try:
            super().handle_one_request()
        except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
            self.close_connection = True

    def finish(self) -> None:
        try:
            super().finish()
        except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
            pass

    def _resolve_file(self) -> Path | None:
        parsed = urlsplit(self.path)
        clean_path = unquote(parsed.path)

        if clean_path == "/__dev/agentation.dev.js":
            return DEV_AGENTATION if DEV_AGENTATION.is_file() else None

        rel = posixpath.normpath(clean_path).lstrip("/")
        if rel == "." or rel == "":
            candidate = ROOT_DIR / "index.html"
        else:
            candidate = (ROOT_DIR / rel).resolve()
            try:
                candidate.relative_to(ROOT_DIR)
            except ValueError:
                return None

        if candidate.is_dir():
            candidate = candidate / "index.html"

        return candidate if candidate.is_file() else None

    def _cache_header(self, file_path: Path, raw_path: str) -> str:
        name = file_path.name
        if file_path.suffix == ".html" or name == "sw.js" or raw_path == "/__dev/agentation.dev.js":
            return "no-cache"
        if "?v=" in self.path or file_path.suffix in LONG_CACHE_EXTS or "/assets/js/" in raw_path or "/assets/fonts/" in raw_path:
            return "public, max-age=31536000, immutable"
        return "public, max-age=3600"

    def _maybe_inject_agentation(self, file_path: Path, query: str, data: bytes) -> bytes:
        if file_path.name != "index.html" or not DEV_AGENTATION.is_file():
            return data
        if os.environ.get("PREVIEW_NO_AGENTATION") == "1":
            return data
        params = parse_qs(query, keep_blank_values=True)
        # Opt-out flags for clean Lighthouse audits; skip if ?agentation is already handled inline.
        if "no-agentation" in params or params.get("agentation") == ["0"] or "agentation" in params:
            return data
        head, sep, tail = data.rpartition(b"</body>")
        if not sep:
            return data
        snippet = b'<script src="/__dev/agentation.dev.js" defer></script>'
        return head + snippet + sep + tail

    def _serve(self, head_only: bool = False) -> None:
        file_path = self._resolve_file()
        if file_path is None:
            self.send_error(HTTPStatus.NOT_FOUND, "File not found")
            return

        parsed = urlsplit(self.path)
        ext = file_path.suffix.lower()
        ctype = MIME_OVERRIDES.get(ext, self.guess_type(str(file_path)))
        data = self._maybe_inject_agentation(file_path, parsed.query, file_path.read_bytes())

        accepts_gzip = "gzip" in (self.headers.get("Accept-Encoding") or "").lower()
        use_gzip = accepts_gzip and ext in COMPRESSIBLE_EXTS and len(data) >= 256 and not self.headers.get("Range")
        if use_gzip:
            data = gzip.compress(data, compresslevel=6, mtime=0)

        stat = file_path.stat()
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Last-Modified", formatdate(stat.st_mtime, usegmt=True))
        self.send_header("Cache-Control", self._cache_header(file_path, parsed.path))
        self.send_header("X-Content-Type-Options", "nosniff")
        if ext in COMPRESSIBLE_EXTS:
            self.send_header("Vary", "Accept-Encoding")
        if use_gzip:
            self.send_header("Content-Encoding", "gzip")
        self.end_headers()

        if not head_only:
            try:
                self.wfile.write(data)
            except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
                pass

    def do_GET(self) -> None:
        self._serve(head_only=False)

    def do_HEAD(self) -> None:
        self._serve(head_only=True)


def main() -> None:
    port = int(os.environ.get("PORT", sys.argv[1] if len(sys.argv) > 1 else "8123"))
    host = os.environ.get("HOST", "127.0.0.1")
    handler = partial(PortfolioRequestHandler, directory=str(ROOT_DIR))
    with ReusableThreadingHTTPServer((host, port), handler) as server:
        print(f"Serving {ROOT_DIR} on http://{host}:{port}", flush=True)
        server.serve_forever()


if __name__ == "__main__":
    main()
