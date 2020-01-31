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
    "revision": "3c21579de5e368e7ebbfa34c3f912a97"
  },
  {
    "url": "admonitions.html",
    "revision": "7cab91bdba0e8bb08686e8172f091b43"
  },
  {
    "url": "assets/css/0.styles.8b729811.css",
    "revision": "331613d29f07acf494eb5865e10d3c8f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9b255dde.js",
    "revision": "6e910d0d704a1cb082fb7f13665ca022"
  },
  {
    "url": "assets/js/11.a37f6472.js",
    "revision": "7d5e1ad48898c3226b4792ea32f16c54"
  },
  {
    "url": "assets/js/12.0eb9d889.js",
    "revision": "1d31ca5fd0c3fb8fec3e46edb67d1acb"
  },
  {
    "url": "assets/js/13.701e40c4.js",
    "revision": "378c8629fb4c0e82f36c7b6fb9e7f8a0"
  },
  {
    "url": "assets/js/14.bc656cec.js",
    "revision": "cc6d43afb5ad920469e52fc18bd6b874"
  },
  {
    "url": "assets/js/15.124fa4ca.js",
    "revision": "604cdd763a5464ba4bc19e8e964a24c0"
  },
  {
    "url": "assets/js/16.4d605429.js",
    "revision": "025393ee2488253329d1e34cdda61c56"
  },
  {
    "url": "assets/js/17.4dfc79cc.js",
    "revision": "8c89674b720cb5be4cb457479bd5a0d6"
  },
  {
    "url": "assets/js/18.998c79b8.js",
    "revision": "7c484c467244cfbcde83bb2f5398c6ba"
  },
  {
    "url": "assets/js/19.cefc5c78.js",
    "revision": "f209f60cb5fc838424a0fa7c7c970278"
  },
  {
    "url": "assets/js/2.9ce50e72.js",
    "revision": "e53cd27527528a92e99dc87655b7a0ac"
  },
  {
    "url": "assets/js/3.9412f3d1.js",
    "revision": "2048bd904e551bb511f12c8f051b3f8d"
  },
  {
    "url": "assets/js/4.6a33f8ff.js",
    "revision": "e834f5f907d6abfe3231495d797ab015"
  },
  {
    "url": "assets/js/5.583f1826.js",
    "revision": "a68becac31ac2759c6f541df6ab38ed7"
  },
  {
    "url": "assets/js/6.173e7fa1.js",
    "revision": "1fd7d521f892fe98be8fe87dea87eafb"
  },
  {
    "url": "assets/js/7.99ed1e6e.js",
    "revision": "557bdc0c5a7bbfff83db3aab4f189fb7"
  },
  {
    "url": "assets/js/8.ee612470.js",
    "revision": "d92899de7fa189b982b64c60bd3d904c"
  },
  {
    "url": "assets/js/9.a0268425.js",
    "revision": "71bd78d0ee58af75db42a1d63e2f1612"
  },
  {
    "url": "assets/js/app.dc3fd1b2.js",
    "revision": "15c9e681c8744023e1af845a0bbb15e3"
  },
  {
    "url": "charts-math.html",
    "revision": "dcc5dd493699d65964035d3236a1de4a"
  },
  {
    "url": "custom-components.html",
    "revision": "e1078650fc65297ece0604aeff08ffd9"
  },
  {
    "url": "diagrams.html",
    "revision": "60bed885ef4eebece2ae829941a58636"
  },
  {
    "url": "index.html",
    "revision": "a6251104c57b6712f403d8db6a90225a"
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
