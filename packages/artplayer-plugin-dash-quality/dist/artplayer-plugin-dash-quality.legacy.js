/*!
 * artplayer-plugin-dash-quality.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2023 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,n,r,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i.parcelRequire4dc0&&i.parcelRequire4dc0,l=u.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(t,n){if(!l[t]){if(!e[t]){var r="function"==typeof i.parcelRequire4dc0&&i.parcelRequire4dc0;if(!n&&r)return r(t,!0);if(u)return u(t,!0);if(a&&"string"==typeof t)return a(t);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}c.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},c.cache={};var f=l[t]=new d.Module(t);e[t][0].call(f.exports,c,f,f.exports,this)}return l[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:d(t)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=l,d.parent=u,d.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(d,"root",{get:function(){return i.parcelRequire4dc0}}),i.parcelRequire4dc0=d;for(var f=0;f<t.length;f++)d(t[f]);var c=d(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}({"1XYOW":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n);var o=e("bundle-text:./image.svg"),i=r.interopDefault(o);function u(e){return function(t){var n=t.template.$video,r=t.constructor.utils.errorHandle;return t.on("ready",(function(){var o,u,l,a=t.dash||window.dash;r(a&&a.getVideoElement()===n,'Cannot find instance of Dash from "art.dash" or "window.dash"');var d=e.auto||"Auto",f=e.title||"Quality",c=a.getBitrateInfoListFor("video"),s=a.getQualityFor("video"),p=e.getResolution||function(e){return(e.height||"Unknown ")+"P"},h=a.getSettings(),v=c[s],g=(null==h||null===(o=h.streaming)||void 0===o||null===(u=o.abr)||void 0===u||null===(l=u.autoSwitchBitrate)||void 0===l?void 0:l.video)?d:p(v),m={streaming:{abr:{autoSwitchBitrate:{}}}};e.control&&t.controls.add({name:"dash-quality",position:"right",html:g,style:{padding:"0 10px"},selector:c.map((function(e,t){return{html:p(e),level:t,default:v===e}})),onSelect:function(e){return m.streaming.abr.autoSwitchBitrate.video=!1,a.updateSettings(m),a.setQualityFor("video",e.level,!0),e.html}}),e.setting&&t.setting.add({name:"dash-quality",tooltip:g,html:f,icon:i.default,width:200,selector:c.map((function(e,t){return{html:p(e),level:t,default:v===e}})),onSelect:function(e){return m.streaming.abr.autoSwitchBitrate.video=!1,a.updateSettings(m),a.setQualityFor("video",e.level,!0),e.html}})})),{name:"artplayerPluginDashQuality"}}}n.default=u,u.env="production",u.version="1.0.0",u.build="2023-02-18 13:06:00","undefined"!=typeof window&&(window.artplayerPluginDashQuality=u)},{"bundle-text:./image.svg":"48QdU","@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"48QdU":[function(e,t,n){t.exports='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M870.4 176H153.6c-49.472 0-89.6 40.128-89.6 89.6v492.736c0 49.472 40.128 89.6 89.6 89.6h716.8c49.472 0 89.6-40.128 89.6-89.6V265.6c0-49.472-40.128-89.6-89.6-89.6zm0 492.8h-44.8s-29.696-65.792-89.6-89.6-134.4 89.6-134.4 89.6-66.56-71.808-134.4-224S153.6 624 153.6 624V265.6h716.8v403.2zM668.8 489.6c37.056 0 67.2-30.144 67.2-67.264 0-37.056-30.144-67.2-67.2-67.2-37.12.064-67.2 30.208-67.2 67.264 0 37.12 30.08 67.2 67.2 67.2z" fill="#fff"/></svg>'},{}],"47PTV":[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["1XYOW"],"1XYOW");