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
    "revision": "2a24983d0109d8967e1510f4e8c12f13"
  },
  {
    "url": "admonitions.html",
    "revision": "a035726a9b9870e60175315308f3242b"
  },
  {
    "url": "assets/css/0.styles.20ecc5df.css",
    "revision": "684007626a67715e1e7befd1b3bc7fce"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a06a757e.js",
    "revision": "9e6720f8ea285a4dddd58199763163d1"
  },
  {
    "url": "assets/js/11.90494806.js",
    "revision": "ca4bab5d2a42a6aae13177521007a475"
  },
  {
    "url": "assets/js/12.5929a623.js",
    "revision": "84c1db64cc678f8c2643d6017074e921"
  },
  {
    "url": "assets/js/13.ccef8aff.js",
    "revision": "e1d02cd9c31ba9f1ca71e68199695f8a"
  },
  {
    "url": "assets/js/14.337f470d.js",
    "revision": "134f39c295640e281b3b2e61fc80c3da"
  },
  {
    "url": "assets/js/15.718505bc.js",
    "revision": "0c7fe564ea5d444ebfcdd5142f82db4e"
  },
  {
    "url": "assets/js/16.2d271377.js",
    "revision": "b1b4880d701b12dbf7457dc3fc81321d"
  },
  {
    "url": "assets/js/17.2f448437.js",
    "revision": "3fdbd6bb6f55450019e63395409d487e"
  },
  {
    "url": "assets/js/18.83cd041d.js",
    "revision": "d29991e40ccbcfab884130f09e0c9d91"
  },
  {
    "url": "assets/js/2.96e286a2.js",
    "revision": "1de73debce8ddd19f30b147ca5d43114"
  },
  {
    "url": "assets/js/3.225b9a5e.js",
    "revision": "02d6ced24bb69f91f32d9be49784ea8b"
  },
  {
    "url": "assets/js/4.a4a9a7b3.js",
    "revision": "abc0f82cd550517f0c6adcc340d3b84a"
  },
  {
    "url": "assets/js/5.23dae19f.js",
    "revision": "40765b2f9ec1f6f6307649b663b65cc8"
  },
  {
    "url": "assets/js/6.36b2b953.js",
    "revision": "0da6df7934796aed13939ed8c8950443"
  },
  {
    "url": "assets/js/7.3bee4e30.js",
    "revision": "70666f2801755c256b5407016c50baed"
  },
  {
    "url": "assets/js/8.470abded.js",
    "revision": "951541e5e674d7f21ee7c530f309a13e"
  },
  {
    "url": "assets/js/9.b73d38da.js",
    "revision": "68e8171b4f7cf27d3e40f5eef0e8c7a0"
  },
  {
    "url": "assets/js/app.134f9c5f.js",
    "revision": "295927326673cdb9e1f520d13023eaf8"
  },
  {
    "url": "charts-math.html",
    "revision": "18a8f7012f30c12e08988d9a116fabd9"
  },
  {
    "url": "custom-components.html",
    "revision": "d29d7ef746e624de2dbd9c0b5b85d83b"
  },
  {
    "url": "diagrams.html",
    "revision": "68fba836a7f34c4f6bfada1004839789"
  },
  {
    "url": "index.html",
    "revision": "e408e15d36cc712f283c81697b732bf5"
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
