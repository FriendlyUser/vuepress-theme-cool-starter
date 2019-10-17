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
    "revision": "f5870c96bda1ee9ac3b12da0e5932dbe"
  },
  {
    "url": "admonitions.html",
    "revision": "6460f920a1fe3827ba794778c4c46ae4"
  },
  {
    "url": "assets/css/0.styles.90850b73.css",
    "revision": "69653ef8e735ac7094f911f262845c6e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.312f94f8.js",
    "revision": "b9b7381883ebeae9046e32b454ee2641"
  },
  {
    "url": "assets/js/11.f5693f89.js",
    "revision": "53c2846c700644059640020a7a1de1a2"
  },
  {
    "url": "assets/js/12.2c2b2406.js",
    "revision": "8c8fabb597f4169b39c7529103103879"
  },
  {
    "url": "assets/js/13.744bb796.js",
    "revision": "b0311272444524a833b72c27e24e5521"
  },
  {
    "url": "assets/js/14.b82276cf.js",
    "revision": "73798238df0292cceb4d2a41ebc7c40f"
  },
  {
    "url": "assets/js/15.7c70c58c.js",
    "revision": "4b6d6cfa0f8d9f5e5b4cf0ef70157248"
  },
  {
    "url": "assets/js/16.735ef2b0.js",
    "revision": "138ff3250e804c6bdf2329d19a9f2c61"
  },
  {
    "url": "assets/js/17.dac83a44.js",
    "revision": "4cd815af15e0a80eb59850c0c1ec52fa"
  },
  {
    "url": "assets/js/18.a7561794.js",
    "revision": "2f7f83033186f4e71c16422a853c1276"
  },
  {
    "url": "assets/js/19.f2f9d085.js",
    "revision": "23668eed6a9cd9bfe6adc7a32f9b3d63"
  },
  {
    "url": "assets/js/2.e3e6c54c.js",
    "revision": "58fe29b662e8e7dc4cb79757f9126a11"
  },
  {
    "url": "assets/js/3.a67811fd.js",
    "revision": "5102cbf4116d73635ea6138cdbac7b6e"
  },
  {
    "url": "assets/js/4.cfda85f2.js",
    "revision": "ada086a62be0a83400932f77b8129eb7"
  },
  {
    "url": "assets/js/5.1f1c8163.js",
    "revision": "a362fdde4f63f838dbdeea446258d51c"
  },
  {
    "url": "assets/js/6.410a0d3d.js",
    "revision": "e92cb812b95a05275d67438c3015c8ae"
  },
  {
    "url": "assets/js/7.c8a5c5dc.js",
    "revision": "fdb897f2288942008b47cb96239dc96b"
  },
  {
    "url": "assets/js/8.2ff4279c.js",
    "revision": "9f6d73ed5116376bb2bec9d7f9be9939"
  },
  {
    "url": "assets/js/9.cc4c44c8.js",
    "revision": "3252898ef5e57c28eb05a5b0b07d1195"
  },
  {
    "url": "assets/js/app.85f2d7bf.js",
    "revision": "b3039526e4a69163af1e5360b1158adf"
  },
  {
    "url": "charts-math.html",
    "revision": "ca02ff7e00c4c12b12afb34bd8d7161a"
  },
  {
    "url": "custom-components.html",
    "revision": "d6f7789b178cdd699aa5f9a2983d8a26"
  },
  {
    "url": "diagrams.html",
    "revision": "182aa99c0254bda937fca819cfade391"
  },
  {
    "url": "index.html",
    "revision": "4d693412f79cfd070da9f1066a758a57"
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
