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
    "revision": "d90dd16d15f122d6ae84c5eef2441423"
  },
  {
    "url": "admonitions.html",
    "revision": "5bd3cd1e1dd46d3294bc6e34608795f3"
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
    "url": "assets/js/10.af7504b4.js",
    "revision": "5b700f528fd24bc5deb14828222bbf3a"
  },
  {
    "url": "assets/js/11.5f1b302a.js",
    "revision": "586694d52afd2642b87d49b0314b8842"
  },
  {
    "url": "assets/js/12.3a065efd.js",
    "revision": "3cd7445eab9fc660e27a0ea5b8e734d4"
  },
  {
    "url": "assets/js/13.2fe486ae.js",
    "revision": "6cca45a4e4756552a77fac5476db04c8"
  },
  {
    "url": "assets/js/14.2b98846c.js",
    "revision": "41c139c44c7bda6f716ff7872155a932"
  },
  {
    "url": "assets/js/15.1e9229d8.js",
    "revision": "fc1f11bc4c196e4173790af242b94390"
  },
  {
    "url": "assets/js/16.a8668daf.js",
    "revision": "37eda01cd52c3ae8a454f77464065a14"
  },
  {
    "url": "assets/js/17.8cf1ddb7.js",
    "revision": "fee10f912d77ec69af877ae0ded98aca"
  },
  {
    "url": "assets/js/18.b5c5d720.js",
    "revision": "0c363e2951ea6ed80bbf0899b12445c4"
  },
  {
    "url": "assets/js/19.b9eaf7d6.js",
    "revision": "8c017c9abc0a21b3b2da8597781e0e9d"
  },
  {
    "url": "assets/js/2.6eb25256.js",
    "revision": "e65083b0a46c484efb4644603bbcc9ae"
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
    "url": "assets/js/3.84096c3f.js",
    "revision": "6142842a6bcc58d882f4be5ffc47f462"
  },
  {
    "url": "assets/js/4.2e480821.js",
    "revision": "72161320b8ed71659a8513de79fc0b17"
  },
  {
    "url": "assets/js/5.6aaa9bf4.js",
    "revision": "492074e5a36b32521b10f651df8c6135"
  },
  {
    "url": "assets/js/6.1d8dc51c.js",
    "revision": "d0b9b6f08a44cc68784859e1769d9a12"
  },
  {
    "url": "assets/js/7.1eff58e2.js",
    "revision": "91baafa0513235337b120139776920ae"
  },
  {
    "url": "assets/js/8.c14e7564.js",
    "revision": "10f69c4a0fdd97a8b2b864c02682be10"
  },
  {
    "url": "assets/js/9.b5f29288.js",
    "revision": "daf5dfdfec0ce2bb0779eba291378d81"
  },
  {
    "url": "assets/js/app.4c7ab74c.js",
    "revision": "efda2f5b598991e96dca36c360177d5b"
  },
  {
    "url": "charts-math.html",
    "revision": "6edfdc5afc18a246518abdd63210600a"
  },
  {
    "url": "custom-components.html",
    "revision": "721ba93ba503e2161938d18b25132aab"
  },
  {
    "url": "diagrams.html",
    "revision": "f8e647783fb939ae0460a0f637977c6b"
  },
  {
    "url": "index.html",
    "revision": "817c44a8a5cd76bc48318b88abdf1946"
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
