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
    "revision": "133619cc39be0fecb6fe65297f4fd31c"
  },
  {
    "url": "admonitions.html",
    "revision": "4286952de1f781e8d8cf0783bfb330ae"
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
    "url": "assets/js/10.5796839d.js",
    "revision": "b7c37d1a9574b244824a99c000cc4339"
  },
  {
    "url": "assets/js/11.25668ce2.js",
    "revision": "cf07c3528a8c6d643803d56bc64b4b65"
  },
  {
    "url": "assets/js/12.908efd7a.js",
    "revision": "c44a77414f693c43aa16e7680aa63133"
  },
  {
    "url": "assets/js/13.2afa8343.js",
    "revision": "8c08420337c1837e65b3e2793351513e"
  },
  {
    "url": "assets/js/14.52820bd6.js",
    "revision": "3d2d32effe8e812e44e9e33e512b7492"
  },
  {
    "url": "assets/js/15.14cea6c2.js",
    "revision": "c003a4b3a30d8226800052fbfb901c58"
  },
  {
    "url": "assets/js/16.90b89171.js",
    "revision": "e71bd14e0985e31199f6772652bbeb9f"
  },
  {
    "url": "assets/js/17.a0a3565b.js",
    "revision": "d087325c039b1340223634cf6abe4dc2"
  },
  {
    "url": "assets/js/18.a8559c92.js",
    "revision": "7b74fb60bdb56915ee346b5ae8187c6f"
  },
  {
    "url": "assets/js/19.49c828aa.js",
    "revision": "af68456c66da8dd96bd5c3db11d52ad0"
  },
  {
    "url": "assets/js/2.80fd1bc9.js",
    "revision": "e5b2b34e6af83f4f98cff8021f1fe34e"
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
    "url": "assets/js/3.220fe629.js",
    "revision": "0943d1d028820d3eec81d9b58ad294e9"
  },
  {
    "url": "assets/js/4.9e8daa94.js",
    "revision": "27df7168cf80e01ab5e5705e0a9d6e23"
  },
  {
    "url": "assets/js/5.896b6b07.js",
    "revision": "821b7ac851cabc36c180ebd2749a033c"
  },
  {
    "url": "assets/js/6.4dd3b27b.js",
    "revision": "73f077eecf2fad2765efa0d35e93ad1b"
  },
  {
    "url": "assets/js/7.a308b279.js",
    "revision": "8a5b8c812857c27fb5fe1b1a1af31d04"
  },
  {
    "url": "assets/js/8.5195d6d1.js",
    "revision": "421f35af47f87b29137742eaad541b21"
  },
  {
    "url": "assets/js/9.d97a39ff.js",
    "revision": "d7051f4a17be94ce9a85aa1675af1d7e"
  },
  {
    "url": "assets/js/app.a9a27c1c.js",
    "revision": "5ea929f0c1c4e4d2a9bf67502b36b051"
  },
  {
    "url": "charts-math.html",
    "revision": "5fa4be7f9c310a639071d4f5ebc1b020"
  },
  {
    "url": "custom-components.html",
    "revision": "191a0c552cfc0fb912afbeb70b0a1d0f"
  },
  {
    "url": "diagrams.html",
    "revision": "53bf96962e21533bae8fc46d7ec79485"
  },
  {
    "url": "index.html",
    "revision": "b29049e74e41ec1715405dc54d8e64d8"
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
