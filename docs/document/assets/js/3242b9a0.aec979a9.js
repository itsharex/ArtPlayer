"use strict";(self.webpackChunkartplayer_document=self.webpackChunkartplayer_document||[]).push([[280],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,g=u["".concat(d,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3797:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"How to add setting panel",sidebar_position:6},d=void 0,p={unversionedId:"en/Questions/How_to_add_setting_panel",id:"en/Questions/How_to_add_setting_panel",title:"How to add setting panel",description:"Add selector list",source:"@site/docs/en/Questions/How_to_add_setting_panel.mdx",sourceDirName:"en/Questions",slug:"/en/Questions/How_to_add_setting_panel",permalink:"/document/en/Questions/How_to_add_setting_panel",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"How to add setting panel",sidebar_position:6},sidebar:"en",previous:{title:"How to import types",permalink:"/document/en/Questions/How_to_import_types"},next:{title:"Use with React Portal",permalink:"/document/en/Questions/Use_with_react_portal"}},m={},s=[{value:"Add selector list",id:"add-selector-list",level:2},{value:"Add switch button",id:"add-switch-button",level:2},{value:"Add range slider",id:"add-range-slider",level:2}],u={toc:s};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"add-selector-list"},"Add selector list"),(0,l.kt)("p",null,"Settings panels are similar to a collection of list selections, and support multi-layer nested"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"html")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"Element")),(0,l.kt)("td",{parentName:"tr",align:null},"DOM elements of selector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"icon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"Element")),(0,l.kt)("td",{parentName:"tr",align:null},"Icon of selector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"selector")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null},"Selector list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSelect")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function")),(0,l.kt)("td",{parentName:"tr",align:null},"Selector click event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"width")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Number")),(0,l.kt)("td",{parentName:"tr",align:null},"Panel width")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Default selected")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tooltip")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip text")))),(0,l.kt)("div",{className:"run-code"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    url: '/assets/sample/video.mp4',\n    setting: true,\n    flip: true,\n    playbackRate: true,\n    aspectRatio: true,\n    settings: [\n        {\n            html: 'Select Subtitle',\n            width: 250,\n            tooltip: 'Subtitle 01',\n            selector: [\n                {\n                    default: true,\n                    html: '<span style=\"color:red\">Subtitle 01</span>',\n                    url: '/assets/sample/subtitle.srt?id=1',\n                },\n                {\n                    html: '<span style=\"color:yellow\">Subtitle 02</span>',\n                    url: '/assets/sample/subtitle.srt?id=2',\n                },\n            ],\n            onSelect: function (item, $dom, event) {\n                console.info(item, $dom, event);\n                art.subtitle.url = item.url;\n\n                // Change the tooltip\n                return item.html;\n            },\n        },\n        {\n            html: 'Select Quality',\n            width: 150,\n            tooltip: '1080P',\n            selector: [\n                {\n                    default: true,\n                    html: '1080P',\n                    url: '/assets/sample/video.mp4?id=1080',\n                },\n                {\n                    html: '720P',\n                    url: '/assets/sample/video.mp4?id=720',\n                },\n                {\n                    html: '360P',\n                    url: '/assets/sample/video.mp4?id=360',\n                },\n            ],\n            onSelect: function (item, $dom, event) {\n                console.info(item, $dom, event);\n                art.switchQuality(item.url, item.html);\n\n                // Change the tooltip\n                return item.html;\n            },\n        },\n        {\n            html: 'Multi-layer nested',\n            selector: [\n                {\n                    html: 'Nested 01',\n                    selector: [\n                        {\n                            html: 'Nested 02',\n                        },\n                        {\n                            html: 'Nested 02',\n                        },\n                    ],\n                },\n                {\n                    html: 'Nested 01',\n                    selector: [\n                        {\n                            html: 'Nested 02',\n                        },\n                        {\n                            html: 'Nested 02',\n                        },\n                    ],\n                },\n            ],\n        },\n    ],\n});\n")),(0,l.kt)("h2",{id:"add-switch-button"},"Add switch button"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"html")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"Element")),(0,l.kt)("td",{parentName:"tr",align:null},"DOM elements of selector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"icon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"Element")),(0,l.kt)("td",{parentName:"tr",align:null},"Icon of selector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"switch")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Button default state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwitch")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function")),(0,l.kt)("td",{parentName:"tr",align:null},"Button toggle event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tooltip")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip text")))),(0,l.kt)("div",{className:"run-code"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    url: '/assets/sample/video.mp4',\n    setting: true,\n    flip: true,\n    playbackRate: true,\n    aspectRatio: true,\n    settings: [\n        {\n            html: 'PIP Mode',\n            tooltip: 'OFF',\n            icon: '<img width=\"22\" heigth=\"22\" src=\"/assets/img/state.svg\">',\n            switch: false,\n            onSwitch: function (item, $dom, event) {\n                console.info(item, $dom, event);\n                const nextState = !item.switch;\n                art.pip = nextState;\n\n                // Change the tooltip\n                item.tooltip = nextState ? 'ON' : 'OFF';\n\n                // Change the switch state\n                return nextState;\n            },\n        },\n        {\n            html: 'Use with selector',\n            width: 200,\n            selector: [\n                {\n                    default: true,\n                    html: 'Setting 01',\n                },\n                {\n                    html: 'Setting 02',\n                },\n                {\n                    html: 'Setting 03',\n                    switch: false,\n                    onSwitch: function (item, $dom, event) {\n                        return !item.switch;\n                    },\n                },\n                {\n                    html: 'Setting 04',\n                    icon: '',\n                    switch: true,\n                    onSwitch: function (item, $dom, event) {\n                        return !item.switch;\n                    },\n                },\n            ],\n            onSelect: function (item) {\n                return item.html;\n            },\n        },\n    ],\n});\n")),(0,l.kt)("h2",{id:"add-range-slider"},"Add range slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"html")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"Element")),(0,l.kt)("td",{parentName:"tr",align:null},"DOM elements of selector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"icon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"Element")),(0,l.kt)("td",{parentName:"tr",align:null},"Icon of selector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"range")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null},"Range default state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onRange")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function")),(0,l.kt)("td",{parentName:"tr",align:null},"Range change event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tooltip")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip text")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const range = [5, 1, 10, 1];\nconst value = range[0];\nconst min = range[1];\nconst max = range[2];\nconst step = range[3];\n")),(0,l.kt)("div",{className:"run-code"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    url: '/assets/sample/video.mp4',\n    setting: true,\n    flip: true,\n    playbackRate: true,\n    aspectRatio: true,\n    settings: [\n        {\n            html: 'Range',\n            tooltip: '5x',\n            icon: '<img width=\"22\" heigth=\"22\" src=\"/assets/img/state.svg\">',\n            range: [5, 1, 10, 1],\n            onRange: function (item) {\n                // Change the tooltip\n                return item.range + 'x';\n            },\n        },\n        {\n            html: 'Use with selector',\n            width: 240,\n            selector: [\n                {\n                    default: true,\n                    html: 'Setting 01',\n                },\n                {\n                    html: 'Setting 02',\n                },\n                {\n                    html: 'Setting 03',\n                    tooltip: '5x',\n                    range: [5, 1, 10, 1],\n                    onRange: function (item) {\n                        return item.range + 'x';\n                    },\n                },\n                {\n                    html: 'Setting 04',\n                    icon: '',\n                    tooltip: '5x',\n                    range: [5, 1, 10, 1],\n                    onRange: function (item) {\n                        return item.range + 'x';\n                    },\n                },\n            ],\n            onSelect: function (item) {\n                return item.html;\n            },\n        },\n    ],\n});\n")))}c.isMDXComponent=!0}}]);