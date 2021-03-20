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
    "revision": "7ae77cb9798c081e34cdfc3f6c9170d3"
  },
  {
    "url": "admonitions.html",
    "revision": "3ac31029cc8a3c059f1be215fbaff4b0"
  },
  {
    "url": "assets/css/0.styles.54f787f1.css",
    "revision": "6bae155975f94e9ba90ecbdf005566b1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a25006e5.js",
    "revision": "38ce40e56d8d80efd86ee6fbf1e787ad"
  },
  {
    "url": "assets/js/11.8e6dc117.js",
    "revision": "79390d40bd7e1dc286da9b69b40cda91"
  },
  {
    "url": "assets/js/12.7186f3b2.js",
    "revision": "5eb1dbf3155dd62085c7e900fd990ca5"
  },
  {
    "url": "assets/js/13.22d722dd.js",
    "revision": "2eb68d4a2cae9ccd5df4649bd3dc6f3e"
  },
  {
    "url": "assets/js/14.d6d73b61.js",
    "revision": "de7ca8826ed39c36ec4655042b884670"
  },
  {
    "url": "assets/js/15.2506725e.js",
    "revision": "1b33371f25dd53f8d68ebc7f908a532b"
  },
  {
    "url": "assets/js/16.a43ec609.js",
    "revision": "4e9e88a6906e09f724b2fc55226e419a"
  },
  {
    "url": "assets/js/17.6848a098.js",
    "revision": "ef8160137d25f9a3bf07556f4325688d"
  },
  {
    "url": "assets/js/18.f17292f0.js",
    "revision": "994f0d25480af1ee2c3331451b406a9a"
  },
  {
    "url": "assets/js/19.e5b33174.js",
    "revision": "361e73afaea3ddcaddbc66e9c46cd7f9"
  },
  {
    "url": "assets/js/2.459f9943.js",
    "revision": "f73578e1f9a130a113b2688cd1656927"
  },
  {
    "url": "assets/js/20.fc9cec56.js",
    "revision": "bfe77889fcfa6a2b94965e3a2641a746"
  },
  {
    "url": "assets/js/21.8872164f.js",
    "revision": "65fa3c5ef9830f24e59e259d6d541b4e"
  },
  {
    "url": "assets/js/3.97ceaaeb.js",
    "revision": "ff3ed83a46a747a304b331e73221babf"
  },
  {
    "url": "assets/js/4.30cd339d.js",
    "revision": "b5acc1d171df778583bc1c6a774978c5"
  },
  {
    "url": "assets/js/5.0f72b9b4.js",
    "revision": "0bf3473390ac3b2bd2ac631833c095be"
  },
  {
    "url": "assets/js/6.7913b66e.js",
    "revision": "1326abae8a9636aabfba9863d0ef6abc"
  },
  {
    "url": "assets/js/7.64e00278.js",
    "revision": "1b83fa4511e3dd1849f26c1de983b081"
  },
  {
    "url": "assets/js/8.ac7680eb.js",
    "revision": "1ecd352b2d3ccc45da77defb8de4c7c9"
  },
  {
    "url": "assets/js/9.90e414c5.js",
    "revision": "352d1335e10f94796f517b7d35080e90"
  },
  {
    "url": "assets/js/app.8726f2c1.js",
    "revision": "04cb5d9d560d091da28c32a36dbb7d0d"
  },
  {
    "url": "charts-math.html",
    "revision": "652f2d487edae4bdf85db18598107004"
  },
  {
    "url": "custom-components.html",
    "revision": "4e8c4869529a791be2b320446f3ce98b"
  },
  {
    "url": "diagrams.html",
    "revision": "c6b995e76d52d544d0e14a584f91c6d9"
  },
  {
    "url": "index.html",
    "revision": "918bd476ab28488eeef49a6ee89043ea"
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
