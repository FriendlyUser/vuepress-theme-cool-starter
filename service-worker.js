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
    "revision": "0eff2c89fa19e4ef91bb664060b1db4a"
  },
  {
    "url": "admonitions.html",
    "revision": "95a8126d9ce6c7d5b7a3c6802c0615a3"
  },
  {
    "url": "assets/css/0.styles.6f8f645d.css",
    "revision": "56e72be23acb7953fe9c3946ac85347b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b7ff9517.js",
    "revision": "f3701635f21a34ae0a4c58b8b9fde961"
  },
  {
    "url": "assets/js/11.0c084b0d.js",
    "revision": "45c28677a99197dc8b39e0da4d15d4c1"
  },
  {
    "url": "assets/js/12.3a4d6055.js",
    "revision": "c767e4d85e14e61808ce8013dfb9eb0a"
  },
  {
    "url": "assets/js/13.6a32d834.js",
    "revision": "81c0c85d2f2b3ec6aa16471b9a8fe32c"
  },
  {
    "url": "assets/js/14.d742f340.js",
    "revision": "a55870bb627a6be82f05b5d14e1c6626"
  },
  {
    "url": "assets/js/15.b0754b06.js",
    "revision": "a7c9af2dcd3fc63a2964c0a42acfd921"
  },
  {
    "url": "assets/js/16.b5cc0eaa.js",
    "revision": "a32545b971604ff5b660db6e243910c8"
  },
  {
    "url": "assets/js/17.ff6f1a5e.js",
    "revision": "4c655b9548bb7416982b6f7920747c5b"
  },
  {
    "url": "assets/js/18.45517aae.js",
    "revision": "7b74fb60bdb56915ee346b5ae8187c6f"
  },
  {
    "url": "assets/js/19.a63fad27.js",
    "revision": "5aee83d052a45e2e19e7c082a048be28"
  },
  {
    "url": "assets/js/2.bc0e3fc5.js",
    "revision": "54bb69089ecebf71c04d751e03f11d6b"
  },
  {
    "url": "assets/js/20.e30ea40a.js",
    "revision": "9a9188893b71091edfe16864240210cd"
  },
  {
    "url": "assets/js/3.82684082.js",
    "revision": "32b53acafce6ee34c1fa8a9276256fdc"
  },
  {
    "url": "assets/js/4.e87f6d64.js",
    "revision": "47e0318b7c08e58d0deb1babac83acc8"
  },
  {
    "url": "assets/js/5.d211537c.js",
    "revision": "41120fcb3d88cb426ac4e0546c68c510"
  },
  {
    "url": "assets/js/6.cccb13c8.js",
    "revision": "f31c42b62046203cbb6d4897fdd85aeb"
  },
  {
    "url": "assets/js/7.3c12ba03.js",
    "revision": "fbee2780207759703c471139702fb065"
  },
  {
    "url": "assets/js/8.8c316258.js",
    "revision": "1220fbea7e410af0166fe613ab5f7699"
  },
  {
    "url": "assets/js/9.87add9a6.js",
    "revision": "a2ca92d1081f4fa525ef2c782cb3ea02"
  },
  {
    "url": "assets/js/app.7e2aec2d.js",
    "revision": "6cc33588ed72f29effebca480aef7f66"
  },
  {
    "url": "charts-math.html",
    "revision": "958c2583c99c31942632695590afab0e"
  },
  {
    "url": "custom-components.html",
    "revision": "5cc205a172712201fe27a38354581cf1"
  },
  {
    "url": "diagrams.html",
    "revision": "f328243200d7dc84a330cdf3ec4ebb93"
  },
  {
    "url": "index.html",
    "revision": "45098757bf18dce9d569e8b38eba9dd6"
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
