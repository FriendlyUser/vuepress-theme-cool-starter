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
    "revision": "468d5927aec6ba5911834c13d871a9ba"
  },
  {
    "url": "admonitions.html",
    "revision": "62aa0f916eac5a273b9de4ea84b22f7f"
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
    "url": "assets/js/10.0b4217d2.js",
    "revision": "9e6720f8ea285a4dddd58199763163d1"
  },
  {
    "url": "assets/js/11.b4b960bb.js",
    "revision": "ca4bab5d2a42a6aae13177521007a475"
  },
  {
    "url": "assets/js/12.50b8f0b6.js",
    "revision": "84c1db64cc678f8c2643d6017074e921"
  },
  {
    "url": "assets/js/13.9e982ce6.js",
    "revision": "e1d02cd9c31ba9f1ca71e68199695f8a"
  },
  {
    "url": "assets/js/14.9c13ceea.js",
    "revision": "134f39c295640e281b3b2e61fc80c3da"
  },
  {
    "url": "assets/js/15.b516cc3d.js",
    "revision": "0c7fe564ea5d444ebfcdd5142f82db4e"
  },
  {
    "url": "assets/js/16.2a890efe.js",
    "revision": "2b11119703ee3036ffef420d46562950"
  },
  {
    "url": "assets/js/17.e445487d.js",
    "revision": "85d3675d75a6d91119601d25158f0d1b"
  },
  {
    "url": "assets/js/18.83cd041d.js",
    "revision": "d29991e40ccbcfab884130f09e0c9d91"
  },
  {
    "url": "assets/js/2.7ecc87dd.js",
    "revision": "e5723c90dda2f66e7e963a824e578474"
  },
  {
    "url": "assets/js/3.4704c491.js",
    "revision": "02d6ced24bb69f91f32d9be49784ea8b"
  },
  {
    "url": "assets/js/4.71ab9b1c.js",
    "revision": "abc0f82cd550517f0c6adcc340d3b84a"
  },
  {
    "url": "assets/js/5.23dae19f.js",
    "revision": "40765b2f9ec1f6f6307649b663b65cc8"
  },
  {
    "url": "assets/js/6.f73a67b1.js",
    "revision": "0da6df7934796aed13939ed8c8950443"
  },
  {
    "url": "assets/js/7.3bee4e30.js",
    "revision": "70666f2801755c256b5407016c50baed"
  },
  {
    "url": "assets/js/8.604bed6e.js",
    "revision": "951541e5e674d7f21ee7c530f309a13e"
  },
  {
    "url": "assets/js/9.b73d38da.js",
    "revision": "68e8171b4f7cf27d3e40f5eef0e8c7a0"
  },
  {
    "url": "assets/js/app.1f36334c.js",
    "revision": "6fbeed16cb6043aa979e836c436d9861"
  },
  {
    "url": "charts-math.html",
    "revision": "ae5021223acd18b7dfd80059a8c0a6c9"
  },
  {
    "url": "custom-components.html",
    "revision": "0aa4527b34d2be6ac102e8db447ec1be"
  },
  {
    "url": "diagrams.html",
    "revision": "14521b81a4e67401fefb6a916260355b"
  },
  {
    "url": "index.html",
    "revision": "4204cd9496bb57c33300d2d99bd82675"
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
