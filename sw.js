importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1b380460b57500ed3f79.js",
    "revision": "fd1ff7572198d4a0c73ee99a32cbf8ff"
  },
  {
    "url": "/_nuxt/1c31618ddefc3b3eb195.js",
    "revision": "c204cecc4ed8190f61d088f26599bbf2"
  },
  {
    "url": "/_nuxt/3a32851ae4798c295e56.js",
    "revision": "b0b59b5e08481539086873c3ece80346"
  },
  {
    "url": "/_nuxt/4017eb48df5e99bb91f1.js",
    "revision": "96ee307b72c831e66dec1b9a765c3331"
  },
  {
    "url": "/_nuxt/44f126e596932cdfe7a9.js",
    "revision": "7e6fdf59dfbd193e0a545b4008ac7f6d"
  },
  {
    "url": "/_nuxt/4eda1f5bce50934feaee.js",
    "revision": "5c19e974ca393e41c243de0f8cb82ce4"
  },
  {
    "url": "/_nuxt/643d5ed9b14ad7637e50.js",
    "revision": "f6c429613ac44ef59b467ac74b7ecbf7"
  },
  {
    "url": "/_nuxt/84a4af359b4a590d94c9.js",
    "revision": "888ba42e0f8b191d345b4e15262455a6"
  },
  {
    "url": "/_nuxt/a20fc471c6360758fc31.js",
    "revision": "7bcfc2bc2cef7431956d9372290125fb"
  },
  {
    "url": "/_nuxt/b085ff19835b3b0fa015.js",
    "revision": "fe7af089db4526533406b47af0abe9e3"
  },
  {
    "url": "/_nuxt/e7c03b7d9d0f950cd456.js",
    "revision": "02f07ddc9fd712f10b919bbf118b1cd8"
  }
], {
  "cacheId": "soderif",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
