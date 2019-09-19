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
    "revision": "d3abe91369d9e0091667eb728108aa07"
  },
  {
    "url": "admonitions.html",
    "revision": "5a1b97baa97feaeb8e87e2494aaf2ae1"
  },
  {
    "url": "assets/css/0.styles.30f565ba.css",
    "revision": "b8b0eeac6ae71b97bc04f07ab6f70f8d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e210e539.js",
    "revision": "b9b7381883ebeae9046e32b454ee2641"
  },
  {
    "url": "assets/js/11.f16fb81c.js",
    "revision": "53c2846c700644059640020a7a1de1a2"
  },
  {
    "url": "assets/js/12.dca9915b.js",
    "revision": "8c8fabb597f4169b39c7529103103879"
  },
  {
    "url": "assets/js/13.5a8d92ae.js",
    "revision": "84d98ca52fdf9806b29f1bd524592f03"
  },
  {
    "url": "assets/js/14.be511362.js",
    "revision": "25aadbd8d55e38000a92943a26d666e9"
  },
  {
    "url": "assets/js/15.a12bc18a.js",
    "revision": "b2559b0eef333c85c8720cdadbac9f2c"
  },
  {
    "url": "assets/js/16.26ca9855.js",
    "revision": "95c0ce9f9b0c0bbd1e9da77876018912"
  },
  {
    "url": "assets/js/17.2bc00188.js",
    "revision": "bc92540d105efad8961a9e1fc8b0d66e"
  },
  {
    "url": "assets/js/18.a7561794.js",
    "revision": "2f7f83033186f4e71c16422a853c1276"
  },
  {
    "url": "assets/js/19.cd90ecba.js",
    "revision": "f209f60cb5fc838424a0fa7c7c970278"
  },
  {
    "url": "assets/js/2.842312a4.js",
    "revision": "94b112f27df0d5cc96b6db34b03ae80c"
  },
  {
    "url": "assets/js/3.5bc451aa.js",
    "revision": "8cd9ad3fffc0c2c89261ed20fda3fd52"
  },
  {
    "url": "assets/js/4.fc24f0cd.js",
    "revision": "f9180548326d7cf2ccf2cb4abe73615b"
  },
  {
    "url": "assets/js/5.f25774f4.js",
    "revision": "d1d3ce555e8c5d6afc19a92cefb48ac3"
  },
  {
    "url": "assets/js/6.fc2c6ac5.js",
    "revision": "54c21f0dceacea963f4f5cd62b05b2c4"
  },
  {
    "url": "assets/js/7.87eb85ae.js",
    "revision": "6b50247b100225d93d7bfca2bf39b4dc"
  },
  {
    "url": "assets/js/8.ddf88d59.js",
    "revision": "9f6d73ed5116376bb2bec9d7f9be9939"
  },
  {
    "url": "assets/js/9.af2f5743.js",
    "revision": "be141c32ce815a2053f73c9b10ca125c"
  },
  {
    "url": "assets/js/app.7b800df8.js",
    "revision": "90cf440fd63e30ffe6b7ef14d2b8a774"
  },
  {
    "url": "charts-math.html",
    "revision": "c155be32914bcae47ddf25850a34c7ff"
  },
  {
    "url": "custom-components.html",
    "revision": "836e0d0457fbc68fbb843f9efff7df8c"
  },
  {
    "url": "diagrams.html",
    "revision": "30e8e14af8bdf424f6550a2f14902fe6"
  },
  {
    "url": "index.html",
    "revision": "ea4b7271fe0a0c0877b610f2c426e0f4"
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
