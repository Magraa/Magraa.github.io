from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
Handler = SimpleHTTPRequestHandler
Handler.protocol_version = "HTTP/1.1"
ThreadingHTTPServer(("127.0.0.1", 8000), Handler).serve_forever()
