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
    "revision": "b5709ce6ca0b5506fb38674907c37548"
  },
  {
    "url": "admonitions.html",
    "revision": "99ebed75659d6f613021501260be4e1e"
  },
  {
    "url": "assets/css/0.styles.ec896d5d.css",
    "revision": "c2b8c220db06e5d6cf19d4ae78afd457"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c1b5d405.js",
    "revision": "bdb04a9fe0ec27aa4c400a1e69755413"
  },
  {
    "url": "assets/js/11.22daa45d.js",
    "revision": "2cccbb559f632b3e424dd1883c58fa2d"
  },
  {
    "url": "assets/js/12.e5ad18b6.js",
    "revision": "7b558b45270082807c9244f2e0e3c016"
  },
  {
    "url": "assets/js/13.c2fb13e7.js",
    "revision": "0eb74a67bfc2317ead4774c4898061c7"
  },
  {
    "url": "assets/js/14.b1c1f387.js",
    "revision": "9ee546fffd4fda39be7095d4beca2a83"
  },
  {
    "url": "assets/js/15.50707501.js",
    "revision": "d12f23f91bb2dc84f49373c0eb701f30"
  },
  {
    "url": "assets/js/16.508d2eaa.js",
    "revision": "efe8ef488dc01e222688e8955365ff8b"
  },
  {
    "url": "assets/js/17.c563dd57.js",
    "revision": "6befffed175e78477a393e7f2204d9c1"
  },
  {
    "url": "assets/js/18.f57d3c28.js",
    "revision": "8d521b51330066a29c797dda9e443b79"
  },
  {
    "url": "assets/js/19.ea41ca32.js",
    "revision": "2d1380d784667f6087fc55115e4297b3"
  },
  {
    "url": "assets/js/2.861e46de.js",
    "revision": "df5b6ce2f2d90c5b2e2f97966fea027c"
  },
  {
    "url": "assets/js/20.d7ce5e13.js",
    "revision": "a368992c26015ea9467424a097d3ff26"
  },
  {
    "url": "assets/js/21.ae3865a5.js",
    "revision": "1247313e7ecdbd8baad75931528229cc"
  },
  {
    "url": "assets/js/3.519ec650.js",
    "revision": "cb50036795a4f16533be250e896407aa"
  },
  {
    "url": "assets/js/4.36b97fe7.js",
    "revision": "942b323fc9176e517aeaa5d193cee6ce"
  },
  {
    "url": "assets/js/5.156b6b1e.js",
    "revision": "58bd99d6d883b3ecdc493ad003857d24"
  },
  {
    "url": "assets/js/6.558c27d0.js",
    "revision": "1c8b41ec79fbac547348d710a37b6093"
  },
  {
    "url": "assets/js/7.56232c3e.js",
    "revision": "6231fa58bdbce4937ad344c5f0c1d411"
  },
  {
    "url": "assets/js/8.100b789c.js",
    "revision": "802533faa4701cdcd33957f0bbbe6f7e"
  },
  {
    "url": "assets/js/9.8fcfafb9.js",
    "revision": "1c7e83af3002b4ce628b39813913bc06"
  },
  {
    "url": "assets/js/app.ba712f73.js",
    "revision": "3da010dfb4af12f1709e3f6d166d6846"
  },
  {
    "url": "charts-math.html",
    "revision": "a4560314a1e5cb97cc7fb5d081c2b8b2"
  },
  {
    "url": "custom-components.html",
    "revision": "638104b348d627e9383a788c6e05419c"
  },
  {
    "url": "diagrams.html",
    "revision": "1ead441808a7efd95b93a4d18adcac8e"
  },
  {
    "url": "index.html",
    "revision": "96f993559f289fb1d8942f028d133da0"
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
