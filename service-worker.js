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
    "revision": "641d32685066fbd3fc23e942ef8731c0"
  },
  {
    "url": "admonitions.html",
    "revision": "3874b7cbb00acbab99b0e21ac5e8ddf7"
  },
  {
    "url": "assets/css/0.styles.3c72f540.css",
    "revision": "c56a51286ad3e49f7ff9806d8b0ca2d2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8c7e4471.js",
    "revision": "d0fc7e905cbd079194ecabf0811bbd57"
  },
  {
    "url": "assets/js/11.3bb0b498.js",
    "revision": "ee4061d33ed4ae9794b8f4beb0dadf33"
  },
  {
    "url": "assets/js/12.c87db540.js",
    "revision": "74edc2ac34f39defa52db43dfa4f3cf3"
  },
  {
    "url": "assets/js/13.d289e2aa.js",
    "revision": "692d2528d7ea3d79f425120d656b6b3f"
  },
  {
    "url": "assets/js/14.91e56941.js",
    "revision": "5f9ee3bcc55bf9246762a81ccf406cee"
  },
  {
    "url": "assets/js/15.0e721f3f.js",
    "revision": "e54db6c98fd1ff0dadd24e64366bdff3"
  },
  {
    "url": "assets/js/16.5d50e10c.js",
    "revision": "f0d125aaf27c1a18d9a4ce12c9a9d6d0"
  },
  {
    "url": "assets/js/17.af607f52.js",
    "revision": "a30eb98a03c1dc531d30118777b9897a"
  },
  {
    "url": "assets/js/18.998c79b8.js",
    "revision": "7c484c467244cfbcde83bb2f5398c6ba"
  },
  {
    "url": "assets/js/19.30fd2947.js",
    "revision": "f5a9fe41d14abe3723dabbe72f048931"
  },
  {
    "url": "assets/js/2.ed5c024d.js",
    "revision": "9cad354eb3e8a4c30f27ff37574416ae"
  },
  {
    "url": "assets/js/3.563ae904.js",
    "revision": "b338aa2e3ac6e747eed15bf45f16d285"
  },
  {
    "url": "assets/js/4.5cebcbcb.js",
    "revision": "e9d160f8c8becdab0cbfde38a0c0a0c6"
  },
  {
    "url": "assets/js/5.461faafc.js",
    "revision": "dad7c8935b89f7cee84a66ab957a28c9"
  },
  {
    "url": "assets/js/6.e06dcd0e.js",
    "revision": "8f92d8ae8628ee79150aff9f43724756"
  },
  {
    "url": "assets/js/7.204ca8e1.js",
    "revision": "348a8d06b0706393f74b6d0e80b0ebaf"
  },
  {
    "url": "assets/js/8.da3c0051.js",
    "revision": "cd88d4d9aaf0d050878e89fd24e89f8b"
  },
  {
    "url": "assets/js/9.4636827f.js",
    "revision": "ded6d767735292028704c96bcb452fca"
  },
  {
    "url": "assets/js/app.ce45683a.js",
    "revision": "426506e1470a4191fb54d46c7986eaf0"
  },
  {
    "url": "charts-math.html",
    "revision": "a4dbdbb21712bb97c48cdcdd4fc68e7b"
  },
  {
    "url": "custom-components.html",
    "revision": "906ba739bf7abf7f3b9d402e3630f795"
  },
  {
    "url": "diagrams.html",
    "revision": "e9ea33c844970c8b3d797b86eb014d38"
  },
  {
    "url": "index.html",
    "revision": "d7250acd7ce9ba0dc9dc80499816fd35"
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
