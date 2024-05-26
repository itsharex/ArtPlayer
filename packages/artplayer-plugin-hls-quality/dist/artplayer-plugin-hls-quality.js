/*! * artplayer-plugin-hls-quality.js v2.0.0 * Github:https://github.com/zhw2590582/ArtPlayer * (c) 2017-2024 Harvey Zack * Released under the MIT License. */ !function(e,t,n,o,l){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof r[o]&&r[o],u=i.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(t,n){if(!u[t]){if(!e[t]){var l="function"==typeof r[o]&&r[o];if(!n&&l)return l(t,!0);if(i)return i(t,!0);if(a&&"string"==typeof t)return a(t);var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}d.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},d.cache={};var c=u[t]=new f.Module(t);e[t][0].call(c.exports,d,c,c.exports,this)}return u[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:f(t)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=u,f.parent=i,f.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(f,"root",{get:function(){return r[o]}}),r[o]=f;for(var s=0;s<t.length;s++)f(t[s]);if(n){var c=f(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define(function(){return c})}}({eEHR6:[function(e,t,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(n),o.export(n,"default",()=>i);var l=e("bundle-text:./image.svg"),r=o.interopDefault(l);function i(e){return t=>{!function(e){let{version:t,utils:{errorHandle:n}}=e.constructor,o=t.split(".").map(Number);n(o[0]+o[1]/100>=5,`Artplayer.js@${t}is not compatible the artplayerPluginHlsQuality@${i.version}. Please update it to version Artplayer.js@5.x.x`)}(t);let{$video:n}=t.template,{errorHandle:o}=t.constructor.utils;function l(){let l=t.hls||window.hls;o(l&&l.media===n,'Cannot find instance of HLS from "art.hls" or "window.hls"');let i=e.auto||"Auto",u=e.title||"Quality",a=e.getResolution||(e=>(e.height||"Unknown ")+"P"),f=l.levels[l.currentLevel],s=f?a(f):i;e.control&&t.controls.update({name:"hls-quality",position:"right",html:s,style:{padding:"0 10px"},selector:l.levels.map((e,t)=>({html:a(e),level:e.level||t,default:f===e})),onSelect:e=>(l.currentLevel=e.level,t.loading.show=!0,e.html)}),e.setting&&t.setting.update({name:"hls-quality",tooltip:s,html:u,icon:r.default,width:200,selector:l.levels.map((e,t)=>({html:a(e),level:e.level||t,default:f===e})),onSelect:function(e){return l.currentLevel=e.level,t.loading.show=!0,e.html}})}return t.on("ready",l),t.on("restart",l),{name:"artplayerPluginHlsQuality"}}}"undefined"!=typeof window&&(window.artplayerPluginHlsQuality=i)},{"bundle-text:./image.svg":"5VXix","@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],"5VXix":[function(e,t,n){t.exports='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M870.4 176H153.6c-49.472 0-89.6 40.128-89.6 89.6v492.736c0 49.472 40.128 89.6 89.6 89.6h716.8c49.472 0 89.6-40.128 89.6-89.6V265.6c0-49.472-40.128-89.6-89.6-89.6zm0 492.8h-44.8s-29.696-65.792-89.6-89.6-134.4 89.6-134.4 89.6-66.56-71.808-134.4-224S153.6 624 153.6 624V265.6h716.8v403.2zM668.8 489.6c37.056 0 67.2-30.144 67.2-67.264 0-37.056-30.144-67.2-67.2-67.2-37.12.064-67.2 30.208-67.2 67.264 0 37.12 30.08 67.2 67.2 67.2z" fill="#fff"/></svg>'},{}],"9pCYc":[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||Object.prototype.hasOwnProperty.call(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["eEHR6"],"eEHR6","parcelRequire4dc0");