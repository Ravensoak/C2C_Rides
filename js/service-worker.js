// Version your cache so updates apply immediately
const CACHE_VERSION = "v2";

// Install event
self.addEventListener("install", event => {
  console.log("Service Worker installing…");
  self.skipWaiting(); // Activate immediately
});

// Activate event
self.addEventListener("activate", event => {
  console.log("Service Worker activating…");

  // Clean up old caches
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_VERSION)
          .map(key => caches.delete(key))
      )
    )
  );

  // Take control of all pages immediately
  self.clients.claim();
});

// Fetch event (pass-through for now)
self.addEventListener("fetch", event => {
  // No caching logic yet — everything goes to the network
});
