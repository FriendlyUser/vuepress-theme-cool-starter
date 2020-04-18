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
    "revision": "c763e1755dad8106990ca361c7116f96"
  },
  {
    "url": "admonitions.html",
    "revision": "456e0947d87daca042acf19eacfcdca7"
  },
  {
    "url": "assets/css/0.styles.558dfd1f.css",
    "revision": "766a475c5ba00563d7c23968f49467eb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3851e84e.js",
    "revision": "8d0fc6afc2d39c6f19661476610eefd1"
  },
  {
    "url": "assets/js/11.4d9ea743.js",
    "revision": "5baba27ed60d182182287776f418acec"
  },
  {
    "url": "assets/js/12.1c382385.js",
    "revision": "92d58fe01fddcd2d5ebf62c1c3de3651"
  },
  {
    "url": "assets/js/13.bc5aca04.js",
    "revision": "7be4d9a00b3284d9006ecd6c1c9ff81a"
  },
  {
    "url": "assets/js/14.5b2ae05e.js",
    "revision": "e0b6fa8cc8337414de678260da660d67"
  },
  {
    "url": "assets/js/15.20e8f338.js",
    "revision": "5c2615f8ef5a2da8b06480707ce8a02a"
  },
  {
    "url": "assets/js/16.0de8676d.js",
    "revision": "5561c19cd6f8839d838d55d74d0b55ab"
  },
  {
    "url": "assets/js/17.9e2fa78d.js",
    "revision": "fbe4e59cfe6584250935ac8390e6e643"
  },
  {
    "url": "assets/js/18.4b4a777b.js",
    "revision": "0b1faf08fbffabbdfbd8a10efa29c89f"
  },
  {
    "url": "assets/js/19.a24ff691.js",
    "revision": "d49141594c77672aff28f9c4f7c851c6"
  },
  {
    "url": "assets/js/2.321719ec.js",
    "revision": "ca1c8dcb09e6413877c5c233e71b2535"
  },
  {
    "url": "assets/js/3.8df20260.js",
    "revision": "c375ec5cf1f8e30ffa7077b8a85f247b"
  },
  {
    "url": "assets/js/4.3d211d1c.js",
    "revision": "09d30b190f19aea706672c78fd07ff56"
  },
  {
    "url": "assets/js/5.4c88ebec.js",
    "revision": "b6a32aa6920f6642e9070924649b1333"
  },
  {
    "url": "assets/js/6.6ff6bf0e.js",
    "revision": "4cbed4b09568611c2ded3a48828c84dd"
  },
  {
    "url": "assets/js/7.d9dd436f.js",
    "revision": "14e6d0f10c22eab6fa8a4d01b6ff38b5"
  },
  {
    "url": "assets/js/8.d2fc5143.js",
    "revision": "15c854357082ad38531fea725b5a13df"
  },
  {
    "url": "assets/js/9.550fcc2f.js",
    "revision": "60a6138bbb93bb3bf8af92f888dccca8"
  },
  {
    "url": "assets/js/app.da8a7128.js",
    "revision": "9d6c3b07417d7851ba0125edfa0bcb57"
  },
  {
    "url": "charts-math.html",
    "revision": "98d79b5da8d7add66658fe689333e808"
  },
  {
    "url": "custom-components.html",
    "revision": "8104c2551fcd2de08389fc947c5ca7a9"
  },
  {
    "url": "diagrams.html",
    "revision": "8eb8b144dcc8c5579f1fb622ef72d9e0"
  },
  {
    "url": "index.html",
    "revision": "99545269ff530821462949ba0c4132ef"
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
