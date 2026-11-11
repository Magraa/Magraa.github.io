/* Lightweight Service Worker: stale-while-revalidate for static portfolio shell & cache-first for versioned/media assets */

const CACHE_VERSION = "467fb9ba";
const SHELL_CACHE = `ma-shell-${CACHE_VERSION}`;
const ASSET_CACHE = `ma-assets-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  "./",
  "assets/ma-mark.svg",
  "favicon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== SHELL_CACHE && key !== ASSET_CACHE)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/__dev/")) return;

  // Navigation & HTML: network-first with shell cache fallback
  if (req.mode === "navigate" || req.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(SHELL_CACHE).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("./")))
    );
    return;
  }

  // Immutable assets (hashed chunks, fonts, avif/webp, glb): cache-first with background fill
  if (
    url.pathname.includes("/assets/") ||
    url.search.includes("v=") ||
    /\.(woff2|avif|webp|glb|svg|css|js)$/i.test(url.pathname)
  ) {
    event.respondWith(
      caches.open(ASSET_CACHE).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) cache.put(req, res.clone());
        return res;
      })
    );
  }
});
