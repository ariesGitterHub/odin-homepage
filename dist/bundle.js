(()=>{"use strict";var n={56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},o=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,m="".concat(s," ").concat(l);i[s]=l+1;var f=e(m),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)t[f].references++,t[f].updater(u);else{var g=a(u,r);r.byIndex=c,t.splice(c,0,{identifier:m,updater:g,references:1})}o.push(m)}return o}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=e(i[o]);t[c].references--}for(var d=r(n,a),s=0;s<i.length;s++){var l=e(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},159:(n,t,e)=>{e.d(t,{A:()=>g});var r=e(601),a=e.n(r),i=e(314),o=e.n(i),c=e(417),d=e.n(c),s=new URL(e(443),e.b),l=new URL(e(409),e.b),m=o()(a()),f=d()(s),u=d()(l);m.push([n.id,`/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'); */\n\n@font-face {\n  font-family: "Showcard Gothic";\n  src: url(${f}) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "Montserrat";\n  src: url(${u}) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* ***** TABLE OF CONTENTS *********************************** */\n\n/* ROOT/SHARED/GLOBAL */\n/* BTN CONTROLS */\n/* HEADER */\n/* --\x3e TITLE */\n/* --\x3e GIF */\n/* MESSAGES */\n/* MAIN BTN CONTAINER */\n/* ALL THE VARIOUS BOARDS/ZONES/GRIDS */\n/* --\x3e FULL-BOARDS */\n/* ----\x3e PLAYER NUMBER TEXT */\n/* ----\x3e PLACE SHIPS, DEPLOYMENT ZONE & TARGET ZONE */\n/* SPECIAL HOVER EFFECTS (for deployment and target zones) */\n/* MEDIA QUERIES */\n\n/* NOTE: USE <CTRL-F Key Item>, to find CSS that maintains the grids */\n\n/* ***** TABLE OF CONTENTS *********************************** */\n\n/* ROOT/SHARED/GLOBAL */\n:root {\n  /* Colors */\n  /* --circle-red: #cc3333; */\n  --circle-red: #bd4949;\n  --wrapper-red: #8b1818;\n  /* --bottom-red: #292222; */\n  --wrapper-pink: #e57676;\n  /* --explosion-gold: #ffd700; */\n  --explosion-gold: #edbd58;\n  --mug-blue: #898d9b;\n  --shadow-blue: #666a77;\n  --hoodie-blue: #484662;\n   --hoodie-blue-trans: #4846627c;\n  /* --bottom-blue: #1c1d1e; */\n  --desk-brown: #4d4a47;\n  /* --standard-black: #150701; */\n  --standard-black: #0b0806;\n  --standard-black-trans: #0b080600;\n  /* --standard-black-trans: #00000088; */\n  /* --standard-white: #d9c6ad; */\n  --standard-white: #d1c5b6;\n  --computer-grey: #808080;\n  --muffin-brown: #563f3f;\n  --nut-brown: #a38686;\n\n  --box-shadow: 0 5px 10px var(--standard-black);\n  --background-main: linear-gradient(\n    var(--linear-gradient-deg),\n    var(--standard-black),\n    var(--hoodie-blue)\n  );\n\n  --background-btn-hover: linear-gradient(\n    var(--linear-gradient-deg),\n    var(--standard-black),\n    var(--circle-red)\n  );\n\n  --font-title: "Showcard Gothic", sans-serif;\n  --font-text: "Montserrat", sans-serif;\n  --linear-gradient-deg: 5deg;\n  --scale-big: 1.125;\n  --scale-small: 0.9;\n\n  /* Initial Sizes */\n  --font-size-master: 14px;\n  --line-height-master: 1.25;\n  --font-size-title: 2rem;\n  --font-size-sub-title: 1.75rem;\n  --font-size-normal: 1rem;\n  --width-master: 90vw;\n  --margin-master: 0.25rem;\n  --padding-master: 0.25rem;\n  --gap-master: 0.75rem;\n  --border-radius-master: 1.75rem;\n\n  --content-div: 22rem;\n  --img-full-add-on: 4rem;\n  --img-title: 7rem;\n  --img-btn: 7rem;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* CSS Reset for h1 and h2 */\nh1,\nh2,\nh3,\np {\n  margin: 0; /* Remove default margin */\n  padding: 0; /* Remove default padding */\n  font-size: inherit; /* Inherit font size from parent */\n  font-weight: inherit; /* Inherit font weight from parent */\n  line-height: inherit; /* Inherit line height from parent */\n  text-align: inherit; /* Inherit text alignment from parent */\n  color: inherit; /* Inherit text color from parent */\n}\n\nhtml,\nbody {\n  /* height: 100%;\n  width: 100%; */\n  /* height: 100vh;\n  width: 100vw; */\n  /* Below, reduces base font size for mobile, a convenient way to backdoor size changes easily, reduce for mobile views */\n  background-color: var(--standard-black);\n  font-size: var(--font-size-master);\n  /* Improves text readability for mobile */\n  line-height: var(--line-height-master);\n}\n\nbody {\n/* margin: var(--margin-master); */\n/* padding: var(--padding-master); */\n}\n\n/* HEADER */\nheader {\n  height: fit-content;\n  /* width: 100%; */\n  /* width: 100vw; */\n  /* width: fit-content; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: center; */\n  margin: var(--margin-master);\n  padding: var(--padding-master);\n}\n\n#title-text {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  /* align-items: center; */\n  /* justify-content: center; */\n  background-color: var(--standard-black);\n  color: var(--circle-red);\n  font-family: var(--font-title);\n  font-size: var(--font-size-title);\n  margin: calc(var(--margin-master) + .25rem);\n  /* padding: 1rem; */\n  text-align: center;\n}\n\n#header-container {\n  height: fit-content;\n  /* width: 100vw; */\n  width: fit-content;\n    /* width: (--width-master); */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* padding: var(--padding-master); */\n}\n\n#header-content-container {\n  height: fit-content;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* margin: var(--margin-master); */\n\n  /* background: var(--background-main); */\n    background: var(--standard-black);\n   border-radius: var(--border-radius-master);\n\n}\n\n#content-img-big-div, #content-text-title-div  {\n  height: var(--content-div);\n  width: var(--content-div);\n   /* justify-content: start; */\n  background: none;\n      /* background: var(--background-main); */\n\n  /* border-radius: var(--border-radius-master); */\n\n  /* margin: 0 1rem 1rem 1rem; */\n  margin-top: var(--margin-master);\n  /* padding: 1rem; */\n  padding: var(--padding-master);\n}\n\n#content-img-big-div {\n display: flex;\n   flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n/* #content-text-title-div {\n  height: 21rem;\n  width: 21rem;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  border-radius: 2rem;\n  background: var(--background-main);\n  margin: 0 1rem 1rem 1rem;\n  padding: 1rem;\n} */\n\n.img-big {\n  height: auto;\n  width: calc(var(--content-div) + var(--img-full-add-on));\n  transform: translateX(0.275rem) translateY(-0.5rem);\n}\n\n/* Starts as display: none */\n#content-text-title-div {\n  display: none;\n    flex-direction: column;\n  align-items: center;\n  justify-content: center;\n    gap: var(--gap-master);\n  /* background: var(--background-main); */\n}\n\n#content-title-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* gap: var(--gap-master); */\n}\n\n#content-title {\n  color: var(--standard-white);\n  font-family: var(--font-title);\n  font-size: var(--font-size-sub-title);\n  /* margin-top: var(--margin-master); */\n}\n\n#content-title-img {\n  height: auto;\n  width: var(--img-title);\n}\n\n#content-text-div,\n#contact-info-div {\n  /* margin: auto; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#contact-info-div {\n  gap: var(--padding-master);\n}\n\n#content-text {\n  height: fit-content;\n  width: fit-content;\n  /* overflow: hidden; */\n  padding: 0 1rem 0 1rem;\n}\n\n.normal-text {\n  color: var(--standard-white);\n  font-family: var(--font-text);\n  font-size: var(--font-size-normal);\n}\n\n#header-btn-container {\n  width: 90vw;\n  display: flex;\n  flex-direction: row;\n  /* flex-wrap: wrap; */\n  align-items: center;\n  justify-content: center;\n    /* gap: var(--gap-master); */\n        gap: 1rem;\n    /* margin: var(--margin-master); */\n    /* margin-right: 1rem; */\n      padding: var(--padding-master);\n}\n\nbutton {\n  height: fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--explosion-gold);\n  /* border: var(--hoodie-blue) solid 0.5rem; */\n   border: var(--standard-black) solid 0.5rem;\n  border-radius: 50%;\n  font-family: var(--font-title);\n    padding: var(--padding-master);\n  transition: transform 0.5s ease;\n}\n\n/* Starts as display: none */\n#btn-muffin {\n  display: none;\n}\n\n#btn-mug {\n\n}\n\n#btn-phone {\n}\n\nbutton:hover {\n  background: var(--background-btn-hover);\n  border-color: var(--explosion-gold);\n  transform: scale(var(--scale-big));\n}\n\nbutton:active {\n  transform: scale(var(--scale-small));\n}\n\n.img-contact {\n  height: auto;\n  width: 2rem;\n  margin-bottom: var(--margin-master);\n}\n\n.img-small {\n  height: auto;\n  width: var(--img-btn);\n  margin: var(--margin-master);\n}\n\n#img-muffin {\n  transition: transform 0.5s ease;\n}\n\n#img-mug {\n  transform: translateX(0.375rem) translateY(0.05rem);\n}\n\n#img-phone {\n  transition: transform 0.5s ease;\n}\n\n#img-muffin:hover {\n  transform: rotate(-15deg);\n}\n\n#img-phone:hover {\n  transform: rotate(45deg);\n}\n\n/* MAIN */\nmain {\n\n  height: fit-content;\n  /* width: 100%; */\n  /* width: 100vw; */\n  /* width: fit-content; */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  margin: var(--margin-master);\n  padding: var(--padding-master);\n}\n\n#main-content-container {\n  height: fit-content;\n  width: fit-content;\n  display: flex;\n  flex-direction: row;\n    flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  /* margin: var(--margin-master); */\n\n  /* background: var(--background-main); */\n    background: var(--standard-black);\n   border-radius: var(--border-radius-master);\n\n}\n\n.card {\nheight: 30rem;\nwidth: 22rem;\ndisplay: flex;\n  flex-direction: column;\n    /* flex-wrap: wrap; */\n  align-items: center;\n  justify-content: start;\n/* background: var(--hoodie-blue-trans); */\nbackground: var(--background-main);\n  /* background: var(--background-btn-hover); */\n    border: var(--standard-white) solid 0.5rem;\nborder-radius: var(--border-radius-master);\npadding: .25rem;\n  }\n\n  .card-title{\n    color: var(--explosion-gold);\n    font-family: var(--font-title);\n    font-size: 1.75rem;\n   padding: .25rem;\n  }\n\n .card-screenshot{\n    height: 15rem;\n    width: 15rem;\n  background-color: var(--computer-grey);\n    /* border: var(--standard-black) solid 0.5rem; */\n    border-radius: var(--border-radius-master);\n       margin: .25rem;\n       object-fit: cover;\n       /* overflow: hidden; */\n    \n      }\n\n  .card-blurb {\n        height: fit-content;\n    width: fit-content;\n    color: var(--standard-white);\n    font-family: var(--font-text);\n    font-size: 1rem;\n           margin: 1rem;\n  }\n\n  .card:hover {\n      background: var(--background-btn-hover);\n  border-color: var(--explosion-gold);\n  transform: scale(1.05);\n  }\n\n/* FOOTER */\nfooter {\n}\n\n/* MEDIA QUERIES */\n@media (min-width: 400px) {\n  :root {\n  --line-height-master: 1.5;\n    --font-size-title: 2.5rem;\n}\n}\n\n@media (min-width: 450px) {\n  #header-content-container {\n        flex-direction: row;\n\n  }\n\n  #header-btn-container {\n      width: fit-content;\n    flex-direction: column;\n    margin-right: 1rem;\n  }\n}\n\n@media (min-width: 500px) {\n  :root {\n  --font-size-master: 16px;\n  /* --line-height-master: 1.25; */\n  /* --font-size-title: 3rem; */\n  /* --font-size-sub-title: 2rem; */\n  /* --font-size-normal: 1.25rem; */\n  /* --width-master: 85vw; */\n  /* --margin-master: 0.25rem; */\n  /* --padding-master: 0.25rem; */\n  /* --gap-master: 0.75rem; */\n  /* --border-radius-master: 2rem; */\n  }\n   \n  /* #header-container {\n    flex-direction: row;\n  } */\n\n  /* #header-content-container {\n        flex-direction: row;\n\n  }\n\n  #header-btn-container {\n      width: fit-content;\n    flex-direction: column;\n    margin-right: 1rem;\n  } */\n}\n@media (min-width: 800px) {\n    :root {\n  --font-size-master: 18px;\n  /* --line-height-master: 1.25; */\n  /* --font-size-title: 3rem; */\n  /* --font-size-sub-title: 2rem; */\n  /* --font-size-normal: 1.25rem; */\n  /* --width-master: 85vw; */\n  /* --margin-master: 0.25rem; */\n  /* --padding-master: 0.25rem; */\n  /* --gap-master: 0.75rem; */\n  /* --border-radius-master: 2rem; */\n  }\n}\n`,""]);const g=m},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},409:(n,t,e)=>{n.exports=e.p+"cfbf0da06d33097e6d0a.ttf"},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},443:(n,t,e)=>{n.exports=e.p+"464936a8971cef0c4878.ttf"},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var r=e(72),a=e.n(r),i=e(825),o=e.n(i),c=e(659),d=e.n(c),s=e(56),l=e.n(s),m=e(540),f=e.n(m),u=e(113),g=e.n(u),p=e(159),h={};function b(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,a,i,o,c=[],d=!0,s=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;d=!1}else for(;!(d=(r=i.call(e)).done)&&(c.push(r.value),c.length!==t);d=!0);}catch(n){s=!0,a=n}finally{try{if(!d&&null!=e.return&&(o=e.return(),Object(o)!==o))return}finally{if(s)throw a}}return c}}(n,t)||function(n,t){if(n){if("string"==typeof n)return v(n,t);var e={}.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?v(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}function y(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=document.createElement(n),a=0,i=Object.entries(t);a<i.length;a++){var o=b(i[a],2),c=o[0],d=o[1];"class"===c?r.className=d:(c.startsWith("data-"),r.setAttribute(c,d))}return e&&(r.innerText=e),r}function w(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=document.createElement("img"),e=0,r=Object.entries(n);e<r.length;e++){var a=b(r[e],2),i=a[0],o=a[1];"id"===i?t.id=o:"src"===i?t.src=o:"alt"===i?t.alt=o:(i.startsWith("data-"),t.setAttribute(i,o))}return t}function x(){return{header:document.querySelector("header"),main:document.querySelector("main"),footer:document.querySelector("footer"),headerContentContainer:document.querySelector("#header-content-container"),contentImgBigDiv:document.querySelector("#content-img-big-div"),contentTextTitleDiv:document.querySelector("#content-text-title-div"),contentTitle:document.querySelector("#content-title"),contentTitleImg:document.querySelector("#content-title-img"),contentTextDiv:document.querySelector("#content-text-div"),contentText:document.querySelector("#content-text"),contactInfoDiv:document.querySelector("#contact-info-div"),contactEmail:document.querySelector("#contact-email"),contactPhone:document.querySelector("#contact-phone"),btnMuffin:document.querySelector("#btn-muffin"),btnMug:document.querySelector("#btn-mug"),btnPhone:document.querySelector("#btn-phone")}}h.styleTagTransform=g(),h.setAttributes=l(),h.insert=d().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=f(),a()(p.A,h),p.A&&p.A.locals&&p.A.locals;const T=e.p+"images/7c528901163c2dd1d33a.svg",S=e.p+"images/c710ca71073b88521d7c.svg",E=e.p+"images/f523bbdc7ce6dbbfdf54.svg",k=e.p+"images/71ca2b6d2780876ec73b.svg",A=e.p+"images/c7d9a41464e653ec35ef.svg",I=e.p+"images/39db2ffb5fa4e59af9fd.svg",M=e.p+"images/cf0b16b763fda67ab2ed.svg",O=e.p+"images/c069eaf45a442137be40.svg";function j(n){(Array.isArray(n)?n:Array.from(n)).forEach((function(n){n.style.display="flex"}))}function C(n){(Array.isArray(n)?n:Array.from(n)).forEach((function(n){n.style.display="none"}))}function z(){var n=x(),t=n.headerContentContainer,e=n.contentImgBigDiv,r=n.contentTextTitleDiv,a=n.btnMuffin;"none"!==a.style.display?(C([e]),j([r]),t.style.background="var(--background-main)"):"none"===a.style.display&&(C([r]),j([e]),t.style.background="var(--standard-black)")}function R(n,t){n.innerText=t}function L(){var n=x(),t=n.contentTitle,e=n.contentTitleImg,r=n.contentTextDiv,a=n.contentText,i=n.contactInfoDiv,o=n.contactEmail,c=n.contactPhone,d=n.btnMuffin,s=n.btnMug,l=n.btnPhone;"none"!==d.style.display&&"none"===s.style.display&&"none"!==l.style.display?(C([i]),j([r]),R(t,"ABOUT ME"),e.src=M,R(a,"Hi, I'm a giant muffin-headed abomination who enjoys the challenge of learning to code. Below you will find many of the projects that I've had the pleasure of creating while on my coding journey. Enjoy!"),a.style.textAlign="left"):"none"!==d.style.display&&"none"!==s.style.display&&"none"===l.style.display?(C([r]),j([i]),R(t,"CONTACT"),e.src=O,R(o,"madmuffinmandesign @gmail.com"),o.style.textAlign="center",R(c,"1-555-8MUFFIN")):function(){var n=x(),t=n.contentTextTitle,e=n.contentText;t.innerText="",e.innerText=""}()}function N(n,t,e,r,a){return i=y("div",{id:"card-".concat(n),class:"card"}),o=y("a",{id:"title-".concat(n),class:"card-title",href:e},t),c=w({id:"img-screenshot-".concat(n),src:r,alt:"Screenshot for ".concat(t," webpage."),class:"card-screenshot"}),d=y("p",{id:"blurb-".concat(n),class:"card-blurb"},a),i.append(o,c,d),i;var i,o,c,d}const D=e.p+"images/7424747268fe175df940.png",P=e.p+"images/ffceb4a7634860526e07.png",q=e.p+"images/7b1a987527b4bc0ab955.png",B=e.p+"images/00b60a4fe52c91d68c36.png",U=e.p+"images/bed34fc8c50e1295d7fe.png",F=e.p+"images/1603a7b4768f38a36e17.png",H=e.p+"images/f3df687b770dfdfa5c0d.png",G=e.p+"images/20b640fb97d501159708.png";document.addEventListener("DOMContentLoaded",(function(){var n,t,e,r,a,i,o,c,d,s,l;!function(){var n=x().header,t=y("div",{id:"header-container"}),e=y("div",{id:"header-content-container"}),r=y("div",{id:"header-btn-container"}),a=y("h1",{id:"title-text",class:"special-text"},"The Mad Muffin Man"),i=y("div",{id:"content-img-big-div"}),o=y("div",{id:"content-text-title-div"}),c=y("div",{id:"content-title-div"}),d=y("h2",{id:"content-title",class:"special-text"}),s=w({id:"content-title-img",src:"",alt:""}),l=y("p",{id:"content-text-div"}),m=y("p",{id:"content-text",class:"normal-text"}),f=y("div",{id:"contact-info-div"}),u=w({id:"img-contact-email",src:A,alt:"Email icon",class:"img-contact"}),g=y("p",{id:"contact-email",class:"normal-text"}),p=w({id:"img-contact-phone",src:I,alt:"Phone icon",class:"img-contact"}),h=y("p",{id:"contact-phone",class:"normal-text"}),b=y("button",{id:"btn-muffin",class:"btn"}),v=y("button",{id:"btn-mug",class:"btn"}),M=y("button",{id:"btn-phone",class:"btn"}),O=w({id:"img-full-MMM",src:T,alt:"Cartoonish image of a computer programmer with a giant muffin for head.",class:"img-big"}),j=w({id:"img-muffin",src:S,alt:"Cartoonish image of a deranged looking muffin.",class:"img-small"}),C=w({id:"img-mug",src:E,alt:"Cartoonish image of steaming mug of coffee labeled with the letters 'M3'.",class:"img-small"}),z=w({id:"img-phone",src:k,alt:"Cartoonish image of smart phone.",class:"img-small"});n.append(a,t),t.append(e),e.append(i,o,r),i.append(O),o.append(c,l,f),c.append(s,d),l.append(m),f.append(u,g,p,h),r.append(b,v,M),b.append(j),v.append(C),M.append(z)}(),n=x().main,t=y("div",{id:"main-container"}),e=y("div",{id:"main-content-container"}),r=N("battleship","Battleship: WWII","https://ariesgitterhub.github.io/odin-battleship/",D,"This is my own variant of the famous electronic board game, Battleship. This code was my first foray into Test Driven Development (TDD)."),a=N("weather","Weathervane","https://ariesgitterhub.github.io/odin-weather-app/",P,"My first use of an API set up, this weather app utilizes worldwide weather data from the Visual Crossing API."),i=N("todo","Task King","https://ariesgitterhub.github.io/odin-todo-list/",q,"This to-do list app incorporates the uses of class generated objects, localStorage, and the date-fns library."),o=N("restaurant","The Hidden Garden","https://ariesgitterhub.github.io/odin-restaurant-page/",B,"This restaurant page app for a fictional bookstore cafe was my introduction to webpack, npm, and ES6 modules."),c=N("tictactoe","Tic-Tac-Zodiac","https://ariesgitterhub.github.io/odin-tic-tac-toe/",U,"A simple game that served as my intro to factory functions, closures, and new ideas on building code from the inside out."),d=N("library","MyReadList","https://ariesgitterhub.github.io/odin-book-library/",F,"This library app opened my brain up the world of the object design pattern and the use of the data-attribute."),s=N("dashboard","myDashboard","https://ariesgitterhub.github.io/odin-admin-dashboard/",H,"This project, showing a a mock-up of an admin-dashboard, highlights early lessons on the use of flex and grid layouts."),l=N("signup","Lecture Event","https://ariesgitterhub.github.io/odin-sign-up-form/",G,"This mock-up form for a fictional lecture event employs form field basics and controls, as well as front-end form validation."),n.append(t),t.append(e),e.append(r,a,i,o,c,d,s,l);var m=x(),f=m.btnMuffin,u=m.btnMug,g=m.btnPhone;f.addEventListener("click",(function(){C([f]),j([u,g]),z()})),u.addEventListener("click",(function(){C([u]),j([f,g]),z(),L()})),g.addEventListener("click",(function(){C([g]),j([f,u]),z(),L()}))}))})();