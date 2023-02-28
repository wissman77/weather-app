/*! For license information please see bundlefd9091d1d0d8a990cb65.js.LICENSE.txt */
(()=>{"use strict";var e={429:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(537),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]),a.push([e.id,':root{--main-color: #1e74bb;--main-bg: #e6e4e4}*{padding:0;margin:0;box-sizing:border-box;font-family:"Roboto",sans-serif}.container{margin:10px auto;display:flex;flex-direction:column;gap:10px;align-items:center;justify-content:center}.container h1{font-family:"Lobster",cursive;font-size:4rem;color:var(--main-color)}img{display:block}form input[type=search]{padding:5px;border:1px solid gray;float:left;width:80%;background-color:#f1f1f1;outline:none;font-size:1.05rem}form button{float:left;width:20%;padding:5px;background:#2196f3;color:#fff;border:1px solid gray;border-left:none;cursor:pointer;font-size:1.05rem}.temps{background-color:#efefef;border-radius:4px;border:1px solid #d0d0d0;display:inline-flex;justify-content:center;align-items:center}.temps label{width:6rem;cursor:pointer}.temps label span{text-align:center;padding:3px 0px;display:flex;justify-content:center}.temps label input{display:none}.temps input:checked+span{background-color:#404040;color:#f7f7f7}.single-weather{display:flex;gap:30px;background:var(--main-bg);border-radius:10px;padding:10px;box-shadow:rgba(0,0,0,.4) 0px 3px 9px}.single-weather h2{color:var(--main-color)}.single-weather p{font-size:.8rem}.city-details{display:flex;flex-direction:column;align-items:center;gap:5px}.city-details img{width:150px}.weather-details{display:flex;flex-direction:column;gap:10px}.cards{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:20px}.card{flex-basis:1;background-color:var(--main-bg);padding:10px;border-radius:5px;box-shadow:rgba(0,0,0,.4) 0px 3px 9px}.card *{text-align:center;margin-top:3px}.card h3{color:var(--main-color)}footer a{color:var(--main-color);text-decoration:none}#spinner:not([hidden]){position:fixed;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center}#spinner::after{content:"";width:50px;height:50px;border:5px solid #f3f3f3;border-top:8px solid var(--main-color);border-radius:100%;will-change:transform;animation:spin 1s infinite linear}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.error{color:#c03d1d;font-size:.8rem}',"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAGA,MACE,qBAAA,CACA,kBAAA,CAGF,EACE,SAAA,CACA,QAAA,CACA,qBAAA,CACA,+BAAA,CAGF,WACE,gBAAA,CACA,YAAA,CACA,qBAAA,CACA,QAAA,CACA,kBAAA,CACA,sBAAA,CAGF,cACE,6BAAA,CACA,cAAA,CACA,uBAAA,CAGF,IACE,aAAA,CAKF,wBACE,WAAA,CACA,qBAAA,CACA,UAAA,CACA,SAAA,CACA,wBAAA,CACA,YAAA,CACA,iBAAA,CAGF,YACE,UAAA,CACA,SAAA,CACA,WAAA,CACA,kBAAA,CACA,UAAA,CACA,qBAAA,CACA,gBAAA,CACA,cAAA,CACA,iBAAA,CAKF,OACE,wBAAA,CACA,iBAAA,CACA,wBAAA,CACA,mBAAA,CACA,sBAAA,CACA,kBAAA,CAEF,aACE,UAAA,CACA,cAAA,CAEF,kBACE,iBAAA,CACA,eAAA,CACA,YAAA,CACA,sBAAA,CAEF,mBACE,YAAA,CAEF,0BACE,wBAAA,CACA,aAAA,CAIF,gBACE,YAAA,CACA,QAAA,CACA,yBAAA,CACA,kBAAA,CACA,YAAA,CACA,qCAAA,CAGF,mBACE,uBAAA,CAGF,kBACE,eAAA,CAGF,cACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,OAAA,CAGF,kBACE,WAAA,CAGF,iBACE,YAAA,CACA,qBAAA,CACA,QAAA,CAKF,OACE,YAAA,CACA,cAAA,CACA,kBAAA,CACA,sBAAA,CACA,QAAA,CAEF,MACE,YAAA,CACA,+BAAA,CACA,YAAA,CACA,iBAAA,CACA,qCAAA,CAGF,QACE,iBAAA,CACA,cAAA,CAGF,SACE,uBAAA,CAGF,SACE,uBAAA,CACA,oBAAA,CAIF,uBACE,cAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAGF,gBACE,UAAA,CACA,UAAA,CACA,WAAA,CACA,wBAAA,CACA,sCAAA,CACA,kBAAA,CACA,qBAAA,CACA,iCAAA,CAGF,gBACE,KACE,sBAAA,CAEF,GACE,wBAAA,CAAA,CAIJ,OACE,aAAA,CACA,eAAA",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n\n:root {\n  --main-color: #1e74bb;\n  --main-bg: #e6e4e4;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\n\n.container {\n  margin: 10px auto;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n}\n\n.container h1 {\n  font-family: 'Lobster', cursive;\n  font-size: 4rem;\n  color: var(--main-color);\n}\n\nimg {\n  display: block;\n}\n\n/* form styles */\n\nform input[type='search'] {\n  padding: 5px;\n  border: 1px solid gray;\n  float: left;\n  width: 80%;\n  background-color: #f1f1f1;\n  outline: none;\n  font-size: 1.05rem;\n}\n\nform button {\n  float: left;\n  width: 20%;\n  padding: 5px;\n  background: #2196f3;\n  color: #fff;\n  border: 1px solid gray;\n  border-left: none;\n  cursor: pointer;\n  font-size: 1.05rem;\n}\n\n/* Temps radio buttons */\n\n.temps {\n  background-color: #efefef;\n  border-radius: 4px;\n  border: 1px solid #d0d0d0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n.temps label {\n  width: 6rem;\n  cursor: pointer;\n}\n.temps label span {\n  text-align: center;\n  padding: 3px 0px;\n  display: flex;\n  justify-content: center;\n}\n.temps label input {\n  display: none;\n}\n.temps input:checked + span {\n  background-color: #404040;\n  color: #f7f7f7;\n}\n\n/* output styles */\n.single-weather {\n  display: flex;\n  gap: 30px;\n  background: var(--main-bg);\n  border-radius: 10px;\n  padding: 10px;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 9px;\n}\n\n.single-weather h2 {\n  color: var(--main-color);\n}\n\n.single-weather p {\n  font-size: 0.8rem;\n}\n\n.city-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.city-details img {\n  width: 150px;\n}\n\n.weather-details {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n/*  cards styles */\n\n.cards {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.card {\n  flex-basis: 1;\n  background-color: var(--main-bg);\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 9px;\n}\n\n.card * {\n  text-align: center;\n  margin-top: 3px;\n}\n\n.card h3 {\n  color: var(--main-color);\n}\n\nfooter a {\n  color: var(--main-color);\n  text-decoration: none;\n}\n\n/* spinner styles */\n#spinner:not([hidden]) {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#spinner::after {\n  content: '';\n  width: 50px;\n  height: 50px;\n  border: 5px solid #f3f3f3;\n  border-top: 8px solid var(--main-color);\n  border-radius: 100%;\n  will-change: transform;\n  animation: spin 1s infinite linear;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.error {\n  color: #c03d1d;\n  font-size: 0.8rem;\n}\n"],sourceRoot:""}]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],p=i[l]||0,A="".concat(l," ").concat(p);i[l]=p+1;var d=n(A),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(u);else{var f=o(u,r);r.byIndex=c,t.splice(c,0,{identifier:A,updater:f,references:1})}a.push(A)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var p=n(i[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),s=n.n(c),l=n(216),p=n.n(l),A=n(589),d=n.n(A),u=n(429),f={};f.styleTagTransform=d(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const m=n.p+"icon.png";function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function C(){C=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function l(e,t,n,o){var i=t&&t.prototype instanceof d?t:d,a=Object.create(i.prototype),c=new k(o||[]);return r(a,"_invoke",{value:w(e,n,c)}),a}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var A={};function d(){}function u(){}function f(){}var m={};s(m,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(S([])));g&&g!==t&&n.call(g,i)&&(m=g);var v=f.prototype=d.prototype=Object.create(m);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function o(r,i,a,c){var s=p(e[r],e,i);if("throw"!==s.type){var l=s.arg,A=l.value;return A&&"object"==h(A)&&n.call(A,"__await")?t.resolve(A.__await).then((function(e){o("next",e,a,c)}),(function(e){o("throw",e,a,c)})):t.resolve(A).then((function(e){l.value=e,a(l)}),(function(e){return o("throw",e,a,c)}))}c(s.arg)}var i;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return i=i?i.then(r,r):r()}})}function w(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===A)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=p(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===A)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function E(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),A;var o=p(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,A;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,A):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,A)}function B(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(B,this),this.reset(!0)}function S(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:F}}function F(){return{value:void 0,done:!0}}return u.prototype=f,r(v,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:u,configurable:!0}),u.displayName=s(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},x(b.prototype),s(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new b(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(v),s(v,c,"Generator"),s(v,i,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,A):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),A},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),A}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),A}},e}function y(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){y(i,r,o,a,c,"next",e)}function c(e){y(i,r,o,a,c,"throw",e)}a(void 0)}))}}var v="e23f4e2a8fd980f3490ac76932aae2d0";function x(e,t,n){return b.apply(this,arguments)}function b(){return(b=g(C().mark((function e(t,n,r){var o,i,a;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new URL(t)).searchParams.set("q",n),o.searchParams.set("units",r),o.searchParams.set("appid",v),i={},e.prev=5,e.next=8,fetch(o,{mode:"cors"});case 8:return a=e.sent,e.next=11,a.json();case 11:i=e.sent,e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(5),e.abrupt("return",e.t0);case 17:return e.abrupt("return",i);case 18:case"end":return e.stop()}}),e,null,[[5,14]])})))).apply(this,arguments)}function w(){return w=g(C().mark((function e(t){var n,r,o,i=arguments;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"metric",e.prev=1,e.next=4,x("https://api.openweathermap.org/data/2.5/weather",t,n);case 4:r=e.sent,e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",e.t0);case 10:return o={cityName:r.name,country:r.sys.country,dateTime:new Date(1e3*r.dt),temp:r.main.temp,feelsLike:r.main.feels_like,humidity:r.main.humidity,icon:"http://openweathermap.org/img/wn/".concat(r.weather[0].icon,"@2x.png"),windSpeed:r.wind.speed,description:r.weather[0].description,units:n},e.abrupt("return",o);case 12:case"end":return e.stop()}}),e,null,[[1,7]])}))),w.apply(this,arguments)}function E(){return E=g(C().mark((function e(t){var n,r,o,i,a,c=arguments;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"metric",e.prev=1,e.next=4,x("https://api.openweathermap.org/data/2.5/forecast",t,n);case 4:r=e.sent,e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",e.t0);case 10:for(o=[],i=0;i<r.list.length;i+=8)a={dateTime:new Date(1e3*r.list[i].dt),temp:r.list[i].main.temp,description:r.list[i].weather[0].description,icon:"http://openweathermap.org/img/wn/".concat(r.list[i].weather[0].icon,"@2x.png"),humidity:r.list[i].main.humidity,windSpeed:r.list[i].wind.speed,units:n},o.push(a);return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e,null,[[1,7]])}))),E.apply(this,arguments)}function B(e){return e<=9?"0".concat(e):e}function L(e){return e[0].toUpperCase()+e.slice(1)}!function(){var e,t,n=document.querySelectorAll('.temps input[type="radio"]'),r=document.querySelector(".main-output"),o=document.querySelector("form"),i=document.querySelector(".more-details"),a=document.querySelector("#spinner"),c=document.querySelector(".error"),s="Tirah";function l(t){t?t.target.getAttribute("id")&&(e=t.target.id):e="metric",a.removeAttribute("hidden"),c.style.display="none",function(e){return w.apply(this,arguments)}(s,e).then((function(e){r.innerHTML="",r.appendChild(function(e){var t="metric"===e.units?"km/h":"mi/h",n="metric"===e.units?"°C":"°F",r=document.createElement("div");r.classList.add("single-weather");var o=document.createElement("div");o.classList.add("city-details"),r.appendChild(o);var i=document.createElement("h2");i.textContent="".concat(e.cityName,", ").concat(e.country),o.appendChild(i);var a=document.createElement("h3");a.innerHTML='<i class="fa-solid fa-temperature-three-quarters"></i> '.concat(Math.floor(e.temp)," ").concat(n),o.appendChild(a);var c=document.createElement("h4");c.textContent=L(e.description),o.appendChild(c);var s=document.createElement("img");s.title=L(e.description),s.src=e.icon,o.appendChild(s);var l,p,A,d,u,f,m=document.createElement("p");m.textContent=(p=(l=e.dateTime).getDate(),A=l.getMonth()+1,d=l.getFullYear(),u=l.getHours(),f=l.getMinutes(),"".concat(B(p),"-").concat(B(A),"-").concat(d," ").concat(B(u),":").concat(B(f))),o.appendChild(m);var h=document.createElement("div");h.classList.add("weather-details"),r.appendChild(h);var C=document.createElement("div"),y=document.createElement("div");y.innerHTML='<i class="fa-solid fa-droplet"></i>',y.title="Humidity",C.appendChild(y);var g=document.createElement("div");g.textContent="".concat(e.humidity,"%"),C.appendChild(g),h.appendChild(C);var v=document.createElement("div"),x=document.createElement("div");x.innerHTML='<i class="fa-solid fa-wind"></i>',x.title="Wind Speed",v.appendChild(x);var b=document.createElement("div");b.textContent="".concat(e.windSpeed," ").concat(t),v.appendChild(b),h.appendChild(v);var w=document.createElement("div"),E=document.createElement("div");E.innerHTML='<i class="fa-solid fa-temperature-quarter"></i>',E.title="Feels Like",w.appendChild(E);var k=document.createElement("div");return k.textContent="".concat(Math.floor(e.feelsLike)," ").concat(n),w.appendChild(k),h.appendChild(w),r}(e))})).catch((function(e){console.log(e),c.style.display="block",c.textContent="The requested city not found.",a.setAttribute("hidden","")})),function(e){return E.apply(this,arguments)}(s,e).then((function(e){var t,n;a.setAttribute("hidden",""),i.innerHTML="",i.appendChild((t=e,(n=document.createElement("div")).classList.add("cards"),t.forEach((function(e){var t="metric"===e.units?"km/h":"mi/h",r="metric"===e.units?"°C":"°F",o=document.createElement("div");o.classList.add("card");var i=document.createElement("h3");i.textContent=e.dateTime.toLocaleDateString("en-US",{weekday:"long"}),o.appendChild(i);var a,c,s,l=document.createElement("p");l.textContent=(c=(a=e.dateTime).getDate(),s=a.getMonth()+1,"".concat(B(c),"-").concat(B(s))),o.appendChild(l);var p=document.createElement("h4");p.innerHTML='<i class="fa-solid fa-temperature-three-quarters"></i> '.concat(Math.floor(e.temp)," ").concat(r),o.appendChild(p);var A=document.createElement("img");A.title=L(e.description),A.src=e.icon,o.appendChild(A);var d=document.createElement("p");d.innerHTML="<i class=\"fa-solid fa-droplet\" title='Humidity'></i> ".concat(e.humidity,"%"),o.appendChild(d);var u=document.createElement("p");u.innerHTML="<i class=\"fa-solid fa-wind\" title='Wind Speed'></i> \n    ".concat(e.windSpeed," ").concat(t),o.appendChild(u),n.appendChild(o)})),n))})).catch((function(e){console.log(e)}))}n.forEach((function(e){e.addEventListener("click",l)})),o.addEventListener("submit",(function(e){e.preventDefault(),s=document.querySelector("#city").value,l(e)})),l(),(t=document.createElement("link")).rel="shortcut icon",t.type="image/png",t.href=m,document.head.appendChild(t)}()})()})();
//# sourceMappingURL=bundlefd9091d1d0d8a990cb65.js.map