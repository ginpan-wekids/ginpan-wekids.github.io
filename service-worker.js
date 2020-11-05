importScripts("/precache-manifest.918f0010891f20c688cbfe5b92cb9636.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// 設定相應快取的名字的字首和字尾
workbox.core.setCacheNameDetails({
    prefix: 'ece-pwa',
    suffix: 'v0.1.0',
});
// 讓我們的service worker儘快的得到更新和獲取頁面的控制權
workbox.skipWaiting();
workbox.clientsClaim();

/*
* vue-cli3.0通過workbox-webpack-plagin 來實現相關功能，我們需要加入
* 以下語句來獲取預快取列表和預快取他們，也就是打包專案後生產的html，js，css等* 靜態檔案
*/
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// 對我們請求的資料進行快取，這裡採用 networkFirst 策略
workbox.routing.registerRoute(
    new RegExp('.*experiments\?.*'),
    workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
    new RegExp('.*experiments/\\d'),
    workbox.strategies.networkFirst()
)
workbox.routing.registerRoute(
    new RegExp('.*experiment_types.*'),
    workbox.strategies.networkFirst()
)
