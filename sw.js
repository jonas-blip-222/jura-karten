/* Jura-Karten – Service Worker (Offline-Betrieb)
   Cache-Version bei jedem Inhalts-Update hochzählen (v1 -> v2 ...),
   damit Handys die neuen Karten sicher nachladen. */
const CACHE = "jura-karten-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./cards.js",
  "./manifest.json",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch", e=>{
  if(e.request.method!=="GET") return;
  e.respondWith(
    caches.match(e.request).then(hit=>{
      if(hit) return hit;
      return fetch(e.request).then(res=>{
        // neue Dateien im selben Verzeichnis mitcachen
        const copy = res.clone();
        caches.open(CACHE).then(c=>c.put(e.request, copy)).catch(()=>{});
        return res;
      }).catch(()=>caches.match("./index.html"));
    })
  );
});
