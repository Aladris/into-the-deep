// Offline support: precache the shell, then cache-first for same-origin
// assets (everything is static and hashed, so cache-first is safe).
const CACHE = 'into-the-deep-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(['./', 'manifest.webmanifest', 'icon-192.png']))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;

  event.respondWith(
    caches.match(request, { ignoreSearch: request.mode === 'navigate' }).then(
      (hit) =>
        hit ||
        fetch(request)
          .then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(CACHE).then((cache) => cache.put(request, copy));
            }
            return response;
          })
          // offline and uncached: fall back to the app shell for navigations
          .catch(() => (request.mode === 'navigate' ? caches.match('./') : Promise.reject()))
    )
  );
});
