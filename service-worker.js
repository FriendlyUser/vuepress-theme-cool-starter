/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c667825bc367720a5affea20c9774137"
  },
  {
    "url": "admonitions.html",
    "revision": "2e51e8aabf8f761b8129241a91099e49"
  },
  {
    "url": "assets/css/0.styles.4af44b62.css",
    "revision": "40803a96c6eede13cb57a96dfb4322db"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a7f648c0.js",
    "revision": "4fca2fdf0c3de89d1b752dbfe22797e2"
  },
  {
    "url": "assets/js/11.66382aa0.js",
    "revision": "51eafdfe3d2b7f11631ad075940a2653"
  },
  {
    "url": "assets/js/12.7fd05991.js",
    "revision": "8b0bdc0eea1705f4c45890ac558d16e9"
  },
  {
    "url": "assets/js/13.2b443123.js",
    "revision": "37d69152918a1451509ac85837a41c71"
  },
  {
    "url": "assets/js/14.810cd2bf.js",
    "revision": "de777d9b120f7f9245103972c7ab86bb"
  },
  {
    "url": "assets/js/15.8fd87201.js",
    "revision": "067a26a535f9a2756c76342487275e58"
  },
  {
    "url": "assets/js/16.4d90aca1.js",
    "revision": "6fce2fe016e200b2d268424bad134c1f"
  },
  {
    "url": "assets/js/17.3cb72151.js",
    "revision": "4b26e3e26b0b9e8e559fb6e557307580"
  },
  {
    "url": "assets/js/18.816f8aa1.js",
    "revision": "1e1e5c96f10958f66f25853ffc28fbd4"
  },
  {
    "url": "assets/js/2.cc3324af.js",
    "revision": "f40affecd631c8e6b67819930612a621"
  },
  {
    "url": "assets/js/3.e690d8da.js",
    "revision": "1e3cb7b1a7d2c8bcff17df7485c72db7"
  },
  {
    "url": "assets/js/4.8bb3a77f.js",
    "revision": "98b5a0b8e2ce78d2418a11d092c460d4"
  },
  {
    "url": "assets/js/5.742178b5.js",
    "revision": "fb34b126d1604c71da72b674b88b1a46"
  },
  {
    "url": "assets/js/6.f5c94e93.js",
    "revision": "2e1114fd8cd026e2a0ceb5caf016956b"
  },
  {
    "url": "assets/js/7.9a7cd79c.js",
    "revision": "16b927e4b7865c5b9d2f102fac0a9c0f"
  },
  {
    "url": "assets/js/8.bf1903d3.js",
    "revision": "5150e477001c96073798a6e30a6f384a"
  },
  {
    "url": "assets/js/9.2c68c3c2.js",
    "revision": "3080cc823bc9746a0ceb0114572247de"
  },
  {
    "url": "assets/js/app.37a68944.js",
    "revision": "f3f4b54c91a11e759a7f5ff5961fae08"
  },
  {
    "url": "charts-math.html",
    "revision": "47b6946d8c0e5294f330f6c9925ee645"
  },
  {
    "url": "custom-components.html",
    "revision": "6ed4fe11817f9c1aa1e02c7b8ee11cd4"
  },
  {
    "url": "diagrams.html",
    "revision": "521867fece45836a5b40d36fd89ea44b"
  },
  {
    "url": "index.html",
    "revision": "d94d538240ce2d96af44ebe7a4d415a4"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
