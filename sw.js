// sw.js - Service Worker for PWA
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // This allows the app to load while offline or on slow networks
  e.respondWith(fetch(e.request));
});
