/*!
 * artplayer-plugin-vtt-thumbnail.js v1.0.0
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
function(e,t,n,r,o){/* eslint-disable no-undef */var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l="function"==typeof i[r]&&i[r],u=l.cache||{},f="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(t,n){if(!u[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var o="function"==typeof i[r]&&i[r];if(!n&&o)return o(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(l)return l(t,!0);// Try the node require function if it exists.
if(f&&"string"==typeof t)return f(t);var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}p.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},p.cache={};var d=u[t]=new a.Module(t);e[t][0].call(d.exports,p,d,d.exports,this)}return u[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:a(t)}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=u,a.parent=l,a.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(a,"root",{get:function(){return i[r]}}),i[r]=a;for(var s=0;s<t.length;s++)a(t[s]);if(n){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var d=a(n);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):o&&(this[o]=d)}}({YTqB2:[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"default",()=>l);var o=e("./getVttArray"),i=r.interopDefault(o);function l(e){return async t=>{let{constructor:{utils:{setStyle:n,clamp:r}},template:{$progress:o},events:{proxy:l}}=t,u=await (0,i.default)(e.vtt);return t.controls.add({name:"thumbnails",position:"top",index:20,style:e.style||{},mounted(e){l(o,"mousemove",async i=>{n(e,"display","block");let{second:l,width:f}=function(e,t){let{$progress:n}=e.template,{left:o}=n.getBoundingClientRect(),i=r(t.pageX-o,0,n.clientWidth),l=i/n.clientWidth*e.duration;return{width:i,second:l}}(t,i),a=u.find(e=>l>=e.start&&l<=e.end);if(!a)return n(e,"display","none");n(e,"backgroundImage",`url(${a.url})`),n(e,"height",`${a.h}px`),n(e,"width",`${a.w}px`),n(e,"backgroundPosition",`-${a.x}px -${a.y}px`),f<=a.w/2?n(e,"left",0):f>o.clientWidth-a.w/2?n(e,"left",`${o.clientWidth-a.w}px`):n(e,"left",`${f-a.w/2}px`)}),l(o,"mouseleave",()=>{n(e,"display","none")}),t.on("hover",t=>{t||n(e,"display","none")})}}),{name:"artplayerPluginVttThumbnail"}}}l.env="production",l.version="1.0.0",l.build="2023-11-23 23:21:56","undefined"!=typeof window&&(window.artplayerPluginVttThumbnail=l)},{"./getVttArray":"4IFMi","@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],"4IFMi":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){var t,n,r,o=e.split("."),i=o[0].split(":")||[],l=Number((t=o[1]||"0",n=3,r="0",t.length>n?String(t):((n-=t.length)>r.length&&(r+=r.repeat(n/r.length)),String(t)+r.slice(0,n))))/1e3;return 3600*Number(i[i.length-3]||0)+60*Number(i[i.length-2]||0)+Number(i[i.length-1]||0)+l}async function i(e=""){let t=await (await fetch(e)).text(),n=t.split(/[\n\r]/gm).filter(e=>e.trim()),r=[];for(let t=1;t<n.length;t+=2){let i=n[t],l=n[t+1];if(!l.trim())continue;let u=/((?:[0-9]{2}:)?(?:[0-9]{2}:)?[0-9]{2}(?:.[0-9]{3})?)(?: ?--> ?)((?:[0-9]{2}:)?(?:[0-9]{2}:)?[0-9]{2}(?:.[0-9]{3})?)/,f=i.match(u),a=/(.*)#(\w{4})=(.*)/i,s=l.match(a),d=Math.floor(o(f[1])),p=Math.floor(o(f[2])),c=s[1],h=/^\/|((https?|ftp|file):\/\/)/i.test(c);if(!h){let t=e.split("/");t.pop(),t.push(c),c=t.join("/")}let m={start:d,end:p,url:c},g=s[2].split(""),y=s[3].split(",");for(let e=0;e<g.length;e++)m[g[e]]=y[e];r.push(m)}return r}r.defineInteropFlag(n),r.export(n,"default",()=>i)},{"@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],"9pCYc":[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["YTqB2"],"YTqB2","parcelRequire4dc0");