(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"33e44a3a","chunk-c7f66dc4":"d971d0e5"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-c7f66dc4":1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-c7f66dc4":"73b17dfc"}[t]+".css",a=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===n||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],d.parentNode.removeChild(d),r(i)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"title"},[t._v("Baby Bear Care")]),r("v-list-item-subtitle",[t._v("Member Toolkit")])],1)],1),r("v-list",t._l(t.items,(function(e){return r("v-list-item",{key:e.title,attrs:{to:e.route}},[r("v-list-item-icon",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}})],1)],1),r("v-main",[r("router-view"),t.deferredPrompt?r("v-btn",{attrs:{fab:"",fixed:"",right:"",bottom:""},on:{click:function(e){return e.preventDefault(),t.onClickInstall(e)}}}):t._e()],1)],1)},a=[],i={name:"App",components:{},data:function(){return{drawer:!1,items:[{title:"Dashboard",icon:"mdi-view-dashboard",route:"/home"},{title:"Camera",icon:"mdi-camera",route:"/camera"},{title:"About",icon:"mdi-help-box",route:"/about"}],deferredPrompt:null}},methods:{showInstallPromotion:function(){},onClickInstall:function(){this.deferredPrompt?(this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then((function(t){"accepted"===t.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt")}))):console.log("deferredPrompt is null")}},created:function(){var t=this;window.addEventListener("beforeinstallprompt",(function(e){console.log("beforeinstallprompt fired"),e.preventDefault(),t.deferredPrompt=e,t.showInstallPromotion()}))}},s=i,c=r("2877"),l=r("6544"),u=r.n(l),f=r("7496"),d=r("40dc"),m=r("5bc1"),p=r("8336"),h=r("132d"),v=r("adda"),g=r("8860"),b=r("da13"),y=r("5d23"),w=r("34c3"),_=r("f6c4"),k=r("f774"),x=Object(c["a"])(s,o,a,!1,null,null,null),C=x.exports;u()(x,{VApp:f["a"],VAppBar:d["a"],VAppBarNavIcon:m["a"],VBtn:p["a"],VIcon:h["a"],VImg:v["a"],VList:g["a"],VListItem:b["a"],VListItemContent:y["a"],VListItemIcon:w["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VMain:_["a"],VNavigationDrawer:k["a"]});var j=r("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7");var V=r("8c4f"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},A=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:r("9b19"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},I=[],L={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},O=L,S=r("62ad"),N=r("a523"),T=r("0fd9"),B=Object(c["a"])(O,E,I,!1,null,null,null),D=B.exports;u()(B,{VCol:S["a"],VContainer:N["a"],VImg:v["a"],VRow:T["a"]});var M={name:"Home",components:{HelloWorld:D}},q=M,H=Object(c["a"])(q,P,A,!1,null,null,null),W=H.exports;n["a"].use(V["a"]);var F=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/camera",name:"Camera",component:function(){return r.e("chunk-c7f66dc4").then(r.bind(null,"6ec0"))}}],$=new V["a"]({routes:F}),U=$,J=r("2f62");n["a"].use(J["a"]);var K=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Q=r("f309");n["a"].use(Q["a"]);var R=new Q["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:U,store:K,vuetify:R,render:function(t){return t(C)}}).$mount("#app")},"9b19":function(t,e,r){t.exports=r.p+"img/logo.63a7d78d.svg"},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0e2355c6.js.map