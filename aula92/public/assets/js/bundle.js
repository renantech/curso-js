(()=>{var r={122:(r,t,n)=>{"use strict";n.d(t,{Z:()=>c});var e=n(537),o=n.n(e),i=n(645),a=n.n(i)()(o());a.push([r.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),a.push([r.id,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\r\n\r\n:root {\r\n  --primary-color: rgb(17, 86, 102);\r\n  --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--primary-color);\r\n  font-family: 'Open sans', sans-serif;\r\n  font-size: 1.3em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 50px auto;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n  font-size: 24px;\r\n  height: 50px;\r\n  padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n  outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n  background: var(--primary-color-darker);\r\n}\r\n"],sourceRoot:""}]);const c=a},645:r=>{"use strict";r.exports=function(r){var t=[];return t.toString=function(){return this.map((function(t){var n="",e=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),e&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=r(t),e&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(r,n,e,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(e)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<r.length;s++){var f=[].concat(r[s]);e&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),t.push(f))}},t}},537:r=>{"use strict";r.exports=function(r){var t=r[1],n=r[3];if(!n)return t;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),i="/*# ".concat(o," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},666:r=>{var t=function(r){"use strict";var t,n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(r,t,n){r[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(r,t,n){return Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),r[t]}try{s({},"")}catch(r){s=function(r,t,n){return r[t]=n}}function f(r,t,n,e){var i=t&&t.prototype instanceof A?t:A,a=Object.create(i.prototype),c=new T(e||[]);return o(a,"_invoke",{value:B(r,n,c)}),a}function l(r,t,n){try{return{type:"normal",arg:r.call(t,n)}}catch(r){return{type:"throw",arg:r}}}r.wrap=f;var p="suspendedStart",h="suspendedYield",d="executing",v="completed",m={};function A(){}function y(){}function g(){}var b={};s(b,a,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(S([])));x&&x!==n&&e.call(x,a)&&(b=x);var C=g.prototype=A.prototype=Object.create(b);function w(r){["next","throw","return"].forEach((function(t){s(r,t,(function(r){return this._invoke(t,r)}))}))}function L(r,t){function n(o,i,a,c){var u=l(r[o],r,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?t.resolve(f.__await).then((function(r){n("next",r,a,c)}),(function(r){n("throw",r,a,c)})):t.resolve(f).then((function(r){s.value=r,a(s)}),(function(r){return n("throw",r,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(r,e){function o(){return new t((function(t,o){n(r,e,t,o)}))}return i=i?i.then(o,o):o()}})}function B(r,t,n){var e=p;return function(o,i){if(e===d)throw new Error("Generator is already running");if(e===v){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===p)throw e=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=d;var u=l(r,t,n);if("normal"===u.type){if(e=n.done?v:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(e=v,n.method="throw",n.arg=u.arg)}}}function k(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,k(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),m;var i=l(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function j(r){var t={tryLoc:r[0]};1 in r&&(t.catchLoc=r[1]),2 in r&&(t.finallyLoc=r[2],t.afterLoc=r[3]),this.tryEntries.push(t)}function O(r){var t=r.completion||{};t.type="normal",delete t.arg,r.completion=t}function T(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(j,this),this.reset(!0)}function S(r){if(r){var n=r[a];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:_}}function _(){return{value:t,done:!0}}return y.prototype=g,o(C,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:y,configurable:!0}),y.displayName=s(g,u,"GeneratorFunction"),r.isGeneratorFunction=function(r){var t="function"==typeof r&&r.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,g):(r.__proto__=g,s(r,u,"GeneratorFunction")),r.prototype=Object.create(C),r},r.awrap=function(r){return{__await:r}},w(L.prototype),s(L.prototype,c,(function(){return this})),r.AsyncIterator=L,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new L(f(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(r){return r.done?r.value:a.next()}))},w(C),s(C,u,"Generator"),s(C,a,(function(){return this})),s(C,"toString",(function(){return"[object Generator]"})),r.keys=function(r){var t=Object(r),n=[];for(var e in t)n.push(e);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},r.values=S,T.prototype={constructor:T,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(r,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===r||"continue"===r)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=r,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(r,t){if("throw"===r.type)throw r.arg;return"break"===r.type||"continue"===r.type?this.next=r.arg:"return"===r.type?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):"normal"===r.type&&t&&(this.next=t),m},finish:function(r){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===r)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(r){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===r){var e=n.completion;if("throw"===e.type){var o=e.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:S(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),m}},r}(r.exports);try{regeneratorRuntime=t}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},379:r=>{"use strict";var t=[];function n(r){for(var n=-1,e=0;e<t.length;e++)if(t[e].identifier===r){n=e;break}return n}function e(r,e){for(var i={},a=[],c=0;c<r.length;c++){var u=r[c],s=e.base?u[0]+e.base:u[0],f=i[s]||0,l="".concat(s," ").concat(f);i[s]=f+1;var p=n(l),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var d=o(h,e);e.byIndex=c,t.splice(c,0,{identifier:l,updater:d,references:1})}a.push(l)}return a}function o(r,t){var n=t.domAPI(t);return n.update(r),function(t){if(t){if(t.css===r.css&&t.media===r.media&&t.sourceMap===r.sourceMap&&t.supports===r.supports&&t.layer===r.layer)return;n.update(r=t)}else n.remove()}}r.exports=function(r,o){var i=e(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var u=e(r,o),s=0;s<i.length;s++){var f=n(i[s]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}i=u}}},569:r=>{"use strict";var t={};r.exports=function(r,n){var e=function(r){if(void 0===t[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}t[r]=n}return t[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}},216:r=>{"use strict";r.exports=function(r){var t=document.createElement("style");return r.setAttributes(t,r.attributes),r.insert(t,r.options),t}},565:(r,t,n)=>{"use strict";r.exports=function(r){var t=n.nc;t&&r.setAttribute("nonce",t)}},795:r=>{"use strict";r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=r.insertStyleElement(r);return{update:function(n){!function(r,t,n){var e="";n.supports&&(e+="@supports (".concat(n.supports,") {")),n.media&&(e+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(e+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),e+=n.css,o&&(e+="}"),n.media&&(e+="}"),n.supports&&(e+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(e,r,t.options)}(t,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(t)}}}},589:r=>{"use strict";r.exports=function(r,t){if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,exports:{}};return r[e](i,i.exports,n),i.exports}n.n=r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return n.d(t,{a:t}),t},n.d=(r,t)=>{for(var e in t)n.o(t,e)&&!n.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:t[e]})},n.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),n.nc=void 0,(()=>{"use strict";function r(r,t,n,e,o,i,a){try{var c=r[i](a),u=c.value}catch(r){return void n(r)}c.done?t(u):Promise.resolve(u).then(e,o)}function t(){var n;return n=function*(){yield new Promise(((r,t)=>{setTimeout((()=>{console.log("Hello World!"),r()}))}),2e3),console.log("Terminou")},t=function(){var t=this,e=arguments;return new Promise((function(o,i){var a=n.apply(t,e);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))},t.apply(this,arguments)}n(666);var e=n(379),o=n.n(e),i=n(795),a=n.n(i),c=n(569),u=n.n(c),s=n(565),f=n.n(s),l=n(216),p=n.n(l),h=n(589),d=n.n(h),v=n(122),m={};m.styleTagTransform=d(),m.setAttributes=f(),m.insert=u().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),o()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals,function(){t.apply(this,arguments)}()})()})();
//# sourceMappingURL=bundle.js.map