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
    "revision": "d4cc03d3ad293b39facf65eff520e36b"
  },
  {
    "url": "admonitions.html",
    "revision": "77e8e26e845db83ac313039af5998447"
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
    "url": "assets/js/11.af99dc85.js",
    "revision": "8bf4527c5253a74f873b8261f2e52ac5"
  },
  {
    "url": "assets/js/12.0edd637c.js",
    "revision": "0f42d556456bba1b525c272925b8619b"
  },
  {
    "url": "assets/js/13.22d722dd.js",
    "revision": "2eb68d4a2cae9ccd5df4649bd3dc6f3e"
  },
  {
    "url": "assets/js/14.8a25a00c.js",
    "revision": "b671165d861bb41ef1aa3828bc011e17"
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
    "url": "assets/js/2.8a1dc499.js",
    "revision": "959a9e0ca2f3d65b04b14659dc53424a"
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
    "url": "assets/js/3.5bac0292.js",
    "revision": "19ffd2520c4c098617eaf8586546354f"
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
    "url": "assets/js/7.9895b8aa.js",
    "revision": "c4087f0a32352a0f70e155749207be01"
  },
  {
    "url": "assets/js/8.ac7680eb.js",
    "revision": "1ecd352b2d3ccc45da77defb8de4c7c9"
  },
  {
    "url": "assets/js/9.51a3e159.js",
    "revision": "c7bbdf57e5983b06d509b6fa632c9ad0"
  },
  {
    "url": "assets/js/app.56cbcce5.js",
    "revision": "9b8c96df3bd1720ac3d72d533f900de4"
  },
  {
    "url": "charts-math.html",
    "revision": "30577ee7531582d5070e80f4fe54b149"
  },
  {
    "url": "custom-components.html",
    "revision": "59606793448661d4735f72d38b8f3da4"
  },
  {
    "url": "diagrams.html",
    "revision": "76e020abf1bcd4711641948232de068a"
  },
  {
    "url": "index.html",
    "revision": "5e1dc79e3e58e0bb567e47338ffc4c14"
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
