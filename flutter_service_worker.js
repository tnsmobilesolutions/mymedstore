'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "30635fc1301421db9517917c3dc91c3a",
"assets/AssetManifest.json": "ab3bcc182ec7eecec5386284d71ed9e0",
"assets/assets/images/9176210_6617.jpg": "51a1da730cbf9ca16400a6c7a3f35fc8",
"assets/assets/images/loginImage.png": "9f66b40e71ef157f0b2ef11201f62878",
"assets/assets/images/med.png": "dc1f92af24e6452d931d72db88d78ac8",
"assets/assets/images/med1.png": "7e3f88ced96bda3ef3b3d4cf672b039d",
"assets/assets/images/medicine/cough_syrup.png": "e86b370c367a8af5a94ad6a4556e48ee",
"assets/assets/images/medicine/cream.png": "c66e292fd5a827ec3a5c332523e03a71",
"assets/assets/images/medicine/dermal_patch.png": "f2915aa9eeab0595df153d47f4f17f38",
"assets/assets/images/medicine/drop.png": "bede4c89dbeee2d9e74b6b8c56dfb106",
"assets/assets/images/medicine/emulsion.png": "bd7cf1798fa66cdbc95ad48a23a19882",
"assets/assets/images/medicine/enema.png": "f8c136e67a809965167694d75881a1b8",
"assets/assets/images/medicine/gel.png": "0e03c0477eb4f2c228edff316f5b493d",
"assets/assets/images/medicine/granules.png": "55621b4fc6e5cd5220ecb75b62437583",
"assets/assets/images/medicine/handwash.png": "6df06fd50ddf0c7e360fa6c0a67a6d0c",
"assets/assets/images/medicine/infusion.png": "730a51fb6d038325a2ff558ebcc4ceac",
"assets/assets/images/medicine/kit.png": "223c3428a061dda3421d9c7871d97516",
"assets/assets/images/medicine/liquid.png": "6496b34c3c5802cb0fa61f8d86028179",
"assets/assets/images/medicine/ointment.png": "d032a0bd63d9bc6e1b761c165bdfa23c",
"assets/assets/images/medicine/pill.png": "4fce7c9cbfc325d811b3577fb925c2d0",
"assets/assets/images/medicine/protein_supplement.png": "7827f3d4e346f028d603e0eefb0e90ed",
"assets/assets/images/medicine/sanitary_napkin.png": "e9967856a716e29aedf21a7cfdc1c23a",
"assets/assets/images/medicine/solution.png": "ce75a922ff710ad289c21830cacc6daf",
"assets/assets/images/medicine/spray.png": "2e16ead5e4e1cc5c2b48b2208d4e6c5f",
"assets/assets/images/medicine/strips.png": "b3f694b85bedb7bb751c64ef4a50e308",
"assets/assets/images/medicine/supp.png": "a50efc79ac0793036efa85c03f874844",
"assets/assets/images/medicine/suspension.png": "5d0754bd65dc816f44cd16d71de79841",
"assets/assets/images/medicine/syringe.png": "6e8a5f6f40dd5b5bb7adb9221112bd46",
"assets/assets/images/medicine/syrup.png": "232933e8fe91d35e273fac647c83054c",
"assets/assets/images/medicine/tablets.png": "6c4e1070ce8513a204dad074eb63a0fc",
"assets/assets/images/myMedStore.png": "24e3e87b83d0a224b2d30d6880435955",
"assets/assets/images/no_data.png": "b3cc0364be3ee1ccb1b50ab0046bb28f",
"assets/assets/images/purchase_success1.png": "414304e8de29b491a49773ea163d520d",
"assets/FontManifest.json": "7e89dabed3ee2c8185981d4c98611c0d",
"assets/fonts/MaterialIcons-Regular.otf": "38f5547f6139df3284b9fd548fb4a80f",
"assets/NOTICES": "5e673362b95bb10c6eaead34dabb144e",
"assets/packages/authentication/assets/images/login.png": "1590ee9c438d8f4946a37da840c65953",
"assets/packages/authentication/assets/images/loginbackground.png": "763a42a889a803701db274188a6fcef9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/unicons/icons/UniconsLine.ttf": "9e91f67b470d70332db97056f4074ac3",
"assets/packages/unicons/icons/UniconsSolid.ttf": "4d93206a45f31601d12c705d70d33464",
"assets/packages/unicons/icons/UniconsThinline.ttf": "a986c57934b947d0235ae8bf8875367f",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1f5f85b18c928470b48f621b9b2f9219",
"/": "1f5f85b18c928470b48f621b9b2f9219",
"main.dart.js": "acfe3f47989168583d1845a9e7061b6d",
"manifest.json": "1e9d734599368deb066f4aff33eaaa4f",
"MyMedStore.png": "5ad25535124d4ff3c6af2107983c9b94",
"version.json": "47f97da0979d8b34bcf006b37b69bb26"};
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
