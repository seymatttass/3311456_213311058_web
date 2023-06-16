'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "45e2a211e806523ef3edfea0836f245b",
"index.html": "25cca98e89be3e9a78c5f4bc521d543b",
"/": "25cca98e89be3e9a78c5f4bc521d543b",
"main.dart.js": "f58dfc9b83ab4f751a29f9b4033aea1b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1c6937e6a3f654e3d88fc8164bd988a0",
"assets/images/bde2d4fad603ab5610fb5ca8694778d1.jpg": "6a58fe7fa8abb8a45c2ad2dd972ab07c",
"assets/images/83880f26-12c1-46d1-bc8a-f26acc544f44.jpeg": "4eb9c1297914c6796223e7dbc3fadbd5",
"assets/images/Ggg.jpeg": "bb5d7f7198ebb7cacff3e8066d7bf535",
"assets/images/64ff2aeb-d27e-4912-8093-67f8df610732.jpeg": "34e8d5f95dfc1645b416b735eb01c5eb",
"assets/images/indir.jpeg": "56734475ea5c19250f59797c0e4a3a81",
"assets/images/30da50228346d0976ff6f87e7eb5db29.jpg": "6e04c8212168bda6d7553eecf50855fb",
"assets/images/2c5778c05a723ee81716408649282356.jpg": "9f3c0b81a7696a4c4454a4c39621a9e9",
"assets/images/a35b8b4e-971a-446d-99f9-8e8a3ae2a4f3%2520kopyas%25C4%25B1.jpeg": "0a60c2789478fc667c34f808b7b75431",
"assets/images/0ee3e4360f27beb3e0c8cd5f7a907347.jpg": "0128a1195ff3e0813f565b0c75e21652",
"assets/images/018c7c73-ead4-4958-8625-b102588a54b8.jpeg": "dc2b67d7c30424148c5cecc17b2a79e2",
"assets/images/16097ed015beae32833ab47a34cb0d4a.jpg": "dcfe45b316642b80f5a5cdde9a54407d",
"assets/images/ac6ba55279b3940e984eb0a71790f9b3.jpg": "33e9ec39b7f80b34c604278080fd5c80",
"assets/images/6a4465318f3cf72fa0708d7dc31d05b1.jpg": "19be7c8fa06838fc5932b05969b4ab08",
"assets/images/Restaurante.jpeg": "0a60c2789478fc667c34f808b7b75431",
"assets/images/dldklf.jpeg": "ea7ef34b63b41fc396f002d61ec05e16",
"assets/images/ef2955c4-d3e1-4679-8c34-4d80fe63a78a.jpeg": "80cfbcb9317cf1034043c0a814d9d295",
"assets/images/%25C4%25B0nstagram.jpeg": "e82c83ad7cf37808c1bc4cc138d01bf6",
"assets/images/Instagram%2520hightlight%2520icon.jpeg": "fbb5f67dd4c165c667a85d5607a927d5",
"assets/images/8a341af0d2a37b0836be4e75b938d715.jpg": "f277411f4c8d6aa372037957ec9b8791",
"assets/images/760a7bab84365eb6d15153f3a5712b70.jpg": "4caa73908c79bc7a76e26ed39f43095b",
"assets/images/d36b071f479f174a38cc4d1e4b75c098.jpg": "77155af71c9ec07e933ae25a360d2fe8",
"assets/images/e35ca7cc3eaf5d9acbdf7c6f6ced4437.jpg": "7499ec32b2aebb6c1b79cedb9ba8129f",
"assets/images/86f779a70c7f78ef4b785ebd5cb8fa54.jpg": "b031e302379898f196126fed6a450802",
"assets/images/a99b71b3ab0b260f52483c861f7cea28.jpg": "b1fa3093d147f2b48eb0af13539d47b9",
"assets/images/unnamed.png": "f4ce7470b30deec04a0a5a5067ffa6c2",
"assets/images/Arka%2520plan.jpeg": "771ec8040a694f7fc0484983e6a3438a",
"assets/images/Contacts%2520app%2520icon.png": "9458d848fabecb4046acbe9d9ef547e9",
"assets/images/Fondos%2520Para%2520Word%2520_%2520Fondos%2520De%2520Word,%2520Fondos%2520De%2520Pantalla%2520De%2520%2520CB8.jpeg": "4987ef35361e14d4fbbad8cfce809555",
"assets/images/Faircore.jpeg": "9dafb08123ab48a7c26f19b08a052e10",
"assets/images/Tela%2520inicial%25203.jpeg": "838053c150c1ee6a7171a50de79da2f5",
"assets/images/kkk.png": "e373eea89f3b1588fc2b6f94904e7a4e",
"assets/images/a35b8b4e-971a-446d-99f9-8e8a3ae2a4f3.jpeg": "0a60c2789478fc667c34f808b7b75431",
"assets/AssetManifest.json": "15b1f270189649362bf5e0c60412c453",
"assets/NOTICES": "6df4b90681e531b877cf3acd59584b6c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "788d674a74e5f24d708af240b8346c3b",
"assets/fonts/MaterialIcons-Regular.otf": "051b83f8092e527c21c5282a27f0ff46",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
