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
    "revision": "145ed51919ee3c07118f3668489a1495"
  },
  {
    "url": "admonitions.html",
    "revision": "c6cd37df3ba89df00a411304dceafae7"
  },
  {
    "url": "assets/css/0.styles.d2c5d897.css",
    "revision": "21351ba5bf9d43496a897c21277918ab"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a9380fd9.js",
    "revision": "6e910d0d704a1cb082fb7f13665ca022"
  },
  {
    "url": "assets/js/11.4b070901.js",
    "revision": "a99b54c7a62bd67a9e01e0b6049d5217"
  },
  {
    "url": "assets/js/12.32678cb5.js",
    "revision": "1d31ca5fd0c3fb8fec3e46edb67d1acb"
  },
  {
    "url": "assets/js/13.af5d9e19.js",
    "revision": "378c8629fb4c0e82f36c7b6fb9e7f8a0"
  },
  {
    "url": "assets/js/14.9d132b1b.js",
    "revision": "cc6d43afb5ad920469e52fc18bd6b874"
  },
  {
    "url": "assets/js/15.58913376.js",
    "revision": "3ba099c149a9b29be5549f734b86666f"
  },
  {
    "url": "assets/js/16.423003a7.js",
    "revision": "3bd2cf858627dce9d3e7f085c9f57c8e"
  },
  {
    "url": "assets/js/17.2495b950.js",
    "revision": "9e8d0d7b187524a8bc3c7b685ae77e98"
  },
  {
    "url": "assets/js/18.998c79b8.js",
    "revision": "7c484c467244cfbcde83bb2f5398c6ba"
  },
  {
    "url": "assets/js/19.cefc5c78.js",
    "revision": "f209f60cb5fc838424a0fa7c7c970278"
  },
  {
    "url": "assets/js/2.2e21dbcb.js",
    "revision": "c7f7fd0f283ee0a14942e3902fda209b"
  },
  {
    "url": "assets/js/3.34118a8d.js",
    "revision": "2048bd904e551bb511f12c8f051b3f8d"
  },
  {
    "url": "assets/js/4.f9851c3c.js",
    "revision": "e834f5f907d6abfe3231495d797ab015"
  },
  {
    "url": "assets/js/5.38aee545.js",
    "revision": "c0788b5c79fac7e0a9e76248850711da"
  },
  {
    "url": "assets/js/6.0457b36f.js",
    "revision": "1fd7d521f892fe98be8fe87dea87eafb"
  },
  {
    "url": "assets/js/7.99ed1e6e.js",
    "revision": "557bdc0c5a7bbfff83db3aab4f189fb7"
  },
  {
    "url": "assets/js/8.8626f371.js",
    "revision": "d92899de7fa189b982b64c60bd3d904c"
  },
  {
    "url": "assets/js/9.a0268425.js",
    "revision": "71bd78d0ee58af75db42a1d63e2f1612"
  },
  {
    "url": "assets/js/app.6c7a600e.js",
    "revision": "701252243671813930bc0e8841c0e47b"
  },
  {
    "url": "charts-math.html",
    "revision": "a0a56512ec1114703e5abb4e84062b89"
  },
  {
    "url": "custom-components.html",
    "revision": "9107ceccf6c1d2f47a3725faf3802b90"
  },
  {
    "url": "diagrams.html",
    "revision": "2fd28c09b749a2e9cad1ddc263ddf92d"
  },
  {
    "url": "index.html",
    "revision": "104c9895a92fa29d6a1a30a5730056b5"
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
