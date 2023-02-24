/*!
 * artplayer-plugin-dash-quality.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2023 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,n,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[o]&&i[o],u=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(t,n){if(!u[t]){if(!e[t]){var r="function"==typeof i[o]&&i[o];if(!n&&r)return r(t,!0);if(a)return a(t,!0);if(l&&"string"==typeof t)return l(t);var f=new Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}c.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},c.cache={};var s=u[t]=new d.Module(t);e[t][0].call(s.exports,c,s,s.exports,this)}return u[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:d(t)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=u,d.parent=a,d.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(d,"root",{get:function(){return i[o]}}),i[o]=d;for(var f=0;f<t.length;f++)d(t[f]);if(n){var s=d(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=s:"function"==typeof define&&define.amd&&define((function(){return s}))}}({"92dvd":[function(e,t,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(n);var r=e("bundle-text:./image.svg"),i=o.interopDefault(r);function a(e){return t=>{const{$video:n}=t.template,{errorHandle:o}=t.constructor.utils;return t.on("ready",(function(){const r=t.dash||window.dash;o(r&&r.getVideoElement()===n,'Cannot find instance of Dash from "art.dash" or "window.dash"');const a=e.auto||"Auto",u=e.title||"Quality",l=r.getBitrateInfoListFor("video"),d=r.getQualityFor("video"),f=e.getResolution||(e=>(e.height||"Unknown ")+"P"),s=r.getSettings(),c=l[d],p=s?.streaming?.abr?.autoSwitchBitrate?.video?a:f(c),h={streaming:{abr:{autoSwitchBitrate:{}}}};e.control&&t.controls.add({name:"dash-quality",position:"right",html:p,style:{padding:"0 10px"},selector:l.map(((e,t)=>({html:f(e),level:t,default:c===e}))),onSelect:e=>(h.streaming.abr.autoSwitchBitrate.video=!1,r.updateSettings(h),r.setQualityFor("video",e.level,!0),e.html)}),e.setting&&t.setting.add({name:"dash-quality",tooltip:p,html:u,icon:i.default,width:200,selector:l.map(((e,t)=>({html:f(e),level:t,default:c===e}))),onSelect:function(e){return h.streaming.abr.autoSwitchBitrate.video=!1,r.updateSettings(h),r.setQualityFor("video",e.level,!0),e.html}})})),{name:"artplayerPluginDashQuality"}}}n.default=a,a.env="production",a.version="1.0.0",a.build="2023-02-24 21:42:21","undefined"!=typeof window&&(window.artplayerPluginDashQuality=a)},{"bundle-text:./image.svg":"kcayM","@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],kcayM:[function(e,t,n){t.exports='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M870.4 176H153.6c-49.472 0-89.6 40.128-89.6 89.6v492.736c0 49.472 40.128 89.6 89.6 89.6h716.8c49.472 0 89.6-40.128 89.6-89.6V265.6c0-49.472-40.128-89.6-89.6-89.6zm0 492.8h-44.8s-29.696-65.792-89.6-89.6-134.4 89.6-134.4 89.6-66.56-71.808-134.4-224S153.6 624 153.6 624V265.6h716.8v403.2zM668.8 489.6c37.056 0 67.2-30.144 67.2-67.264 0-37.056-30.144-67.2-67.2-67.2-37.12.064-67.2 30.208-67.2 67.264 0 37.12 30.08 67.2 67.2 67.2z" fill="#fff"/></svg>'},{}],"9pCYc":[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["92dvd"],"92dvd","parcelRequire4dc0");