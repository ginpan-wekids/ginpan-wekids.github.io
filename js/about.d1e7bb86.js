(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t._m(0),e("v-btn",{attrs:{color:"primary"},on:{click:t.addToHomeScreen}},[t._v("Add To Home Screen")]),e("h1",[t._v("Notification Status : "+t._s(t.notificationStatus))]),e("v-btn",{on:{click:t.grantNotifiPermission}},[t._v("Grant Notification Permission")]),e("v-btn",{on:{click:function(o){return t.pushNotification("Test")}}},[t._v("Push")])],1)},i=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],r={data:function(){return{deferredPrompt:null}},computed:{notificationStatus:function(){return Notification.permission}},created:function(){navigator.setAppBadge(2),window.addEventListener("beforeinstallprompt",(function(t){return console.log("beforeinstallprompt fired"),t.preventDefault(),this.deferredPrompt=t,!1}))},methods:{addToHomeScreen:function(){this.deferredPrompt&&(this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then((function(t){console.log(t.outcome),"dismissed"===t.outcome?console.log("User cancelled installation"):console.log("User added to home screen")})),this.deferredPrompt=null)},grantNotifiPermission:function(){Notification.requestPermission((function(t){console.log("Notification permission status:",t)}))},pushNotification:function(t){"granted"==Notification.permission&&navigator.serviceWorker.getRegistration().then((function(o){o.showNotification(t)}))}}},s=r,c=e("2877"),a=e("6544"),u=e.n(a),f=e("8336"),d=Object(c["a"])(s,n,i,!1,null,null,null);o["default"]=d.exports;u()(d,{VBtn:f["a"]})}}]);
//# sourceMappingURL=about.d1e7bb86.js.map