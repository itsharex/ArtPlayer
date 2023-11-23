/*!
 * artplayer-plugin-iframe.js v1.0.0
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
function(e,r,t,n,o){/* eslint-disable no-undef */var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[n]&&i[n],s=a.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(r,t){if(!s[r]){if(!e[r]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var o="function"==typeof i[n]&&i[n];if(!t&&o)return o(r,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(a)return a(r,!0);// Try the node require function if it exists.
if(c&&"string"==typeof r)return c(r);var f=Error("Cannot find module '"+r+"'");throw f.code="MODULE_NOT_FOUND",f}p.resolve=function(t){var n=e[r][1][t];return null!=n?n:t},p.cache={};var l=s[r]=new u.Module(r);e[r][0].call(l.exports,p,l,l.exports,this)}return s[r].exports;function p(e){var r=p.resolve(e);return!1===r?{}:u(r)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=s,u.parent=a,u.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]},Object.defineProperty(u,"root",{get:function(){return i[n]}}),i[n]=u;for(var f=0;f<r.length;f++)u(r[f]);if(t){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var l=u(t);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):o&&(this[o]=l)}}({akNoT:[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"default",function(){return c});var o=e("@swc/helpers/_/_async_to_generator"),i=e("@swc/helpers/_/_class_call_check"),a=e("@swc/helpers/_/_create_class"),s=e("@swc/helpers/_/_ts_generator"),c=/*#__PURE__*/function(){function e(r){var t=r.iframe,n=r.url;if((0,i._)(this,e),t instanceof HTMLIFrameElement==!1)throw Error('"option.iframe" needs to be a HTMLIFrameElement');if("string"!=typeof n)throw Error('"option.url" needs to be a string');this.url=n,this.$iframe=t,this.promises={},this.injected=!1,this.destroyed=!1,this.messageCallback=function(){return null},this.onMessage=this.onMessage.bind(this),window.addEventListener("message",this.onMessage),this.$iframe.src=this.url}return(0,a._)(e,[{key:"onMessage",value:function(e){var r=e.data,t=r.type,n=r.data,o=r.id;"inject"===t&&(this.injected=!0),this.promises[o]&&("error"===t?this.promises[o].reject(Error(n)):this.promises[o].resove(n),delete this.promises[o]),this.messageCallback&&this.messageCallback({type:t,data:n})}},{key:"postMessage",value:function(e){var r=e.type,t=e.data,n=this;return new Promise(function(e,o){(function n(){if(this.destroyed)o(Error("The instance has been destroyed"));else if(this.injected){var i=Date.now();this.promises[i]={resove:e,reject:o},this.$iframe.contentWindow.postMessage({type:r,data:t,id:i},"*")}else setTimeout(n.bind(this),200)}).call(n)})}},{key:"commit",value:function(e){if("function"!=typeof e)throw Error('"commit.callback" needs to be a function');var r=e.toString(),t=r.substring(r.indexOf("{")+1,r.lastIndexOf("}"));return this.postMessage({type:"commit",data:t})}},{key:"message",value:function(e){if("function"!=typeof e)throw Error('"message.callback" needs to be a function');this.messageCallback=e}},{key:"destroy",value:function(){this.destroyed=!0,window.removeEventListener("message",this.onMessage)}}],[{key:"iframe",get:function(){return window.top!==window}},{key:"postMessage",value:function(r){var t=r.type,n=r.data,o=r.id;if(!e.iframe)throw Error('The "ArtplayerPluginIframe.postMessage" method can only be used in iframe');window.parent.postMessage({type:t,data:n,id:void 0===o?0:o},"*")}},{key:"onMessage",value:function(r){return(0,o._)(function(){var t,n,o,i,a,c,u;return(0,s._)(this,function(s){switch(s.label){case 0:if(!e.iframe)throw Error('The "ArtplayerPluginIframe.onMessage" method can only be used in iframe');if(n=(t=r.data).type,o=t.data,i=t.id,"commit"===n)return[3,1];return[3,7];case 1:if(s.trys.push([1,5,,6]),!o.match(/\bresolve\((.*?)\)/))return[3,3];return[4,Function("return new Promise(function(resolve){\n".concat(o,"\n})"))()];case 2:return a=s.sent(),e.postMessage({type:"response",data:a,id:i}),[3,4];case 3:c=Function(o)(),e.postMessage({type:"response",data:c,id:i}),s.label=4;case 4:return[3,6];case 5:throw u=s.sent(),e.postMessage({type:"error",data:u.message,id:i}),u;case 6:case 7:return[3,8];case 8:return[2]}})})()}},{key:"inject",value:function(){if(!e.iframe)throw Error('The "ArtplayerPluginIframe.inject" method can only be used in iframe');e.postMessage({type:"inject"}),window.addEventListener("message",e.onMessage)}}]),e}();"undefined"!=typeof window&&(window.ArtplayerPluginIframe=c)},{"@swc/helpers/_/_async_to_generator":"eONSn","@swc/helpers/_/_class_call_check":"9iJMm","@swc/helpers/_/_create_class":"21IOT","@swc/helpers/_/_ts_generator":"6Xyd0","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],eONSn:[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,r,t,n,o,i,a){try{var s=e[i](a),c=s.value}catch(e){t(e);return}s.done?r(c):Promise.resolve(c).then(n,o)}function i(e){return function(){var r=this,t=arguments;return new Promise(function(n,i){var a=e.apply(r,t);function s(e){o(a,n,i,s,c,"next",e)}function c(e){o(a,n,i,s,c,"throw",e)}s(void 0)})}}n.defineInteropFlag(t),n.export(t,"_async_to_generator",function(){return i}),n.export(t,"_",function(){return i})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],iWrD0:[function(e,r,t){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,r){return Object.keys(e).forEach(function(t){"default"===t||"__esModule"===t||r.hasOwnProperty(t)||Object.defineProperty(r,t,{enumerable:!0,get:function(){return e[t]}})}),r},t.export=function(e,r,t){Object.defineProperty(e,r,{enumerable:!0,get:t})}},{}],"9iJMm":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,r){if(!(e instanceof r))throw TypeError("Cannot call a class as a function")}n.defineInteropFlag(t),n.export(t,"_class_call_check",function(){return o}),n.export(t,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"21IOT":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}n.defineInteropFlag(t),n.export(t,"_create_class",function(){return i}),n.export(t,"_",function(){return i})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],"6Xyd0":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"_",function(){return o.__generator}),n.export(t,"_ts_generator",function(){return o.__generator});var o=e("tslib")},{tslib:"c0d7h","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],c0d7h:[function(e,r,t){/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol */var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"__extends",function(){return a}),n.export(t,"__assign",function(){return s}),n.export(t,"__rest",function(){return c}),n.export(t,"__decorate",function(){return u}),n.export(t,"__param",function(){return f}),n.export(t,"__esDecorate",function(){return l}),n.export(t,"__runInitializers",function(){return p}),n.export(t,"__propKey",function(){return d}),n.export(t,"__setFunctionName",function(){return y}),n.export(t,"__metadata",function(){return _}),n.export(t,"__awaiter",function(){return h}),n.export(t,"__generator",function(){return m}),n.export(t,"__createBinding",function(){return v}),n.export(t,"__exportStar",function(){return b}),n.export(t,"__values",function(){return w}),n.export(t,"__read",function(){return g}),/** @deprecated */n.export(t,"__spread",function(){return j}),/** @deprecated */n.export(t,"__spreadArrays",function(){return x}),n.export(t,"__spreadArray",function(){return O}),n.export(t,"__await",function(){return P}),n.export(t,"__asyncGenerator",function(){return E}),n.export(t,"__asyncDelegator",function(){return S}),n.export(t,"__asyncValues",function(){return T}),n.export(t,"__makeTemplateObject",function(){return k}),n.export(t,"__importStar",function(){return I}),n.export(t,"__importDefault",function(){return D}),n.export(t,"__classPrivateFieldGet",function(){return F}),n.export(t,"__classPrivateFieldSet",function(){return A}),n.export(t,"__classPrivateFieldIn",function(){return R}),n.export(t,"__addDisposableResource",function(){return C}),n.export(t,"__disposeResources",function(){return N});var o=e("@swc/helpers/_/_type_of"),i=function(e,r){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])})(e,r)};function a(e,r){if("function"!=typeof r&&null!==r)throw TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}i(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}var s=function(){return(s=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};function c(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>r.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t}function u(e,r,t,n){var o,i=arguments.length,a=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(r,t,a):o(r,t))||a);return i>3&&a&&Object.defineProperty(r,t,a),a}function f(e,r){return function(t,n){r(t,n,e)}}function l(e,r,t,n,o,i){function a(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var s,c=n.kind,u="getter"===c?"get":"setter"===c?"set":"value",f=!r&&e?n.static?e:e.prototype:null,l=r||(f?Object.getOwnPropertyDescriptor(f,n.name):{}),p=!1,d=t.length-1;d>=0;d--){var y={};for(var _ in n)y[_]="access"===_?{}:n[_];for(var _ in n.access)y.access[_]=n.access[_];y.addInitializer=function(e){if(p)throw TypeError("Cannot add initializers after decoration has completed");i.push(a(e||null))};var h=(0,t[d])("accessor"===c?{get:l.get,set:l.set}:l[u],y);if("accessor"===c){if(void 0===h)continue;if(null===h||"object"!=typeof h)throw TypeError("Object expected");(s=a(h.get))&&(l.get=s),(s=a(h.set))&&(l.set=s),(s=a(h.init))&&o.unshift(s)}else(s=a(h))&&("field"===c?o.unshift(s):l[u]=s)}f&&Object.defineProperty(f,n.name,l),p=!0}function p(e,r,t){for(var n=arguments.length>2,o=0;o<r.length;o++)t=n?r[o].call(e,t):r[o].call(e);return n?t:void 0}function d(e){return(void 0===e?"undefined":(0,o._)(e))==="symbol"?e:"".concat(e)}function y(e,r,t){return(void 0===r?"undefined":(0,o._)(r))==="symbol"&&(r=r.description?"[".concat(r.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:t?"".concat(t," ",r):r})}function _(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)}function h(e,r,t,n){return new(t||(t=Promise))(function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var r;e.done?o(e.value):((r=e.value)instanceof t?r:new t(function(e){e(r)})).then(a,s)}c((n=n.apply(e,r||[])).next())})}function m(e,r){var t,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(t)throw TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=r.call(e,a)}catch(e){s=[6,e],n=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}var v=Object.create?function(e,r,t,n){void 0===n&&(n=t);var o=Object.getOwnPropertyDescriptor(r,t);(!o||("get"in o?!r.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,n,o)}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]};function b(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||v(r,e,t)}function w(e){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,i=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}function j(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(g(arguments[r]));return e}function x(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),o=0,r=0;r<t;r++)for(var i=arguments[r],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}function O(e,r,t){if(t||2==arguments.length)for(var n,o=0,i=r.length;o<i;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return e.concat(n||Array.prototype.slice.call(r))}function P(e){return this instanceof P?(this.v=e,this):new P(e)}function E(e,r,t){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var n,o=t.apply(e,r||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(r){return new Promise(function(t,n){i.push([e,r,t,n])>1||s(e,r)})})}function s(e,r){try{var t;(t=o[e](r)).value instanceof P?Promise.resolve(t.value.v).then(c,u):f(i[0][2],t)}catch(e){f(i[0][3],e)}}function c(e){s("next",e)}function u(e){s("throw",e)}function f(e,r){e(r),i.shift(),i.length&&s(i[0][0],i[0][1])}}function S(e){var r,t;return r={},n("next"),n("throw",function(e){throw e}),n("return"),r[Symbol.iterator]=function(){return this},r;function n(n,o){r[n]=e[n]?function(r){return(t=!t)?{value:P(e[n](r)),done:!1}:o?o(r):r}:o}}function T(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var r,t=e[Symbol.asyncIterator];return t?t.call(e):(e=w(e),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(t){r[t]=e[t]&&function(r){return new Promise(function(n,o){!function(e,r,t,n){Promise.resolve(n).then(function(r){e({value:r,done:t})},r)}(n,o,(r=e[t](r)).done,r.value)})}}}function k(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e}var M=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r};function I(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&v(r,e,t);return M(r,e),r}function D(e){return e&&e.__esModule?e:{default:e}}function F(e,r,t,n){if("a"===t&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof r?e!==r||!n:!r.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?n:"a"===t?n.call(e):n?n.value:r.get(e)}function A(e,r,t,n,o){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!o)throw TypeError("Private accessor was defined without a setter");if("function"==typeof r?e!==r||!o:!r.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,t):o?o.value=t:r.set(e,t),t}function R(e,r){if(null===r||"object"!=typeof r&&"function"!=typeof r)throw TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?r===e:e.has(r)}function C(e,r,t){if(null!=r){var n;if("object"!=typeof r&&"function"!=typeof r)throw TypeError("Object expected.");if(t){if(!Symbol.asyncDispose)throw TypeError("Symbol.asyncDispose is not defined.");n=r[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw TypeError("Symbol.dispose is not defined.");n=r[Symbol.dispose]}if("function"!=typeof n)throw TypeError("Object not disposable.");e.stack.push({value:r,dispose:n,async:t})}else t&&e.stack.push({async:!0});return r}var W="function"==typeof SuppressedError?SuppressedError:function(e,r,t){var n=Error(t);return n.name="SuppressedError",n.error=e,n.suppressed=r,n};function N(e){function r(r){e.error=e.hasError?new W(r,e.error,"An error was suppressed during disposal."):r,e.hasError=!0}return function t(){for(;e.stack.length;){var n=e.stack.pop();try{var o=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(o).then(t,function(e){return r(e),t()})}catch(e){r(e)}}if(e.hasError)throw e.error}()}t.default={__extends:a,__assign:s,__rest:c,__decorate:u,__param:f,__metadata:_,__awaiter:h,__generator:m,__createBinding:v,__exportStar:b,__values:w,__read:g,__spread:j,__spreadArrays:x,__spreadArray:O,__await:P,__asyncGenerator:E,__asyncDelegator:S,__asyncValues:T,__makeTemplateObject:k,__importStar:I,__importDefault:D,__classPrivateFieldGet:F,__classPrivateFieldSet:A,__classPrivateFieldIn:R,__addDisposableResource:C,__disposeResources:N}},{"@swc/helpers/_/_type_of":"felZi","@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}],felZi:[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}n.defineInteropFlag(t),n.export(t,"_type_of",function(){return o}),n.export(t,"_",function(){return o})},{"@parcel/transformer-js/src/esmodule-helpers.js":"iWrD0"}]},["akNoT"],"akNoT","parcelRequire4dc0");