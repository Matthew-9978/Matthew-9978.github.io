'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f5ee0d927198584666787b4b0c91b68c",
"favicon.ico": "f5341c5d9dc99ba7e48d75c7e4c90317",
"index.html": "28fabf46d24ef49d05a761db16633dfa",
"/": "28fabf46d24ef49d05a761db16633dfa",
"firebase-messaging-sw.js": "71911185b91479014dd99615e18930b0",
"main.dart.js": "57eda22e01117e67bab7145a88423fb6",
"script.js": "0db636ba8a1192470c0a07f094141607",
"icons/favicon-16x16.png": "95894ae4399af0d11971164c5ee37c4b",
"icons/apple-icon.png": "58245553c95f77c336ca50e5ad1e9a3b",
"icons/apple-icon-144x144.png": "cfaf4649cd8b95b5e8acaa2998e961d7",
"icons/android-icon-192x192.png": "d539c8268b388aaba82746a79d740cc6",
"icons/apple-icon-precomposed.png": "58245553c95f77c336ca50e5ad1e9a3b",
"icons/apple-icon-114x114.png": "f313aa736ac41fc9ef99c14f2698a806",
"icons/ms-icon-310x310.png": "186e8d38e70772afdece8a565cb449ce",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/ms-icon-144x144.png": "cfaf4649cd8b95b5e8acaa2998e961d7",
"icons/apple-icon-57x57.png": "c0ee40643b76507a5e3add3e449ffaa9",
"icons/apple-icon-152x152.png": "63d671630be6bbb766fff8da81af3c5d",
"icons/ms-icon-150x150.png": "0ad21617e41c6af39d95348331bcd4f8",
"icons/android-icon-72x72.png": "97677a5c303461d6f9625231e233fe57",
"icons/android-icon-96x96.png": "c0ee40643b76507a5e3add3e449ffaa9",
"icons/android-icon-36x36.png": "93002bdc07089106618663b8d818554a",
"icons/apple-icon-180x180.png": "8ea81a246b48593ba611923508db8666",
"icons/favicon-96x96.png": "7184d78de6af1e555b920a9dc77caee7",
"icons/android-icon-48x48.png": "c87b3def8990acf7b32783509768838d",
"icons/apple-icon-76x76.png": "56d6f765b7ab355c290ec586c53a76a8",
"icons/apple-icon-60x60.png": "415d54bfe33544c68503599a362e44a3",
"icons/ms-icon-96x96.png": "8a324ba7d4dcadc7b83b8d21518b0fd8",
"icons/android-icon-144x144.png": "26de7858c9408446e78dca71e31fa276",
"icons/apple-icon-72x72.png": "97677a5c303461d6f9625231e233fe57",
"icons/apple-icon-120x120.png": "c5a147922eab3779b9a1c8f52713efb8",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "6888ac25687c4c5c6559bc47360cd91f",
"icons/ms-icon-70x70.png": "ec83a56a908762e8978eb718527a1210",
"manifest.json": "231dfb6baf93ef4ef98fb09eb3863dee",
"manifest.webmanifest": "2b193e7fc75b3594116ffebe3abfaa0b",
"assets/AssetManifest.json": "5cea91b075414e9bbfe98fe73449b79f",
"assets/NOTICES": "567ec90ecbebceb9231af382da7583d0",
"assets/FontManifest.json": "ec371b9b3988ad401b70d0c07289b18c",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/petal.svg": "607389129b4548fa99aaf0bab297ad75",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/svg/icon_gift.svg": "ca7d0074080b6a7683bb1f8e37455f4c",
"assets/assets/svg/icon_pause.svg": "81ebedf12637eb831aee46897dd2204a",
"assets/assets/svg/add_address.svg": "d37d1119bd185fc76fa44dfb456882ea",
"assets/assets/svg/order_description.svg": "9c695d763991578d59c8d49c89d5ea2d",
"assets/assets/svg/illustration_specialOffer.svg": "369d46a68942f31e6f1f94aabbc9caf4",
"assets/assets/svg/home_emptyArrow.svg": "f06b36b86c9434d17075722c2c7f68d3",
"assets/assets/svg/image_placeholder.svg": "cd460acd67a0949d95091080d0453160",
"assets/assets/svg/ticket.svg": "ad476e481f8842c8faf143ac70163d33",
"assets/assets/svg/research.svg": "0862c81f149f04c0be03ec1878f71ff3",
"assets/assets/svg/icon_reservation.svg": "640d833d30c0bebdba12dffb6d115c7f",
"assets/assets/svg/icon_beauty.svg": "30bedc5eee95bd48030b98f5b876cfd3",
"assets/assets/svg/icon_searching.svg": "85e779903158fe3f1f44b0a143733396",
"assets/assets/svg/no_connection.svg": "da70f800b5e54f013d6a7dc48f90c39c",
"assets/assets/svg/icon_video.svg": "0ee464ac0eccbf5c325d4a115d4832dc",
"assets/assets/svg/icon_exclamination.svg": "eec7b1a0b4faae2516585b0b7cc93324",
"assets/assets/svg/shipping.svg": "0c88c71ab61289b353a9387ed93f788c",
"assets/assets/svg/icon_voice.svg": "2075ae2b380d4cd124ea5fcc7cd3b059",
"assets/assets/svg/order_code_icon.svg": "9958fa3b2d653c0fbf40fbe620773172",
"assets/assets/svg/icon_play.svg": "0be3edabfeb2e512e679717e0dbe57f3",
"assets/assets/svg/home_noCurrentOrders.svg": "ef76754f848b40ff9cb48323eab5dd31",
"assets/assets/svg/icon_fail.svg": "bd6af23097718f9cb4508201ced9e186",
"assets/assets/svg/icon_star.svg": "be0c11d200128f61cabd7f99d3c6a64e",
"assets/assets/svg/icon_delivering.svg": "7eec5c9bdaaa782ff68abc52fe7709b2",
"assets/assets/svg/empty_address_list.svg": "2ea4db7938ea4e6ff97656e7c5330e89",
"assets/assets/svg/wallet.svg": "5ffeddfe53f2bec09993122ac3147eff",
"assets/assets/svg/onboard-1.svg": "9b143da91b3b6b3ba31a5c22ec72d956",
"assets/assets/svg/warning.svg": "8d532986d6676ae8034d19a831701440",
"assets/assets/svg/onboard-3.svg": "77623d2ad44f694a53bcff49acaa4082",
"assets/assets/svg/onboard-2.svg": "7135b09c5589c211b17519c10fed8f8e",
"assets/assets/svg/icon_logout.svg": "669cc7b482d7ef45101ac08b746a3936",
"assets/assets/svg/logo_with_text.svg": "1c516d00156055d71c9931145203fa4d",
"assets/assets/svg/close.svg": "87f348274d4c05dd3109f1ce01dc5846",
"assets/assets/svg/picture_icon.svg": "54ec4504defec2314b6682c560570700",
"assets/assets/svg/illustration_onboard2.svg": "3523ab2368cd328330bf983985148341",
"assets/assets/svg/order_name_icon.svg": "5f60a2a63b602311c5a429ef3d8b66e0",
"assets/assets/svg/illustration_onboard3.svg": "0b81aaa43007c60b40197c7a9eece2cd",
"assets/assets/svg/icon_filter.svg": "16fe0f9c65b5af4e8b63e2bfcc222b90",
"assets/assets/svg/icon_moneyUnit.svg": "aa8939f9c9cbcce49c3791ef675d4474",
"assets/assets/svg/illustration_onboard1.svg": "0d9b5d60715c7dc2b48bed443de1a979",
"assets/assets/svg/icon_navigation.svg": "d0afe93b186adbb05586e60c8f28d914",
"assets/assets/svg/icon_delivered.svg": "39be9443d866551280071f4885d61b62",
"assets/assets/svg/illustration_empty_list.svg": "fb8ada28d3e9ee4150871eb979edb4db",
"assets/assets/svg/feedback.svg": "8ca43907cded2e8cf487ecadea14f789",
"assets/assets/svg/illustration_reservation.svg": "ca94885ffe1d4a59450d298a5e07b7ab",
"assets/assets/svg/icon_stop.svg": "f73e43bd0cb3d85522c14378a5b68c2a",
"assets/assets/svg/truck.svg": "fa195120afafdc57c18d5d19bdd2204e",
"assets/assets/svg/icon_store.svg": "bdfeb2f1f8df143637c70f279e3e8931",
"assets/assets/svg/about.svg": "9221c87775b2b69df69097d8909f3ebb",
"assets/assets/svg/icon_pharmacy.svg": "5a2bd79c462df6fb49151e7a4caa499c",
"assets/assets/svg/icon_tv.svg": "6298e854bc6a71c60fe6ac986a91625f",
"assets/assets/svg/icon_paid.svg": "c1ce2a773fb85082b327b2129c1f2ed2",
"assets/assets/svg/icon_news.svg": "7d6196536b8bc50a2d204469f1a2ee10",
"assets/assets/svg/feedback_drawer.svg": "99fc187a70e8f6a817c5f9ecaf0b536b",
"assets/assets/svg/inviteFriends.svg": "679da817fb415c994536ea7c798a79ad",
"assets/assets/svg/pharmacy.svg": "64599699987b524a707f55731cec6422",
"assets/assets/svg/pencil.svg": "c783e148646680e7af42a5e3cde18c26",
"assets/assets/svg/icon_vaccine.svg": "359a2e0638a1b401949fe2dfb1e7e0ec",
"assets/assets/svg/Icon_emptySearch.svg": "e5fe158c861b7dbb80cbe2b917d144d8",
"assets/assets/svg/insurance.svg": "daa4ecb363e9fba0cec565a33e3cd3f3",
"assets/assets/svg/bin.svg": "761f73bd1486fb9455d6b2bfc2ef718f",
"assets/assets/svg/icon_home.svg": "f2c73a4ebcdbd9e230e50ace508c280a",
"assets/assets/svg/calendar.svg": "109815463b088ed913a55db66503630c",
"assets/assets/svg/icon_orders.svg": "a44872b773204bfd9bf06e28ae02d4df",
"assets/assets/svg/illustration_doctor.svg": "80a9a3c32e5e0f5f1702619c3fe9a14f",
"assets/assets/svg/address_not_found.svg": "45c94e846d14ff2c4e5b01d264a917eb",
"assets/assets/svg/icon_found.svg": "82338e5aa6956526521def58ca9f29d9",
"assets/assets/svg/payment_success.svg": "e0bfd7614ba82f991b3563159c9a1f5a",
"assets/assets/svg/icon_not_found.svg": "d0ee921e9198cdff968d5de2d0945c82",
"assets/assets/svg/logoWithoutText.svg": "e8fcea0a17945343666ebd1307656a9a",
"assets/assets/share_light.png": "4e199eb036eb081466be631e9fb9da06",
"assets/assets/images/wifi.png": "c0b0b88718993fb4628b2f14ffa7f20f",
"assets/assets/images/warning.png": "2352b5dea3fd70e48056334a48ed2f71",
"assets/assets/images/product_detail.png": "b7766e1e4103f1ed3f8c47627e22495b",
"assets/assets/images/tick.png": "be10432d433a428ce9a739b412d83838",
"assets/assets/images/placeholder_pharmacy.png": "253e77cb22f40500e6bc74b716c920bd",
"assets/assets/images/previous_orders.png": "5a8692cd304b427fbbaa597ee32a83e2",
"assets/assets/images/home.png": "eeb0a10f302d82997d497e42fbbd8180",
"assets/assets/images/illustration_special_offer_background.png": "9a1f33e7018b89c554c9ab0743572b53",
"assets/assets/images/search-logo.png": "3d1ec22ddf45ffcc9231c83d118fc9fa",
"assets/assets/images/birthday.png": "452da2b6dba2b04dcd10d9855955b06b",
"assets/assets/images/logo.png": "6992050b82115671707376d9187add97",
"assets/assets/images/comment.png": "e15147a5c6f5675850a0b088274f6504",
"assets/assets/images/add_adress.png": "d1a85d36214f4fff65a1f5319b029c81",
"assets/assets/images/qr_code.png": "340aaff82c4e191bcad3d3e41541b1ac",
"assets/assets/images/gift.png": "aa1825afe031f97a9240c25a49389e2e",
"assets/assets/images/insurance.png": "e5bb8540427467ff203734d497ba43c5",
"assets/assets/images/location.png": "5296ca87337a69dd964a2c548ade40e8",
"assets/assets/images/search-pharmacy.png": "be2e7616519d328849656df87e4bad10",
"assets/assets/images/pharmacy.png": "4f2b4b2648d7fb0a0cb4c8bc291743bd",
"assets/assets/images/line.png": "3ae9488a2eee9eca5099d18defa73d81",
"assets/assets/images/cream.png": "8fb4a9551d98a85386131136ec637d8a",
"assets/assets/images/marker.png": "60873ad6935dc6590d01b4c68e5cede8",
"assets/assets/images/person_profile_image.png": "063405cdb2c249b9641668d56b652251",
"assets/assets/env.json": "fc15b5c6ef923a96a4adee62b096cecb",
"assets/assets/animation/lottie_map.json": "931b8330060a6b73737925834e5a53a1",
"assets/assets/animation/lottie_delete.json": "691b0d9aae5c30e4ca268082a8a32be3",
"assets/assets/animation/lottie_error.json": "9bf11713d24f4e7c5be22061c96d6ef8",
"assets/assets/animation/lottie_walletSuccessful.json": "66e63add855afbe44aba835f776058c4",
"assets/assets/animation/lottie_guideHint.json": "062c551b77cb90c0abd4ecfa25fbd5ea",
"assets/assets/animation/lottie_update.json": "52ddfc746e4961b658e165c70dc59840",
"assets/assets/splash.png": "27e0009fbe47c3b0811313e332d42df5",
"assets/assets/logo.png": "f98eec885696aa119588abccecf93469",
"assets/assets/fonts/font-icons.ttf": "47d3bf7d3f652d74d47106e38617d9c1",
"assets/assets/fonts/IRANYekanMobileLight.ttf": "a93ddbc3f848e74ceddd9534693c13aa",
"assets/assets/fonts/IRANYekanMobileMedium.ttf": "563e0c749bca9ecc57596712d5483c8a",
"assets/assets/fonts/IRANYekanMobileRegular.ttf": "2c58293edeb64bdb41bcc8fa6353515e",
"assets/assets/fonts/IRANYekanMobileExtraBold.ttf": "94416ca9d72d010295d524f4c1d697d7",
"assets/assets/fonts/IRANYekanMobileBold.ttf": "686e6fe71aee810f04034bd9e5a65a71",
"assets/assets/fonts/IRANYekanMobileThin.ttf": "c31d2fff0d8951a331a1775b4e1b02fc",
"assets/assets/fonts/IRANYekanMobileExtraBlack.ttf": "c8516516d3a641ab68e9376e9c72af2e",
"assets/assets/fonts/IRANYekanMobileBlack.ttf": "c11210adb359d1c7c430801d155e78e4",
"sw.js": "0a6d66bd4dedda90bb42906ffe28932a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
