(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{214:function(t,e,n){var r=n(219),i=n(81),o=n(50),a=n(114),s=n(28),u=n(120),c=Object.getOwnPropertyDescriptor;e.f=n(26)?c:function(t,e){if(t=o(t),e=a(e,!0),u)try{return c(t,e)}catch(t){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},216:function(t,e,n){var r=n(25),i=n(49),o=n(5)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},217:function(t,e,n){var r=n(25),i=n(218).set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},218:function(t,e,n){var r=n(25),i=n(18),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(80)(Function.call,n(214).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},219:function(t,e){e.f={}.propertyIsEnumerable},220:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return v}));const r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,a=/^[a-z]+:/i;function s(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;const e=t.match(r),n=e?e[0]:"",i=s(t);return o.test(i)?t:i+".html"+n}function h(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&s(t.path)===s(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const o=t.replace(/^\//,"").split("/");for(let t=0;t<o.length;t++){const e=o[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=s(e);for(let e=0;e<t.length;e++)if(s(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:o}=n,a=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||a.sidebar||o.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const s=a.sidebar||o.sidebar;if(s){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,s);return n?n.map(e=>(function t(e,n,r,i=1){if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const o=e.children||[];return 0===o.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:o.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}})(e,i,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},221:function(t,e,n){var r=n(17),i=n(29),o=n(24),a=n(222),s="["+a+"]",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(t,e,n){var i={},s=o((function(){return!!a[t]()||"​"!="​"[t]()})),u=i[t]=s?e(f):a[t];n&&(i[n]=u),r(r.P+r.F*s,"String",i)},f=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},222:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},223:function(t,e,n){var r=n(125),i=n(84).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},226:function(t,e,n){"use strict";var r=n(17),i=n(82)(1);r(r.P+r.F*!n(52)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},228:function(t,e,n){"use strict";var r=n(17),i=n(82)(3);r(r.P+r.F*!n(52)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},232:function(t,e,n){var r=n(17),i=n(24),o=n(29),a=/"/g,s=function(t,e,n,r){var i=String(o(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),r(r.P+r.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},233:function(t,e,n){},234:function(t,e,n){var r=n(17);r(r.S,"Array",{isArray:n(129)})},235:function(t,e,n){},236:function(t,e,n){},237:function(t,e,n){"use strict";var r=n(7),i=n(47),o=n(26),a=n(5)("species");t.exports=function(t){var e=r[t];o&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},238:function(t,e,n){},239:function(t,e,n){},240:function(t,e,n){},241:function(t,e,n){},242:function(t,e,n){},243:function(t,e,n){},244:function(t,e,n){},245:function(t,e,n){},246:function(t,e,n){"use strict";var r=n(17),i=n(82)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(121)("find")},247:function(t,e,n){},248:function(t,e,n){},335:function(t,e,n){var r=n(51),i=n(87);n(352)("keys",(function(){return function(t){return i(r(t))}}))},336:function(t,e,n){"use strict";var r=n(18),i=n(48),o=n(116),a=n(117);n(118)("match",1,(function(t,e,n,s){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=s(n,t,this);if(e.done)return e.value;var u=r(t),c=String(this);if(!u.global)return a(u,c);var l=u.unicode;u.lastIndex=0;for(var f,h=[],p=0;null!==(f=a(u,c));){var d=String(f[0]);h[p]=d,""===d&&(u.lastIndex=o(c,i(u.lastIndex),l)),p++}return 0===p?null:h}]}))},337:function(t,e,n){var r=n(85),i=n(13)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},338:function(t,e){t.exports=function(t){return null==t}},339:function(t,e,n){var r=n(385).Symbol;t.exports=r},350:function(t,e,n){"use strict";n.r(e);n(228);var r=n(220),i={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(351).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(350).default},methods:{isActive:r.e}},o=(n(393),n(2)),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(226),n(246);function s(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}},n)}function u(t,e,n,i,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>o?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(r.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[s(t,n+"#"+e.slug,e.title,c),u(t,e.children,n,i,o,a+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,o=(n.$site,n.$route),a=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,f=l.item,h=l.sidebarDepth,p=Object(r.e)(o,f.path),d="auto"===f.type?p||f.children.some((function(t){return Object(r.e)(o,f.basePath+"#"+t.slug)})):p,g="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):s(t,f.path,f.title||f.path,d),v=[i.frontmatter.sidebarDepth,h,c.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||a.displayAllHeaders;return"auto"===f.type?[g,u(t,f.children,f.basePath,o,v)]:(d||m)&&f.headers&&!r.d.test(f.path)?[g,u(t,Object(r.c)(f.headers),f.path,o,v)]:g}};n(394);function l(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?l(t,e):"page"===e.type&&Object(r.e)(t,e.path)}))}var f={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(o.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(l(t,r))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},h=Object(o.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},351:function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(377),n(2)),o=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},352:function(t,e,n){var r=n(17),i=n(55),o=n(24);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o((function(){n(1)})),"Object",a)}},353:function(t,e,n){"use strict";n(232)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},354:function(t,e,n){"use strict";var r=n(233);n.n(r).a},355:function(t,e,n){"use strict";var r=n(17),i=n(86)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(121)("includes")},356:function(t,e,n){"use strict";var r=n(17),i=n(357);r(r.P+r.F*n(358)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},357:function(t,e,n){var r=n(216),i=n(29);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},358:function(t,e,n){var r=n(5)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},359:function(t,e,n){"use strict";n(221)("trim",(function(t){return function(){return t(this,3)}}))},360:function(t,e,n){"use strict";var r=n(235);n.n(r).a},361:function(t,e,n){"use strict";var r=n(236);n.n(r).a},362:function(t,e,n){var r=n(7),i=n(217),o=n(47).f,a=n(223).f,s=n(216),u=n(119),c=r.RegExp,l=c,f=c.prototype,h=/a/g,p=/a/g,d=new c(h)!==h;if(n(26)&&(!d||n(24)((function(){return p[n(5)("match")]=!1,c(h)!=h||c(p)==p||"/a/i"!=c(h,"i")})))){c=function(t,e){var n=this instanceof c,r=s(t),o=void 0===e;return!n&&r&&t.constructor===c&&o?t:i(d?new l(r&&!o?t.source:t,e):l((r=t instanceof c)?t.source:t,r&&o?u.call(t):e),n?this:f,c)};for(var g=function(t){t in c||o(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},v=a(l),m=0;v.length>m;)g(v[m++]);f.constructor=c,c.prototype=f,n(27)(r,"RegExp",c)}n(237)("RegExp")},363:function(t,e,n){t.exports=n(364)},364:function(t,e,n){n(365),t.exports=n(19).Array.isArray},365:function(t,e,n){var r=n(53);r(r.S,"Array",{isArray:n(134)})},366:function(t,e,n){t.exports=n(367)},367:function(t,e,n){n(127),n(368),t.exports=n(19).Array.from},368:function(t,e,n){"use strict";var r=n(131),i=n(53),o=n(57),a=n(369),s=n(370),u=n(132),c=n(371),l=n(372);i(i.S+i.F*!n(373)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,f,h=o(t),p="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,v=void 0!==g,m=0,b=l(h);if(v&&(g=r(g,d>2?arguments[2]:void 0,2)),null==b||p==Array&&s(b))for(n=new p(e=u(h.length));e>m;m++)c(n,m,v?g(h[m],m):h[m]);else for(f=b.call(h),n=new p;!(i=f.next()).done;m++)c(n,m,v?a(f,g,[i.value,m],!0):i.value);return n.length=m,n}})},369:function(t,e,n){var r=n(30);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},370:function(t,e,n){var r=n(54),i=n(13)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},371:function(t,e,n){"use strict";var r=n(14),i=n(31);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},372:function(t,e,n){var r=n(337),i=n(13)("iterator"),o=n(54);t.exports=n(19).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},373:function(t,e,n){var r=n(13)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},t(o)}catch(t){}return n}},374:function(t,e,n){t.exports=n(375)},375:function(t,e,n){n(133),n(127),t.exports=n(376)},376:function(t,e,n){var r=n(337),i=n(13)("iterator"),o=n(54);t.exports=n(19).isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||o.hasOwnProperty(r(e))}},377:function(t,e,n){"use strict";var r=n(238);n.n(r).a},378:function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},379:function(t,e,n){"use strict";var r=n(239);n.n(r).a},380:function(t,e,n){"use strict";var r=n(240);n.n(r).a},381:function(t,e,n){"use strict";var r=n(241);n.n(r).a},382:function(t,e,n){"use strict";var r=n(242);n.n(r).a},383:function(t,e,n){var r=n(384),i=n(389),o=n(390),a="[object String]";t.exports=function(t){return"string"==typeof t||!i(t)&&o(t)&&r(t)==a}},384:function(t,e,n){var r=n(339),i=n(387),o=n(388),a="[object Null]",s="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?s:a:u&&u in Object(t)?i(t):o(t)}},385:function(t,e,n){var r=n(386),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},386:function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},387:function(t,e,n){var r=n(339),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var i=a.call(t);return r&&(e?t[s]=n:delete t[s]),i}},388:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},389:function(t,e){var n=Array.isArray;t.exports=n},390:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},391:function(t,e,n){"use strict";var r=n(243);n.n(r).a},392:function(t,e,n){"use strict";var r=n(244);n.n(r).a},393:function(t,e,n){"use strict";var r=n(245);n.n(r).a},394:function(t,e,n){"use strict";var r=n(247);n.n(r).a},395:function(t,e,n){"use strict";var r=n(248);n.n(r).a},495:function(t,e,n){"use strict";n.r(e);n(115),n(335),n(228),n(353);var r=n(220),i={props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:r.f,isMailto:r.g,isTel:r.h,focusoutAction:function(){this.$emit("focusout")}}},o=n(2),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,s={components:{NavLink:a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},u=(n(354),Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(355),n(356),n(336),n(138),n(234),n(137),n(359),{data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,r=this.$localePath,i=function(e){return e&&e.title&&e.title.toLowerCase().indexOf(t)>-1},o=[],a=0;a<e.length&&!(o.length>=n);a++){var s=e[a];if(this.getPageLocalePath(s)===r&&this.isSearchable(s))if(i(s))o.push(s);else if(s.headers)for(var u=0;u<s.headers.length&&!(o.length>=n);u++){var c=s.headers[u];i(c)&&o.push(Object.assign({},s,{path:s.path+"#"+c.slug,header:c}))}}return o}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),l=(n(360),Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,r){return n("li",{staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),f=(n(361),Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),h=(n(362),n(363)),p=n.n(h);var d=n(366),g=n.n(d),v=n(374),m=n.n(v);function b(t){return function(t){if(p()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(m()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return g()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(122),n(226);var _=n(351),k=n(378),x=n.n(k),y={components:{NavLink:a,DropdownTransition:_.a},data:function(){return{open:!1}},props:{item:{required:!0}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},methods:{toggle:function(){this.open=!this.open},isLastItemOfArray:function(t,e){return x()(e)===t}},watch:{$route:function(){this.open=!1}}},C=(n(379),{components:{NavLink:a,DropdownLink:Object(o.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(r){return n("li",{key:r.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:r},on:{focusout:function(n){t.isLastItemOfArray(r,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,i=this.$site.themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(o){var a,s=e[o],u=i[o]&&i[o].label||s.lang;return s.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,o),r.some((function(t){return t.path===a}))||(a=o)),{text:u,link:a}}))};return[].concat(b(this.userNav),[o])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(r.j)(t),{items:(t.items||[]).map(r.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}}),$=(n(380),Object(o.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function L(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var w={components:{SidebarButton:f,NavLinks:$,SearchBox:l,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(L(this.$el,"paddingLeft"))+parseInt(L(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},O=(n(381),Object(o.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),S=n(338),j=n.n(S),A={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=j()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,r=e.docsDir,i=void 0===r?"":r,o=e.docsBranch,a=void 0===o?"master":o,s=e.docsRepo,u=void 0===s?n:s;return t&&u&&this.$page.relativePath?this.createEditLink(n,u,i,a,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,o){return/bitbucket.org/.test(t)?(r.i.test(e)?e:t).replace(r.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+o+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(r.i.test(e)?e:"https://github.com/".concat(e)).replace(r.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+o}}},E=(n(382),Object(o.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),I=n(383),P=n.n(I),T={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return D(N.PREV,this)},next:function(){return D(N.NEXT,this)}}};var N={NEXT:{resolveLink:function(t,e){return U(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return U(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function D(t,e){var n=e.$themeConfig,i=e.$page,o=e.$route,a=e.$site,s=e.sidebarItems,u=t.resolveLink,c=t.getThemeLinkConfig,l=t.getPageLinkConfig,f=c(n),h=l(i),p=j()(h)?f:h;return!1===p?void 0:P()(p)?Object(r.k)(a.pages,p,o.path):u(i,s)}function U(t,e,n){var r=[];!function t(e,n){for(var r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(var i=0;i<r.length;i++){var o=r[i];if("page"===o.type&&o.path===decodeURIComponent(t.path))return r[i+n]}}var H=T,R=(n(391),{components:{PageEdit:E,PageNav:Object(o.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),M=(n(392),Object(o.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),W={name:"Sidebar",components:{SidebarLinks:n(350).default,NavLinks:$},props:["items"]},G=(n(395),{components:{Home:u,Page:M,Sidebar:Object(o.a)(W,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:O},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),B=Object(o.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top"),t._v(" "),t._t("sidebar-bottom")],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top"),t._v(" "),t._t("page-bottom")],2)],1)}),[],!1,null,null,null);e.default=B.exports}}]);