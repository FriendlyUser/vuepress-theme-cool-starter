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
    "revision": "928d18539e35f4c1d3d4330f8363d863"
  },
  {
    "url": "admonitions.html",
    "revision": "094d38b54116ab9757a0873bda2fb5a3"
  },
  {
    "url": "assets/css/0.styles.42b7308c.css",
    "revision": "7682ba11b72e74d918a084120690f4d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8bbbafb0.js",
    "revision": "a75dcde98dc18d181c5eca35c0e3b51a"
  },
  {
    "url": "assets/js/11.cce17ec5.js",
    "revision": "06fce63a19923373ac112a0cddddb4bf"
  },
  {
    "url": "assets/js/12.d535ff8f.js",
    "revision": "1a42b7e4efe5e24ead023ef521868b70"
  },
  {
    "url": "assets/js/13.94af1cda.js",
    "revision": "a5f67b3c51322790ba3203573f864fb3"
  },
  {
    "url": "assets/js/14.b0fdbfda.js",
    "revision": "8315e22664f83c94de8f8012e1f9ba24"
  },
  {
    "url": "assets/js/15.3aa34704.js",
    "revision": "7ebb51e4e036cd28ae545193b02a5a3e"
  },
  {
    "url": "assets/js/16.09b7efe0.js",
    "revision": "17b817a9c172b8bfb7fc211353595f7f"
  },
  {
    "url": "assets/js/17.567a99b2.js",
    "revision": "727560aba853aec4b0015e7e545d3e89"
  },
  {
    "url": "assets/js/18.6ded1e9b.js",
    "revision": "09d4940552feb964057f812ecef9d6dd"
  },
  {
    "url": "assets/js/2.b603b627.js",
    "revision": "0d3c439ebff8d060ebaba9b1f44ac883"
  },
  {
    "url": "assets/js/3.cb229bc1.js",
    "revision": "7bd2e6e3c3466f2492251c136a8ae8f4"
  },
  {
    "url": "assets/js/4.9192acf6.js",
    "revision": "b0ed9a18d332f7ad10f41ba3bb602a43"
  },
  {
    "url": "assets/js/5.3d513bbc.js",
    "revision": "6232a06ff97e14b0f5988e35d87bd91a"
  },
  {
    "url": "assets/js/6.acbfc0e7.js",
    "revision": "6dd13bcc5d3022e5f6b13ffe30a52719"
  },
  {
    "url": "assets/js/7.b98bc1c4.js",
    "revision": "e717dc52aaa9a2ffbc2143277a78b2e2"
  },
  {
    "url": "assets/js/8.c21fc4f5.js",
    "revision": "7375ff1fd3e0bb558fc945d8bf5c4084"
  },
  {
    "url": "assets/js/9.52651749.js",
    "revision": "206bb41bdf0b3047bdce3ce4b4d7d525"
  },
  {
    "url": "assets/js/app.cf307dae.js",
    "revision": "4587c43f962ef1d11b126d6c55de9db2"
  },
  {
    "url": "charts-math.html",
    "revision": "9db9a86f7ba9f711a461f89bc88572c8"
  },
  {
    "url": "custom-components.html",
    "revision": "514c632a7c58a08616f81efcd9e2ee26"
  },
  {
    "url": "diagrams.html",
    "revision": "44142a1e19834771ff09f9c5aa2616fe"
  },
  {
    "url": "index.html",
    "revision": "995ee3d77afaaf36355d99a372e440b2"
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
