// Bump this version whenever site files are published so clients can detect updates.
const APP_VERSION = "2026.10.29.2";

// Leave new versions waiting until the user chooses App Refresh.
self.addEventListener("install", () => {
  console.log(`C2C Rides service worker ${APP_VERSION} installed.`);
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", () => {
  // The app currently uses network requests without a custom cache strategy.
});
