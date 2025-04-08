(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},o=[],s=0;s<n.length;s++){var c=n[s],l=i.base?c[0]+i.base:c[0],d=r[l]||0,m="".concat(l," ").concat(d);r[l]=d+1;var f=t(m),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var g=a(u,i);i.byIndex=s,e.splice(s,0,{identifier:m,updater:g,references:1})}o.push(m)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=i(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<r.length;o++){var s=t(r[o]);e[s].references--}for(var c=i(n,a),l=0;l<r.length;l++){var d=t(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},159:(n,e,t)=>{t.d(e,{A:()=>f});var i=t(601),a=t.n(i),r=t(314),o=t.n(r),s=t(417),c=t.n(s),l=new URL(t(443),t.b),d=o()(a());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);"]);var m=c()(l);d.push([n.id,`@font-face {\n  font-family: "Showcard Gothic";\n  src: url(${m}) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* ***** TABLE OF CONTENTS *********************************** */\n\n/* ROOT/SHARED/GLOBAL */\n/* -- COLORS AND EFFECTS*/\n/* -- INITIAL SIZE KEY */\n/* TEXT CLASSES */\n/* -- MOUSE POINTER */\n/* HEADER */\n/* -- BUTTONS */\n/* MAIN */\n/* -- PROJECT CARDS */\n/* FOOTER */\n/* MEDIA QUERIES */\n\n/* ***** TABLE OF CONTENTS *********************************** */\n\n/* ROOT/SHARED/GLOBAL */\n:root {\n  /* COLORS AND EFFECTS*/\n\n  --circle-red: #bd4949;\n  --explosion-gold: #edbd58;\n  --mug-blue: #898d9b;\n  --hoodie-blue: #484662;\n  --desk-brown: #4d4a47;\n  --standard-black: #0b0806;\n  --standard-white: #d1c5b6;\n  --computer-grey: #808080;\n\n  --box-shadow: 0 5px 10px var(--standard-black);\n  --background-main: linear-gradient(\n    var(--linear-gradient-deg),\n    var(--standard-black),\n    var(--hoodie-blue)\n  );\n\n  --background-hover: linear-gradient(\n    var(--linear-gradient-deg),\n    var(--standard-black),\n    var(--circle-red)\n  );\n\n  --background-header: linear-gradient(\n    var(--linear-gradient-deg),\n    var(--standard-black),\n    var(--desk-brown)\n  );\n\n  --background-gold: linear-gradient(\n    var(--linear-gradient-deg),\n    var(--standard-black),\n    var(--explosion-gold)\n  );\n\n  --glow: 0 0 30px var(--explosion-gold), 0 0 50px var(--explosion-gold);\n\n  --font-title: "Showcard Gothic", sans-serif;\n  --font-text: "Montserrat", sans-serif;\n  --linear-gradient-deg: 5deg;\n  --border-style: solid 0.5rem;\n  --border-radius-master: 2rem;\n  --scale-big: 1.125;\n  --scale-small: 0.9;\n\n  /* INITIAL SIZE KEY */\n\n  --font-size-master: 14px; /* Initial Size: 14px */\n  --line-height-master: 1.25; /* Initial: 1.25 */\n  --font-size-title: 1.85rem; /* Initial Size: 1.85rem */\n  --font-size-subtitle: 1.5rem; /* Initial Size: 1.5rem */\n  --font-size-normal: 1rem; /* Initial Size: 1rem */\n  --margin-master: 0.25rem; /* Initial Size: 0.25rem */\n  --padding-master: 0.25rem; /* Initial Size: 0.25rem */\n  --gap-master: 0.25rem; /* Initial Size: 0.25rem */\n  --content-size: 22rem; /* Initial Size: 22rem */\n  --container-size: 28rem; /* Initial Size: 28rem */\n  --card-size: 28rem; /* Initial Size: 28rem */\n  --img-title: 7rem; /* Initial Size: 7rem */\n  --img-btn: 6rem; /* Initial Size: 6rem */\n  --card-screenshot-size: 15rem; /* Initial Size: 15rem */\n  --footer-icon-size: calc(\n    var(--font-size-normal) + 2rem\n  ); /* Initial Size: 3rem */\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* CSS Reset for the following... */\nh1,\nh2,\nh3,\np {\n  margin: 0; /* Remove default margin */\n  padding: 0; /* Remove default padding */\n  font-size: inherit; /* Inherit font size from parent */\n  font-weight: inherit; /* Inherit font weight from parent */\n  line-height: inherit; /* Inherit line height from parent */\n  text-align: inherit; /* Inherit text alignment from parent */\n  color: inherit; /* Inherit text color from parent */\n}\n\n/* TEXT CLASSES */\n\n.special-text {\n  color: var(--mug-blue);\n  font-family: var(--font-title);\n  font-size: var(--font-size-subtitle);\n  text-align: center;\n}\n\n.normal-text {\n  color: var(--standard-white);\n  font-family: var(--font-text);\n  font-size: var(--font-size-normal);\n}\n\n/* MOUSE POINTER  */\n\nbutton,\n#content-img-big-div,\na {\n  cursor: pointer;\n}\n\nhtml,\nbody {\n  /* Below, reduces base font size for mobile, a convenient way to backdoor size changes easily, reduce for mobile views */\n  background-color: var(--standard-black);\n  font-size: var(--font-size-master);\n  /* Improves text readability for mobile */\n  line-height: var(--line-height-master);\n}\n\n/* HEADER */\nheader,\n#header-container {\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#title-text {\n  height: 10vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--explosion-gold);\n  /* color: var(--circle-red); */\n    color: var(--standard-black);\n  font-family: var(--font-title);\n  font-size: var(--font-size-title);\n  margin: var(--margin-master);\n  /* margin-top: calc(var(--margin-master) + 0.5rem); */\n  padding: var(--padding-master);\n}\n\n#header-content-container {\n  min-height: var(--container-size);\n  max-width: var(--container-size);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#content-img-big-div,\n#content-text-title-div {\n  min-height: var(--content-size);\n  max-width: var(--content-size);\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: var(--background-header);\n  border-radius: 50%;\n}\n\n#content-img-big-div {\n  display: flex;\n  transition: transform 0.5s ease;\n}\n\n#content-img-big-div:hover {\n  background: var(--background-header);\n  border-radius: 50%;\n  box-shadow: var(--glow);\n  transform: scale(var(--scale-big));\n}\n\n.img-big {\n  height: auto;\n  width: var(--content-size);\n}\n\n#img-full-MMM-reverse {\n  display: flex;\n}\n\n#img-full-MMM {\n  display: none;\n}\n\n/* Starts as display: none */\n#content-text-title-div {\n  display: none;\n  align-items: center;\n  justify-content: center;\n}\n\n#content-title-div {\n  height: fit-content;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: var(--margin-master);\n}\n\n#content-title {\n  color: var(--standard-white);\n  font-family: var(--font-title);\n  font-size: var(--font-size-subtitle);\n}\n\n#content-title-img {\n  height: auto;\n  width: var(--img-title);\n}\n\n#content-text,\n#contact-info-div {\n  width: var(--content-size);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.img-contact {\n  height: auto;\n  width: 2.125rem;\n}\n\n#contact-email {\n  margin-bottom: 0.5rem;\n}\n\n#content-text {\n  padding: 0 0.25rem 0 1rem;\n}\n\n/* BUTTONS */\n\n#header-btn-container {\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  gap: var(--gap-master);\n  padding: var(--padding-master);\n}\n\nbutton {\n  height: fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--explosion-gold);\n  border: var(--border-style);\n  border-color: var(--standard-black);\n  border-radius: 50%;\n  font-family: var(--font-title);\n  padding: var(--padding-master);\n  transition: transform 0.5s ease;\n}\n\nbutton:hover {\n  background: var(--background-hover);\n  border-color: var(--explosion-gold);\n  box-shadow: var(--glow);\n  transform: scale(var(--scale-big));\n}\n\nbutton:active {\n  transform: scale(var(--scale-small));\n}\n\n/* Starts as display: none */\n#btn-muffin {\n  display: none;\n}\n\n.img-small {\n  height: auto;\n  width: var(--img-btn);\n  margin: var(--margin-master);\n}\n\n#img-muffin {\n  transition: transform 0.5s ease;\n}\n\n#img-mug {\n  transform: translateX(0.375rem) translateY(0.05rem);\n}\n\n#img-phone {\n  transition: transform 0.5s ease;\n}\n\n#img-muffin:hover {\n  transform: rotate(-15deg);\n}\n\n#img-phone:hover {\n  transform: rotate(45deg);\n}\n\n/* MAIN */\n\nmain {\n  height: fit-content;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n#main-content-container {\n  height: fit-content;\n  width: fit-content;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: var(--gap-master);\n  background: var(--standard-black);\n  border-radius: var(--border-radius-master);\n}\n\n/* PROJECT CARDS */\n\n.card {\n  min-height: var(--card-size);\n  max-width: var(--card-size);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  background: var(--background-main);\n  border: var(--border-style);\n  border-color: var(--standard-black);\n  border-radius: var(--border-radius-master);\n  margin: var(--margin-master);\n  padding: var(--padding-master);\n}\n\n.card-title {\n  color: var(--explosion-gold);\n  font-family: var(--font-title);\n  font-size: var(--font-size-subtitle);\n  padding: var(--padding-master);\n}\n\n.card-screenshot {\n  height: var(--card-screenshot-size);\n  width: var(--card-screenshot-size);\n  background-color: var(--computer-grey);\n  border-radius: 1.125rem;\n  margin: var(--margin-master);\n  object-fit: cover;\n}\n\n.card-blurb {\n  height: fit-content;\n  width: fit-content;\n  color: var(--explosion-gold);\n  font-family: var(--font-text);\n  font-size: var(--font-size-normal);\n  margin: 1rem;\n}\n\n.card:hover {\n  background: var(--background-hover);\n  border-color: var(--explosion-gold);\n  color: var(--explosion-gold);\n  transition: transform 0.5s ease;\n  transform: scale(1.05);\n}\n\na:hover {\n  color: var(--standard-white);\n  text-shadow: var(--glow);\n}\n\n/* FOOTER */\n\nfooter {\n  margin: 1rem;\n}\n\n#footer-content-container {\n  height: fit-content;\n  width: fit-content;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: var(--gap-master);\n  margin: auto;\n  padding: var(--padding-master);\n}\n\n#img-footer-icon {\n  height: auto;\n  width: var(--footer-icon-size);\n  margin: var(--margin-master);\n}\n\n#footer-text {\n  color: var(--standard-white);\n  font-family: var(--font-title);\n  font-size: var(--font-size-normal);\n  margin: var(--margin-master);\n}\n\n/* MEDIA QUERIES */\n\n@media (min-width: 500px) {\n  :root {\n    --font-size-master: 15px; /* Initial Size: 14px */\n    --line-height-master: 1.5; /* Initial: 1.25 */\n    --font-size-title: 2.25rem; /* Initial Size: 1.85rem */\n  }\n}\n\n@media (min-width: 650px) {\n  :root {\n    --font-size-master: 16px; /* Initial Size: 14px */\n    --font-size-title: 2.85rem; /* Initial Size: 1.85rem */\n    --font-size-subtitle: 1.75rem; /* Initial Size: 1.5rem */\n    --font-size-normal: 1.125rem; /* Initial Size: 1rem */\n    --margin-master: 0.75; /* Initial Size: 0.25rem */\n    --padding-master: 0.75rem; /* Initial Size: 0.25rem */\n    --gap-master: 0.75rem; /* Initial Size: 0.25rem */\n    --content-size: 25.5rem; /* Initial Size: 22rem */\n    --container-size: 30rem; /* Initial Size: 28rem */\n    --card-size: 25.5rem; /* Initial Size: 28rem */\n    --img-title: 8.5rem; /* Initial Size: 7rem */\n    --img-btn: 7.5rem; /* Initial Size: 6rem */\n    --card-screenshot-size: 17rem; /* Initial Size: 15rem */\n    --footer-icon-size: calc(\n      var(--font-size-normal) + 4rem\n    ); /* Initial Size: 3rem */\n  }\n  #header-content-container {\n    flex-direction: row;\n    gap: var(--gap-master);\n  }\n\n  #header-btn-container {\n    width: fit-content;\n    flex-direction: column;\n  }\n\n  .card {\n    height: calc(var(--card-size) + 8rem);\n    width: var(--card-size);\n  }\n}\n\n@media (min-width: 800px) {\n  :root {\n    --font-size-title: 3rem; /* Initial Size: 1.85rem */\n  }\n}\n\n@media (min-width: 1000px) {\n  :root {\n    --font-size-title: 4rem; /* Initial Size: 1.85rem */\n    --font-size-subtitle: 2rem; /* Initial Size: 1.5rem */\n    --content-size: 28rem; /* Initial Size: 22rem */\n    --container-size: 32rem; /* Initial Size: 28rem */\n    --card-size: 28rem; /* Initial Size: 28rem */\n    --img-title: 9rem; /* Initial Size: 7rem */\n    --img-btn: 8rem; /* Initial Size: 6rem */\n    --card-screenshot-size: 18rem; /* Initial Size: 15rem */\n  }\n}\n`,""]);const f=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);i&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},443:(n,e,t)=>{n.exports=t.p+"464936a8971cef0c4878.ttf"},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var a=i.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=i[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var i=t(72),a=t.n(i),r=t(825),o=t.n(r),s=t(659),c=t.n(s),l=t(56),d=t.n(l),m=t(540),f=t.n(m),u=t(113),g=t.n(u),p=t(159),h={};function b(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var i,a,r,o,s=[],c=!0,l=!1;try{if(r=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=r.call(t)).done)&&(s.push(i.value),s.length!==e);c=!0);}catch(n){l=!0,a=n}finally{try{if(!c&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw a}}return s}}(n,e)||function(n,e){if(n){if("string"==typeof n)return v(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function y(n){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=document.createElement(n),a=0,r=Object.entries(e);a<r.length;a++){var o=b(r[a],2),s=o[0],c=o[1];"class"===s?i.className=c:s.startsWith("data-")?i.setAttribute(s,c):"ariaLabel"===s?i.setAttribute("aria-label",c):i.setAttribute(s,c)}return t&&(i.innerText=t),i}function x(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=document.createElement("img"),t=0,i=Object.entries(n);t<i.length;t++){var a=b(i[t],2),r=a[0],o=a[1];"id"===r?e.id=o:"src"===r?e.src=o:"alt"===r?e.alt=o:(r.startsWith("data-"),e.setAttribute(r,o))}return e}function w(){return{header:document.querySelector("header"),main:document.querySelector("main"),footer:document.querySelector("footer"),headerContentContainer:document.querySelector("#header-content-container"),contentImgBigDiv:document.querySelector("#content-img-big-div"),imgBig:document.querySelectorAll(".img-big"),imgFullMMM:document.querySelector("#img-full-MMM"),imgFullMMMReverse:document.querySelector("#img-full-MMM-reverse"),contentTextTitleDiv:document.querySelector("#content-text-title-div"),contentTitle:document.querySelector("#content-title"),contentTitleImg:document.querySelector("#content-title-img"),contentTextDiv:document.querySelector("#content-text-div"),contentText:document.querySelector("#content-text"),contactInfoDiv:document.querySelector("#contact-info-div"),contactEmail:document.querySelector("#contact-email"),contactPhone:document.querySelector("#contact-phone"),btnMuffin:document.querySelector("#btn-muffin"),btnMug:document.querySelector("#btn-mug"),btnPhone:document.querySelector("#btn-phone")}}h.styleTagTransform=g(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=f(),a()(p.A,h),p.A&&p.A.locals&&p.A.locals;const S=t.p+"images/8ea1d2cdbfdeecaafeb6.svg",z=t.p+"images/82f2a48433dc753c9787.svg",I=t.p+"images/4d66a3d6f8474b889b15.svg",M=t.p+"images/c710ca71073b88521d7c.svg",T=t.p+"images/f523bbdc7ce6dbbfdf54.svg",E=t.p+"images/71ca2b6d2780876ec73b.svg",k=t.p+"images/c7d9a41464e653ec35ef.svg",A=t.p+"images/39db2ffb5fa4e59af9fd.svg",j=t.p+"images/cf0b16b763fda67ab2ed.svg",O=t.p+"images/c069eaf45a442137be40.svg",C=t.p+"assets/soundClick.ce2660fffb2a0273c35d5ce4a5258454.mp3";function R(n){(Array.isArray(n)?n:Array.from(n)).forEach((function(n){n.style.display="flex"}))}function L(n){(Array.isArray(n)?n:Array.from(n)).forEach((function(n){n.style.display="none"}))}function D(){var n=w(),e=n.contentImgBigDiv,t=n.contentTextTitleDiv,i=n.btnMuffin;"none"!==i.style.display?(L([e]),R([t])):"none"===i.style.display&&(L([t]),R([e]))}function N(n,e){n.innerText=e}function q(){var n=w(),e=n.contentTitle,t=n.contentTitleImg,i=n.contentText,a=n.contactInfoDiv,r=n.contactEmail,o=n.contactPhone,s=n.btnMuffin,c=n.btnMug,l=n.btnPhone;"none"!==s.style.display&&"none"===c.style.display&&"none"!==l.style.display?(L([a]),R([i]),N(e,"ABOUT ME"),t.src=j,N(i,"Hi, I'm a giant muffin-headed abomination who loves the challenge of learning to code. Below, you will find many of the projects that I've had the pleasure of creating while on my coding journey. Enjoy!"),i.style.textAlign="left"):"none"!==s.style.display&&"none"!==c.style.display&&"none"===l.style.display?(L([i]),R([a]),N(e,"CONTACT"),t.src=O,N(r,"madmuffinmandesign@gmail.com"),N(o,"1-555-8MUFFIN")):function(){var n=w(),e=n.contentTextTitle,t=n.contentText;e.innerText="",t.innerText=""}()}function B(n,e,t,i,a){var r=y("div",{id:"card-".concat(n),class:"card"}),o=y("a",{id:"title-".concat(n),class:"card-title",href:t,ariaLabel:"Visit ".concat(e," project page."),target:"_blank"},e),s=x({id:"img-screenshot-".concat(n),src:i,alt:"Screenshot for ".concat(e," webpage."),class:"card-screenshot"}),c=y("p",{id:"blurb-".concat(n),class:"card-blurb"},a);return r.append(o,s,c),r}var P,F=((P=new Audio(C)).preload="auto",P.addEventListener("error",(function(n){console.error("Error loading audio file:",n)})),P);function U(){!function(n){n.currentTime=0,n.pause(),n.play().catch((function(n){console.error("Audio playback failed:",n)}))}(F)}const H=t.p+"images/f4861658df32d1ea4398.jpg",G=t.p+"images/6ee7c14c16ec90ef7a69.jpg",W=t.p+"images/39cb011d1a185dd4651c.jpg",$=t.p+"images/98eab5523db7a02c1faf.jpg",_=t.p+"images/e2cc1de32c43f59bcdd0.jpg",Q=t.p+"images/6f1a7c346e8dcb8ce3d8.jpg",X=t.p+"images/fde5b83656a14c751fce.jpg",J=t.p+"images/afa8d25a97bae4bf6e91.jpg",K=t.p+"images/fac5dd7d3b82dc3aa666.jpg",Y=t.p+"images/0049a8aa601ec3cb380f.jpg",Z=t.p+"images/bc9cb80cc7b949779bec.jpg",V=t.p+"images/681ae389f409ca861441.jpg",nn=t.p+"images/95dbcd061392b09e16ac.jpg";document.addEventListener("DOMContentLoaded",(function(){var n,e,t,i,a,r,o,s,c,l,d,m,f,u,g,p,h,b,v,j,O;!function(){var n=w().header,e=y("div",{id:"header-content-container"}),t=y("div",{id:"header-btn-container"}),i=y("h1",{id:"title-text",class:"special-text"},"The Mad Muffin Man"),a=y("div",{id:"content-img-big-div"}),r=y("div",{id:"content-text-title-div"}),o=y("div",{id:"content-title-div"}),s=y("h2",{id:"content-title",class:"special-text"}),c=x({id:"content-title-img",src:"",alt:""}),l=y("p",{id:"content-text",class:"normal-text"}),d=y("div",{id:"contact-info-div"}),m=x({id:"img-contact-email",src:k,alt:"Email icon",class:"img-contact"}),f=y("p",{id:"contact-email",class:"normal-text"}),u=x({id:"img-contact-phone",src:A,alt:"Phone icon",class:"img-contact"}),g=y("p",{id:"contact-phone",class:"normal-text"}),p=y("button",{id:"btn-muffin",class:"btn",ariaLabel:"Button with an image of a deranged looking muffin: this reverts the header section back to a cartoon image of the Mad Muffin Man at his computer desk."}),h=y("button",{id:"btn-mug",class:"btn",ariaLabel:"Button with an image of a mug: this changes the main header section from a cartoon image to brief information about me, the infamous Mad Muffin Man."}),b=y("button",{id:"btn-phone",class:"btn",ariaLabel:"Button with an image of a smart phone: this changes the main header section from a cartoon image to contact information for the Mad Muffin Man."}),v=x({id:"img-full-MMM-reverse",src:I,alt:"The Mad Muffin Man is busy at work at his computer desk in a dimly lit office late at night.",class:"img-big"}),S=x({id:"img-full-MMM",src:z,alt:"Cartoonish image of a computer programmer with a giant, weird looking muffin for a head.",class:"img-big"}),j=x({id:"img-muffin",src:M,alt:"Cartoonish image of a deranged looking muffin.",class:"img-small"}),O=x({id:"img-mug",src:T,alt:"Cartoonish image of a coffee mug labeled with the letters 'M3'.",class:"img-small"}),C=x({id:"img-phone",src:E,alt:"Cartoonish image of smart phone that appears to be calling the Mad Muffin Man.",class:"img-small"});n.append(i,e),e.append(a,r,t),a.append(v,S),r.append(o,l,d),o.append(c,s),d.append(m,f,u,g),t.append(p,h,b),p.append(j),h.append(O),b.append(C)}(),n=w().main,e=y("h2",{id:"main-title-text",class:"special-text"},"My Projects"),t=y("div",{id:"main-container"}),i=y("div",{id:"main-content-container"}),a=B("battleship","Battleship: WWII","https://ariesgitterhub.github.io/odin-battleship/",H,"This is my own variant of the famous electronic board game, Battleship. This code was my first foray into Test Driven Development (TDD)."),r=B("weather","Weathervane","https://ariesgitterhub.github.io/odin-weather-app/",G,"My first use of an API call set up, this weather app utilizes worldwide weather data from the Visual Crossing API. It is also an app that I use daily."),o=B("todo","Task King","https://ariesgitterhub.github.io/odin-todo-list/",W,"This to-do list application incorporates the use of class generated objects, localStorage, and the date-fns library."),s=B("restaurant","The Hidden Garden","https://ariesgitterhub.github.io/odin-restaurant-page/",$,"This restaurant site is for a fictional bookstore cafe; it was my introduction to webpack, npm, and ES6 modules."),c=B("tictactoe","Tic-Tac-Zodiac","https://ariesgitterhub.github.io/odin-tic-tac-toe/",_,"A simple game that served as my intro to factory functions, closures, and new ideas on building code from the inside out."),l=B("library","MyReadList","https://ariesgitterhub.github.io/odin-book-library/",Q,"This library app opened my brain up the world of the object design pattern, as well as the use of a cool technique: the data-attribute."),d=B("dashboard","myDashboard","https://ariesgitterhub.github.io/odin-admin-dashboard/",X,"This project, showing a mock-up of an admin-dashboard, highlights early lessons on the CSS essentials of flex and grid."),m=B("signup","Lecture Event","https://ariesgitterhub.github.io/odin-sign-up-form/",J,"This mock-up form for a fictional lecture event employs form field basics and controls, as well as front-end input validation."),f=B("calculator","Calculator","https://ariesgitterhub.github.io/odin-calculator/",K,"A not-so-basic calculator that has buttons for getting Roman Numerals, factorials, percents in decimals, and one button for answering 'the meaning of life.'"),u=B("eas","Etch-a-Dungeon","https://ariesgitterhub.github.io/odin-etch-a-sketch/",Y,"An early project that was meant to be a simple Etch-A-Sketch demo; it morphed into a working dungeon-building app. Best viewed on desktop or laptop with a mouse."),g=B("rps","Wu-Xing Roshambo","https://ariesgitterhub.github.io/odin-rock-paper-scissors/",Z,"This is my take on the game 'Rock, Paper, Scissors.' This was my first time coding something that required game logic to determine outcomes. Not mobile ready."),p=B("ssm","Stupid Sound Machine","https://scintillating-muffin-134894.netlify.app/",V,"An early app that I created for fun, which also has a lot of humorous 'local pub conversation utility.' Fear the screaming goat!"),h=B("ssqg","Quote Generator","https://whimsical-banoffee-187bf5.netlify.app/",nn,"This is the first real app that I deployed. This was very early days in learning to code and I was in the deep end of the pool, treading water."),n.append(e,t),t.append(i),i.append(a,r,o,s,c,l,d,m,f,u,g,p,h),b=w().footer,v=y("div",{id:"footer-content-container"}),j=x({id:"img-footer-icon",src:S,alt:"Mad Muffin Man logo."}),O=y("p",{id:"footer-text"},"A Mad Muffin Man Design, © 2025"),b.append(v),v.append(j,O);var C=w(),N=C.imgBig,P=C.imgFullMMM,F=C.imgFullMMMReverse,en=C.btnMuffin,tn=C.btnMug,an=C.btnPhone;N.forEach((function(n){n.addEventListener("click",(function(){U(),"none"!==F.style.display?(L([F]),R([P])):(L([P]),R([F]))}))})),en.addEventListener("click",(function(){U(),L([en]),R([tn,an]),D()})),tn.addEventListener("click",(function(){U(),L([tn]),R([en,an]),D(),q()})),an.addEventListener("click",(function(){U(),L([an]),R([en,tn]),D(),q()}))}))})();