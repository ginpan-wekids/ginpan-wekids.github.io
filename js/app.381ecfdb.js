(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1a6b7531":"2ac95428","chunk-1a989800":"e6848c62","chunk-2d213770":"e6af0c9c","chunk-2d22d746":"c3cb2247","chunk-2f8ccc8d":"4546bd5f","chunk-31321610":"71706b18","chunk-49e8924a":"8c0917b0","chunk-9d2720fe":"de643af3","chunk-6ac627b2":"5fb42f29","chunk-34464794":"f5286cac","chunk-4d48963c":"5e6d550b","chunk-50513dd4":"8584cdb3","chunk-5aea3b0a":"2eb8f374","chunk-6120a034":"5f9fcbad","chunk-6a2712de":"d7cf0f86","chunk-2d0c2688":"7817d233","chunk-a42439b2":"563a1a0d","chunk-7b876516":"5dd12ed3","chunk-7e6d1d5e":"31da9106","chunk-7fa92a15":"23549e2c","chunk-7fff44cf":"3be35317","chunk-2d0c1973":"682785f0","chunk-9e5e7ed4":"132302b1","chunk-8ec18ac4":"e4973c6f","chunk-a884906a":"aa9da8db","chunk-bb569d12":"a7afdb96"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1a6b7531":1,"chunk-1a989800":1,"chunk-2f8ccc8d":1,"chunk-31321610":1,"chunk-49e8924a":1,"chunk-9d2720fe":1,"chunk-6ac627b2":1,"chunk-34464794":1,"chunk-4d48963c":1,"chunk-50513dd4":1,"chunk-5aea3b0a":1,"chunk-6120a034":1,"chunk-6a2712de":1,"chunk-a42439b2":1,"chunk-7b876516":1,"chunk-7e6d1d5e":1,"chunk-7fa92a15":1,"chunk-7fff44cf":1,"chunk-9e5e7ed4":1,"chunk-8ec18ac4":1,"chunk-a884906a":1,"chunk-bb569d12":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1a6b7531":"662d46ee","chunk-1a989800":"7c79a3b2","chunk-2d213770":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-2f8ccc8d":"72eec4b5","chunk-31321610":"e67653fd","chunk-49e8924a":"2b19c9d2","chunk-9d2720fe":"e86c2af7","chunk-6ac627b2":"f263af93","chunk-34464794":"72eec4b5","chunk-4d48963c":"e1c92ca0","chunk-50513dd4":"11903be2","chunk-5aea3b0a":"11903be2","chunk-6120a034":"11903be2","chunk-6a2712de":"11903be2","chunk-2d0c2688":"31d6cfe0","chunk-a42439b2":"c9e19444","chunk-7b876516":"4e726053","chunk-7e6d1d5e":"11903be2","chunk-7fa92a15":"63f385a9","chunk-7fff44cf":"5ba6fe89","chunk-2d0c1973":"31d6cfe0","chunk-9e5e7ed4":"fc5cd416","chunk-8ec18ac4":"93d63244","chunk-a884906a":"7bf87182","chunk-bb569d12":"d236caa7"}[e]+".css",c=s.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],p.parentNode.removeChild(p),n(o)},p.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"19f9":function(e,t,n){"use strict";n("8b87")},2573:function(e,t,n){"use strict";n("2f18")},"2f18":function(e,t,n){},"3e4a":function(e,t,n){},"3fbb":function(e,t,n){"use strict";n("daa1")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{style:{background:e.$vuetify.theme.themes[e.theme].background}},[n("router-view"),n("v-snackbar",{attrs:{timeout:1e3},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[n("v-btn",e._b({attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",a,!1),[e._v("Close")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.loginSuccessMsg)+" ")])],1)},c=[],o=n("5530"),i=n("2f62"),s={name:"App",components:{},data:function(){return{snackbar:!1,loginSuccessMsg:"Auto Login Success"}},mounted:function(){var e=this,t=this.$store.subscribe((function(n){switch(n.type){case"auth/authUser":e.snackbar=!0,t();break}}))},methods:Object(o["a"])({},Object(i["b"])("auth",["checkStorageAuthData"])),created:function(){this.checkStorageAuthData()},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}}},u=s,l=n("2877"),d=n("6544"),p=n.n(d),h=n("7496"),f=n("8336"),m=n("2db4"),b=Object(l["a"])(u,r,c,!1,null,null,null),v=b.exports;p()(b,{VApp:h["a"],VBtn:f["a"],VSnackbar:m["a"]});var k=n("9483");Object(k["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var g=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"contents"}},[n("drawer"),n("router-view",{attrs:{name:"topNav"}}),n("v-main",[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1),n("bottom-nav")],1)},x=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{app:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("v-list-item",{attrs:{"two-line":"",to:"/user"}},[n("v-list-item-avatar",[n("img",{attrs:{src:"https://randomuser.me/api/portraits/women/81.jpg"}})]),n("v-list-item-content",[n("v-list-item-title",[e._v("Jane Smith")]),n("v-list-item-subtitle",[e._v("Logged In")])],1)],1)]},proxy:!0}]),model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[e._v("Baby Bear Care")]),n("v-list-item-subtitle",[e._v("Member Toolkit")])],1)],1),n("v-list",[e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.route}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),n("v-list-item",{on:{click:e.onLogout}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Logout")])],1)],1)],2)],1)},y=[],_={data:function(){return{items:[{title:"Login",icon:"mdi-view-dashboard",route:"/login"},{title:"任務",icon:"mdi-calendar-check",route:"/quest"},{title:"成就",icon:"mdi-license",route:"/achievement"},{title:"Dashboard",icon:"mdi-view-dashboard",route:"/dashboard"},{title:"About",icon:"mdi-help-box",route:"/about"}]}},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])("layout",["drawerOpen"])),{},{isOpen:{get:function(){return this.drawerOpen},set:function(e){this.toggleDrawer(e)}}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["b"])("auth",["logout"])),Object(i["b"])("layout",["toggleDrawer"])),{},{onLogout:function(){this.isOpen=!1,this.logout(),this.$router.push("/login")}})},T=_,j=n("132d"),S=n("8860"),N=n("da13"),V=n("8270"),C=n("5d23"),E=n("34c3"),A=n("f774"),I=Object(l["a"])(T,O,y,!1,null,null,null),B=I.exports;p()(I,{VIcon:j["a"],VList:S["a"],VListItem:N["a"],VListItemAvatar:V["a"],VListItemContent:C["b"],VListItemIcon:E["a"],VListItemSubtitle:C["c"],VListItemTitle:C["d"],VNavigationDrawer:A["a"]});var L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-bottom-navigation",{staticClass:"blur",attrs:{app:""}},[n("v-btn",{attrs:{to:"/quest",ripple:{class:"red--text"}}},[n("span",[e._v("任務")]),n("v-icon",[e._v("mdi-calendar")])],1),n("v-btn",{attrs:{to:"/achievement",ripple:{class:"red--text"}}},[n("span",[e._v("成就")]),n("v-icon",[e._v("mdi-medal")])],1),n("v-spacer"),n("v-btn",{attrs:{to:"/user",ripple:{class:"red--text"}}},[n("span",[e._v("管家")]),n("v-icon",[e._v("mdi-account")])],1),n("v-btn",{attrs:{to:"/user",ripple:{class:"red--text"}}},[n("span",[e._v("管家")]),n("v-icon",[e._v("mdi-account")])],1),n("gooey")],1),n("div",{staticClass:"text-center home_posi"},[n("v-btn",{directives:[{name:"background",rawName:"v-background",value:"var(--gc-error)",expression:"'var(--gc-error)'"}],attrs:{fab:"",depressed:"",dark:"",color:"error"}},[n("v-icon",{attrs:{dark:""}},[e._v("mdi-home-outline")])],1)],1)],1)},P=[],D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gooey"},[n("span",{staticClass:"goo-index"})])}],M={},R=M,q=(n("6eea"),Object(l["a"])(R,D,$,!1,null,"f84ae320",null)),F=q.exports,U={components:{Gooey:F}},W=U,z=(n("19f9"),n("b81c")),H=n("2fa4"),J=Object(l["a"])(W,L,P,!1,null,"6d02925c",null),G=J.exports;p()(J,{VBottomNavigation:z["a"],VBtn:f["a"],VIcon:j["a"],VSpacer:H["a"]});var K={components:{Drawer:B,BottomNav:G}},Q=K,X=(n("3fbb"),n("f6c4")),Y=Object(l["a"])(Q,w,x,!1,null,null,null),Z=Y.exports;p()(Y,{VMain:X["a"]});var ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{staticClass:"elevation-0 blur",attrs:{app:"",color:"white"}},[1!=e.backBtn?n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.isOpen=!e.isOpen}}}):e._e(),1==e.backBtn?n("v-icon",{on:{click:e.pageBack}},[e._v("mdi-arrow-left")]):e._e(),n("v-spacer"),n("span",{staticClass:"headline"},[e._v(e._s(e.title))]),n("v-spacer"),e._e()],1)},te=[],ne={props:{title:String,backBtn:Boolean},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])("layout",["drawerOpen"])),{},{isOpen:{get:function(){return this.drawerOpen},set:function(e){this.toggleDrawer(e)}}}),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])("layout",["toggleDrawer"])),{},{pageBack:function(){this.$router.go(-1)}})},ae=ne,re=(n("2573"),n("40dc")),ce=n("5bc1"),oe=n("e449"),ie=Object(l["a"])(ae,ee,te,!1,null,"44579b0e",null),se=ie.exports;p()(ie,{VAppBar:re["a"],VAppBarNavIcon:ce["a"],VBtn:f["a"],VIcon:j["a"],VList:S["a"],VListItem:N["a"],VListItemTitle:C["d"],VMenu:oe["a"],VSpacer:H["a"]});var ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":"",fluid:"","justify-center":""}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.hover;return[n("v-sheet",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticClass:"pr-4 pl-4",class:{isFocus:e.sheetFocus||a},attrs:{color:"transparent",id:"formSheet",width:e.sheetWidth,rounded:"xl"},on:{click:function(t){e.sheetFocus=!0}}},[n("img",{staticClass:"d-flex ml-auto mr-auto pb-2",attrs:{src:"assets/images/icon.svg",width:"80",alt:""}}),n("div",{staticClass:"white--text text-h5 text-center pb-2"},[e._v("小熊摇篮智能教育系统")]),n("div",{staticClass:"text text-center login_t pb-3"},[e._v("Login to your account")]),n("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[n("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("validation-provider",{attrs:{name:"E-Mail",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-text-field",{attrs:{color:"white","error-messages":a,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})]}}],null,!0)}),n("validation-provider",{attrs:{name:"Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("v-text-field",{attrs:{color:"white","error-messages":a,counter:10,label:"Password",required:"",type:e.showPW?"text":"password","append-icon":e.showPW?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showPW=!e.showPW}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})]}}],null,!0)}),n("v-checkbox",{attrs:{label:"Remember Me?"},model:{value:e.rememberme,callback:function(t){e.rememberme=t},expression:"rememberme"}}),n("v-expand-transition",[e.rememberme?n("div",[n("p",[e._v("Ok! I remembered!")])]):e._e()]),n("v-btn",{attrs:{block:"","text-color":"black",rounded:"",large:"",disabled:a},on:{click:e.submit}},[n("v-icon",{staticClass:"icon icon-pacifier"}),n("v-icon",{staticClass:"icon icon-baby-boy-1 mr-2"}),e._v("Login ")],1),n("v-row",[n("v-col",[n("v-divider",{staticStyle:{"margin-top":"13px"}})],1),n("v-col",{staticClass:"text-center",attrs:{cols:"2"}},[e._v("or")]),n("v-col",[n("v-divider",{staticStyle:{"margin-top":"13px"}})],1)],1),n("v-btn",{attrs:{block:"","text-color":"black",rounded:"",large:""},on:{click:e.submit}},[n("v-icon",{staticClass:"fab fa-weixin mr-2"}),e._v("Login with WeChat ")],1)],1)]}}],null,!0)})],1)]}}])})],1)},le=[],de=(n("b0c0"),n("96cf"),n("1da1")),pe=n("4c93"),he=n("7bb1");Object(he["d"])("eager"),Object(he["c"])("required",Object(o["a"])(Object(o["a"])({},pe["c"]),{},{message:"{_field_} 不可為空"})),Object(he["c"])("max",Object(o["a"])(Object(o["a"])({},pe["b"]),{},{message:"{_field_} 最多 {length} 字"})),Object(he["c"])("email",Object(o["a"])(Object(o["a"])({},pe["a"]),{},{message:"{_field_} 格式不正確"}));var fe={components:{ValidationObserver:he["a"],ValidationProvider:he["b"]},data:function(){return{sheetFocus:!1,email:"",password:"",rememberme:!1,showPW:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])("auth",["isAuthenticated"])),{},{sheetWidth:function(){switch(this.$vuetify.breakpoint.name){case"lg":return 600;case"xl":return 800;default:return 400}}}),methods:Object(o["a"])({onClickOutside:function(){this.sheetFocus=!1},submit:function(){var e=this;return Object(de["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.observer.validate();case 2:if(n=t.sent,!n){t.next=14;break}return t.prev=4,t.next=7,e.login({username:e.email,password:e.password});case 7:a=t.sent,1==a&&(console.log("success login"),e.$router.push("/")),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](4),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[4,11]])})))()}},Object(i["b"])("auth",["login"])),created:function(){this.isAuthenticated&&this.$router.push("/")}},me=fe,be=(n("a4c3"),n("ac7c")),ve=n("62ad"),ke=n("a523"),ge=n("ce7e"),we=n("0789"),xe=n("ce87"),Oe=n("0fd9"),ye=n("8dd9"),_e=n("8654"),Te=n("269a"),je=n.n(Te),Se=n("a293"),Ne=Object(l["a"])(me,ue,le,!1,null,"3b0e3c6a",null),Ve=Ne.exports;p()(Ne,{VBtn:f["a"],VCheckbox:be["a"],VCol:ve["a"],VContainer:ke["a"],VDivider:ge["a"],VExpandTransition:we["a"],VHover:xe["a"],VIcon:j["a"],VRow:Oe["a"],VSheet:ye["a"],VTextField:_e["a"]}),je()(Ne,{ClickOutside:Se["a"]}),a["a"].use(g["a"]);var Ce=[{path:"/login",name:"Login",component:Ve},{path:"/",component:Z,redirect:"/user",children:[{path:"dashboard",components:{default:function(){return Promise.all([n.e("chunk-6a2712de"),n.e("chunk-49e8924a"),n.e("chunk-a42439b2")]).then(n.bind(null,"bb51"))},topNav:se},props:{topNav:{title:"DashBoard"}},name:"Home"}]},{path:"/user",component:Z,children:[{path:"/",components:{default:function(){return n.e("chunk-7b876516").then(n.bind(null,"a8c2"))},topNav:se},name:"User"},{path:"membership",components:{default:function(){return n.e("chunk-7e6d1d5e").then(n.bind(null,"0faf"))},topNav:se},name:"Membership"},{path:"orders",components:{default:function(){return Promise.all([n.e("chunk-31321610"),n.e("chunk-49e8924a"),n.e("chunk-9d2720fe")]).then(n.bind(null,"5334"))},topNav:se},name:"MyOrder"},{path:"schools",components:{default:function(){return n.e("chunk-4d48963c").then(n.bind(null,"be7a"))},topNav:se},name:"SchoolSetting"},{path:"settings",components:{default:function(){return n.e("chunk-8ec18ac4").then(n.bind(null,"dcd3"))},topNav:se},name:"MySettings"},{path:"support",components:{default:function(){return n.e("chunk-2d213770").then(n.bind(null,"ad90"))},topNav:se},name:"CustomerSupport"}]},{path:"/quest",component:Z,children:[{path:"/",components:{default:function(){return n.e("chunk-1a989800").then(n.bind(null,"8c7c"))},topNav:se}},{path:"check",components:{default:function(){return n.e("chunk-a884906a").then(n.bind(null,"91f3"))},topNav:se},props:{topNav:{title:"",backBtn:!0}}},{path:"course",components:{default:function(){return n.e("chunk-50513dd4").then(n.bind(null,"f603"))},topNav:se},props:{topNav:{title:"課程",backBtn:!0}}},{path:"timeline",components:{default:function(){return Promise.all([n.e("chunk-7fff44cf"),n.e("chunk-2d0c1973")]).then(n.bind(null,"4760"))},topNav:se},props:{topNav:{title:"",backBtn:!0}}},{path:"rollcall",components:{default:function(){return n.e("chunk-6120a034").then(n.bind(null,"a88d"))},topNav:se},props:{topNav:{title:"點名板",backBtn:!0}}},{path:"cleanup",components:{default:function(){return n.e("chunk-bb569d12").then(n.bind(null,"dd92"))},topNav:se},props:{topNav:{title:"課室清潔",backBtn:!0}}},{path:"interview/absent",components:{default:function(){return n.e("chunk-2f8ccc8d").then(n.bind(null,"0dff"))},topNav:se},props:{topNav:{title:"出缺席訪談",backBtn:!0}}},{path:"interview/observation",components:{default:function(){return n.e("chunk-34464794").then(n.bind(null,"eaed"))},topNav:se},props:{topNav:{title:"個別觀察訪談",backBtn:!0}}},{path:"childcare",components:{default:function(){return Promise.all([n.e("chunk-31321610"),n.e("chunk-6ac627b2")]).then(n.bind(null,"4c14"))},topNav:se},props:{topNav:{title:"保育任務",backBtn:!0}}}]},{path:"/achievement",component:Z,children:[{path:"/",components:{default:function(){return n.e("chunk-5aea3b0a").then(n.bind(null,"c1f0"))},topNav:se}},{path:"scale",components:{default:function(){return Promise.all([n.e("chunk-7fff44cf"),n.e("chunk-9e5e7ed4")]).then(n.bind(null,"d54b"))},topNav:se}},{path:"super",components:{default:function(){return n.e("chunk-7fa92a15").then(n.bind(null,"ad56"))},topNav:se}},{path:"statistics",components:{default:function(){return Promise.all([n.e("chunk-6a2712de"),n.e("chunk-2d0c2688")]).then(n.bind(null,"49d1"))},topNav:se}},{path:"enhancement",components:{default:function(){return n.e("chunk-1a6b7531").then(n.bind(null,"6d85"))},topNav:se},props:{default:function(e){return{type:e.query.type}}}}]},{path:"/about",component:Z,children:[{path:"/",components:{default:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))},topNav:se},name:"About"}]}],Ee=new g["a"]({mode:"history",base:"/",routes:Ce}),Ae=Ee,Ie=n("bc3a"),Be=n.n(Ie),Le=Be.a.create({baseURL:"/api"}),Pe={login:function(e,t){return Le.post("/Auth/SignIn",{username:e,password:t})},refreshToken:function(e){return Le.post("/Auth/RefreshToken",{refreshToken:e})}},De=3e4,$e={accessToken:null,expiredTime:null,refreshToken:null,refreshExpiredTime:null},Me={authUser:function(e,t){e.accessToken=t.accessToken,e.expiredTime=t.expiredTime,e.refreshToken=t.refreshToken,e.refreshExpiredTime=t.refreshExpiredTime},clearAuthData:function(e){e.accessToken=null,e.expiredTime=null,e.refreshToken=null,e.refreshExpiredTime=null}},Re={checkStorageAuthData:function(e){var t=e.commit,n=e.dispatch,a=localStorage.getItem("accessToken");if(a){var r=localStorage.getItem("expiredTime"),c=localStorage.getItem("refreshExpiredTime"),o=localStorage.getItem("refreshToken"),i=new Date;if(i>=r){if(i>=c&&null!==o)return;n("renewToken",o)}else t("authUser",{accessToken:a,expiredTime:r,refreshToken:o,refreshExpiredTime:c}),n("setLogoutTimer",r)}},renewToken:function(e,t){return Object(de["a"])(regeneratorRuntime.mark((function n(){var a,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.state,r=e.dispatch,null==t&&(t=a.refreshToken),n.prev=2,n.next=5,Pe.refreshToken(t);case 5:c=n.sent,r("processAuthRes",c),n.next=13;break;case 9:throw n.prev=9,n.t0=n["catch"](2),setTimeout((function(){r("renewToken")}),De),new Error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,9]])})))()},setLogoutTimer:function(e,t){var n=e.dispatch;setTimeout((function(){console.log("token expired"),n("renewToken")}),t-new Date)},login:function(e,t){return Object(de["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,n.prev=1,n.next=4,Pe.login(t.username,t.password);case 4:return r=n.sent,a("processAuthRes",r),n.abrupt("return",!0);case 9:throw n.prev=9,n.t0=n["catch"](1),new Error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},processAuthRes:function(e,t){var n=e.commit,a=e.dispatch,r={accessToken:t.data.token,expiredTime:new Date(t.data.expireTime),refreshToken:t.data.refreshToken,refreshExpiredTime:new Date(t.data.refreshExpireTime)};n("authUser",r),a("setLogoutTimer",r.expiredTime),localStorage.setItem("accessToken",r.accessToken),localStorage.setItem("expiredTime",r.expiredTime),localStorage.setItem("refreshToken",r.refreshToken),localStorage.setItem("refreshExpiredTime",r.refreshExpiredTime)},logout:function(e){var t=e.commit;t("clearAuthData"),localStorage.removeItem("accessToken"),localStorage.removeItem("expiredTime"),localStorage.removeItem("refreshToken"),localStorage.removeItem("refreshExpiredTime")}},qe={isAuthenticated:function(){return null!==$e.accessToken}},Fe={namespaced:!0,state:$e,mutations:Me,actions:Re,getters:qe},Ue={drawerOpen:!1},We={toggleDrawer:function(e,t){return e.drawerOpen=null!==t&&void 0!==t?t:!e.drawerOpen}},ze={toggleDrawer:function(e,t){var n=e.commit;return n("toggleDrawer",t)}},He={drawerOpen:function(){return Ue.drawerOpen}},Je={namespaced:!0,state:Ue,mutations:We,actions:ze,getters:He},Ge=!0,Ke=function(e){e.subscribe((function(e,t){Ge||console.log(e,t)}))},Qe=Ke;a["a"].use(i["a"]);var Xe=new i["a"].Store({state:{packageVersion:Object({NODE_ENV:"production",BASE_URL:"/"}).PACKAGE_VERSION||"0"},mutations:{},actions:{},getters:{appVersion:function(e){return e.packageVersion}},modules:{auth:Fe,layout:Je},plugins:[Qe]}),Ye=n("f309"),Ze=n("da5b"),et=n.n(Ze),tt=n("e312"),nt=n("aa47"),at=n.n(nt),rt=n("5b27"),ct=n("5025"),ot=n.n(ct),it=n("c0ea"),st=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticStyle:{"enable-background":"new 0 0 189.2 189.2"},attrs:{version:"1.1",id:"圖層_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 189.2 189.2","xml:space":"preserve"}},[n("g",[n("circle",{staticClass:"st0",attrs:{cx:"94.6",cy:"94.6",r:"94.6"}}),n("path",{staticClass:"st1",attrs:{d:"M94.6,172.1c-25.4,0-46-20.6-46-46c0-25.4,20.6-46,46-46c25.4,0,46,20.6,46,46\n\t\tC140.6,151.4,120,172.1,94.6,172.1z M94.6,105.1c-11.6,0-21,9.4-21,21s9.4,21,21,21s21-9.4,21-21S106.2,105.1,94.6,105.1z"}}),n("path",{staticClass:"st2",attrs:{d:"M111.5,38.1V20.6c0-9.5-7.7-17.5-17.2-17.3C85.1,3.5,77.7,11,77.7,20.2v18c0,3.6-2.9,6.5-6.5,6.5\n\t\tc-3.6,0-6.5,2.9-6.5,6.5v26.9h59.8V51.1c0-3.6-2.9-6.5-6.5-6.5C114.4,44.6,111.5,41.7,111.5,38.1z"}}),n("path",{staticClass:"st3",attrs:{d:"M128.9,94.6H60.4c-9,0-16.3-7.3-16.3-16.3v-0.5c0-9,7.3-16.3,16.3-16.3h68.5c9,0,16.3,7.3,16.3,16.3v0.5\n\t\tC145.2,87.3,137.9,94.6,128.9,94.6z"}}),n("path",{staticClass:"st3",attrs:{d:"M108.6,91.1h-28v12.7c0,7.7,6.3,14,14,14s14-6.3,14-14V91.1z"}})])])},ut=[],lt={},dt=lt,pt=(n("64f7"),Object(l["a"])(dt,st,ut,!1,null,"32cc21de",null)),ht=pt.exports;a["a"].use(Ye["a"]);var ft=new Ye["a"]({lang:{locales:{zhHans:Object(o["a"])(Object(o["a"])({},ot.a),it),zhHant:Object(o["a"])(Object(o["a"])({},at.a),rt),en:Object(o["a"])(Object(o["a"])({},et.a),tt)},current:"en"},theme:{themes:{light:{default:"#7e6d61",primary:"#FFA19F",secondary:"#9e8888",info:"#00cae3",success:"#3fbe8f",accent:"#8c9eff",warning:"#ff9563",error:"#ff5252",tertiary:"#fa624d",quaternary:"#6A3F12",background:"#efebe8"}}},icons:{values:{pacifier:{component:ht}}}}),mt=n("77ed"),bt=n.n(mt);a["a"].use(bt.a);n("99af");a["a"].directive("background",{bind:function(e,t){e.style.backgroundImage=t.value}}),a["a"].directive("gradient",{bind:function(e,t,n){var a=n.componentInstance.$vuetify.theme,r=a.currentTheme,c={type:"linear",deg:"60",color1:r.primary,color2:"transparent"},i=Object(o["a"])(Object(o["a"])({},c),t.value);"linear"==i.type?i.prop=i.deg+"deg":i.prop="circle",e.style.backgroundImage="".concat(i.type,"-gradient(").concat(i.prop,",").concat(i.color1,",").concat(i.color2,")")}}),a["a"].config.productionTip=!1,new a["a"]({router:Ae,store:Xe,vuetify:ft,render:function(e){return e(v)}}).$mount("#app")},"5b27":function(e){e.exports=JSON.parse('{"test":"測試"}')},"64f7":function(e,t,n){"use strict";n("3e4a")},"6eea":function(e,t,n){"use strict";n("c251")},"8b87":function(e,t,n){},a4c3:function(e,t,n){"use strict";n("d489")},c0ea:function(e){e.exports=JSON.parse('{"test":"测试"}')},c251:function(e,t,n){},d489:function(e,t,n){},daa1:function(e,t,n){},e312:function(e){e.exports=JSON.parse('{"test":"test"}')}});
//# sourceMappingURL=app.381ecfdb.js.map