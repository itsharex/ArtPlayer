/*!
 * artplayer-plugin-hls-quality.js v2.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2023 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,n,o,r){var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof l[o]&&l[o],u=i.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(t,n){if(!u[t]){if(!e[t]){var r="function"==typeof l[o]&&l[o];if(!n&&r)return r(t,!0);if(i)return i(t,!0);if(s&&"string"==typeof t)return s(t);var f=new Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}d.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},d.cache={};var c=u[t]=new a.Module(t);e[t][0].call(c.exports,d,c,c.exports,this)}return u[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:a(t)}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=u,a.parent=i,a.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(a,"root",{get:function(){return l[o]}}),l[o]=a;for(var f=0;f<t.length;f++)a(t[f]);if(n){var c=a(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}}({eEHR6:[function(e,t,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(n);var r=e("bundle-text:./image.svg"),l=o.interopDefault(r);function i(e){return t=>{!function(e){const{version:t,utils:{errorHandle:n}}=e.constructor,o=t.split(".").map(Number);n(o[0]+o[1]/100>=5,`Artplayer.js@${t} is not compatible the artplayerPluginHlsQuality@${i.version}. Please update it to version Artplayer.js@5.x.x`)}(t);const{$video:n}=t.template,{errorHandle:o}=t.constructor.utils;function r(){const r=t.hls||window.hls;o(r&&r.media===n,'Cannot find instance of HLS from "art.hls" or "window.hls"');const i=e.auto||"Auto",u=e.title||"Quality",s=e.getResolution||(e=>(e.height||"Unknown ")+"P"),a=r.levels[r.currentLevel],f=a?s(a):i;e.control&&t.controls.update({name:"hls-quality",position:"right",html:f,style:{padding:"0 10px"},selector:r.levels.map(((e,t)=>({html:s(e),level:e.level||t,default:a===e}))),onSelect:e=>(r.currentLevel=e.level,t.loading.show=!0,e.html)}),e.setting&&t.setting.update({name:"hls-quality",tooltip:f,html:u,icon:l.default,width:200,selector:r.levels.map(((e,t)=>({html:s(e),level:e.level||t,default:a===e}))),onSelect:function(e){return r.currentLevel=e.level,t.loading.show=!0,e.html}})}return t.on("ready",r),t.on("restart",r),{name:"artplayerPluginHlsQuality"}}}n.default=i,i.env="production",i.version="2.0.0",i.build="2023-04-23 16:14:07","undefined"!=typeof window&&(window.artplayerPluginHlsQuality=i)},{"bundle-text:./image.svg":"5VXix","@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],"5VXix":[function(e,t,n){t.exports='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M870.4 176H153.6c-49.472 0-89.6 40.128-89.6 89.6v492.736c0 49.472 40.128 89.6 89.6 89.6h716.8c49.472 0 89.6-40.128 89.6-89.6V265.6c0-49.472-40.128-89.6-89.6-89.6zm0 492.8h-44.8s-29.696-65.792-89.6-89.6-134.4 89.6-134.4 89.6-66.56-71.808-134.4-224S153.6 624 153.6 624V265.6h716.8v403.2zM668.8 489.6c37.056 0 67.2-30.144 67.2-67.264 0-37.056-30.144-67.2-67.2-67.2-37.12.064-67.2 30.208-67.2 67.264 0 37.12 30.08 67.2 67.2 67.2z" fill="#fff"/></svg>'},{}],"9pCYc":[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["eEHR6"],"eEHR6","parcelRequire4dc0");