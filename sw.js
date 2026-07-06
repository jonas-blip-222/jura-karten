/* Jura-Karten – Service Worker (Offline-Betrieb)
   v2: Bugfix-Update. index.html wird jetzt "network-first" geladen,
   damit zukünftige Updates automatisch ankommen (Offline-Fallback bleibt). */
const CACHE = "jura-karten-v2";
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
  if(e.request.method !== "GET") return;

  const url = new URL(e.request.url);
  const isPage = e.request.mode === "navigate" ||
                 url.pathname.endsWith("/index.html") ||
                 url.pathname.endsWith("/");

  if(isPage){
    // Network-first: frische Version laden, Cache nur als Offline-Fallback
    e.respondWith(
      fetch(e.request).then(res=>{
        const copy = res.clone();
        caches.open(CACHE).then(c=>c.put(e.request, copy)).catch(()=>{});
        return res;
      }).catch(()=>caches.match(e.request).then(hit=>hit || caches.match("./index.html")))
    );
    return;
  }

  // Übrige Dateien: Cache-first (schnell & offline-fähig)
  e.respondWith(
    caches.match(e.request).then(hit=>{
      if(hit) return hit;
      return fetch(e.request).then(res=>{
        const copy = res.clone();
        caches.open(CACHE).then(c=>c.put(e.request, copy)).catch(()=>{});
        return res;
      }).catch(()=>caches.match("./index.html"));
    })
  );
});
