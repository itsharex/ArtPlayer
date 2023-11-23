/*!
 * artplayer-plugin-dash-quality.js v2.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2023 Harvey Zack
 * Released under the MIT License.
 */
!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,t,n,o,r){/* eslint-disable no-undef */var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[o]&&i[o],l=u.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(t,n){if(!l[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var r="function"==typeof i[o]&&i[o];if(!n&&r)return r(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(u)return u(t,!0);// Try the node require function if it exists.
if(a&&"string"==typeof t)return a(t);var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}c.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},c.cache={};var f=l[t]=new d.Module(t);e[t][0].call(f.exports,c,f,f.exports,this)}return l[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:d(t)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=l,d.parent=u,d.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(d,"root",{get:function(){return i[o]}}),i[o]=d;for(var s=0;s<t.length;s++)d(t[s]);if(n){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var f=d(n);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof define&&define.amd?define(function(){return f}):r&&(this[r]=f)}}({gZVrQ:[function(e,t,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(n),o.export(n,"default",function(){return u});var r=e("bundle-text:./image.svg"),i=o.interopDefault(r);function u(e){return function(t){o=(n=t.constructor).version,(0,n.utils.errorHandle)((r=o.split(".").map(Number))[0]+r[1]/100>=5,"Artplayer.js@".concat(o," is not compatible the artplayerPluginDashQuality@").concat(u.version,". Please update it to version Artplayer.js@5.x.x"));var n,o,r,l=t.template.$video,a=t.constructor.utils.errorHandle;function d(){var n,o,r,u=t.dash||window.dash;a(u&&u.getVideoElement()===l,'Cannot find instance of Dash from "art.dash" or "window.dash"');var d=e.auto||"Auto",s=e.title||"Quality",f=u.getBitrateInfoListFor("video"),c=u.getQualityFor("video"),p=e.getResolution||function(e){return(e.height||"Unknown ")+"P"},h=u.getSettings(),v=f[c],g=(null==h?void 0:null===(r=h.streaming)||void 0===r?void 0:null===(o=r.abr)||void 0===o?void 0:null===(n=o.autoSwitchBitrate)||void 0===n?void 0:n.video)?d:p(v),m={streaming:{abr:{autoSwitchBitrate:{}}}};e.control&&t.controls.update({name:"dash-quality",position:"right",html:g,style:{padding:"0 10px"},selector:f.map(function(e,t){return{html:p(e),level:t,default:v===e}}),onSelect:function(e){return m.streaming.abr.autoSwitchBitrate.video=!1,u.updateSettings(m),u.setQualityFor("video",e.level,!0),e.html}}),e.setting&&t.setting.update({name:"dash-quality",tooltip:g,html:s,icon:i.default,width:200,selector:f.map(function(e,t){return{html:p(e),level:t,default:v===e}}),onSelect:function(e){return m.streaming.abr.autoSwitchBitrate.video=!1,u.updateSettings(m),u.setQualityFor("video",e.level,!0),e.html}})}return t.on("ready",d),t.on("restart",d),{name:"artplayerPluginDashQuality"}}}u.env="production",u.version="2.0.0",u.build="2023-11-23 23:21:59","undefined"!=typeof window&&(window.artplayerPluginDashQuality=u)},{"bundle-text:./image.svg":"gI7Xh","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],gI7Xh:[function(e,t,n){t.exports='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M870.4 176H153.6c-49.472 0-89.6 40.128-89.6 89.6v492.736c0 49.472 40.128 89.6 89.6 89.6h716.8c49.472 0 89.6-40.128 89.6-89.6V265.6c0-49.472-40.128-89.6-89.6-89.6zm0 492.8h-44.8s-29.696-65.792-89.6-89.6-134.4 89.6-134.4 89.6-66.56-71.808-134.4-224S153.6 624 153.6 624V265.6h716.8v403.2zM668.8 489.6c37.056 0 67.2-30.144 67.2-67.264 0-37.056-30.144-67.2-67.2-67.2-37.12.064-67.2 30.208-67.2 67.264 0 37.12 30.08 67.2 67.2 67.2z" fill="#fff"/></svg>'},{}],iWrD0:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["gZVrQ"],"gZVrQ","parcelRequire4dc0");