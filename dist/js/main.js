!function(e){function t(t){for(var o,i,l=t[0],s=t[1],c=t[2],u=0,f=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(d&&d(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;a.push([9,1]),n()}([,,,,,,function(e,t){var n,o=document.getElementsByClassName("section-video")[0],r=document.getElementsByTagName("video")[0];({renderVideoPlayButton:function(){o.contains(r)&&(this.formatVideoPlayButton(),r.classList.add("has-media-controls-hidden"),(n=document.getElementsByClassName("video-overlay-play-button")[0]).addEventListener("click",this.hideVideoPlayButton))},formatVideoPlayButton:function(){o.insertAdjacentHTML("beforeend",'                <svg class="video-overlay-play-button" width="306" height="306" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg">                  <path d="M86 226.841V79.8666C86 70.9874 86 66.5479 88.8978 64.7975C91.7956 63.0471 95.7252 65.1131 103.584 69.2452L248.979 145.688C258.164 150.517 262.756 152.931 262.696 156.622C262.637 160.312 257.968 162.577 248.632 167.106L103.238 237.638C95.4993 241.392 91.6302 243.269 88.8151 241.506C86 239.742 86 235.442 86 226.841Z" fill="#BCE2C1" fill-opacity="0.8"/>                  <circle cx="153" cy="153" r="149" stroke="#BCE2C1" stroke-width="8"/>                </svg>            ')},hideVideoPlayButton:function(){r.play(),n.classList.add("is-hidden"),r.classList.remove("has-media-controls-hidden"),r.setAttribute("controls","controls")}}).renderVideoPlayButton()},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var o=n(3),r=n.n(o);r()(window).on("load",(function(){r()(".loader").fadeOut("slow")}));var a=n(4),i=n.n(a);n(5);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}new i.a({});var s=r()(".header").height(),c=r()(window).width();function d(e){switch(!0){case e<991:0==r()(".header__menu-contact-mobile .header__menu-links").length&&(r()(".header__menu-contact-mobile").append(r()(".header__menu-links")),console.log("1"));break;case e>991:0==r()(".header__menu-contact .header__menu-links").length&&(r()(".header__menu-contact").append(r()(".header__menu-links")),console.log("2"))}}r()(".header__burger").on("click",(function(){r()(".header").toggleClass("open"),r()("body, html").toggleClass("overflow-y-hidden")})),r()("[data-fancybox]").fancybox({scrolling:"hidden",helpers:{overlay:{locked:!0}},autoFocus:!1}),r()("a.scroll").on("click",(function(){r()(".header").toggleClass("open"),r()("body, html").toggleClass("overflow-y-hidden");var e=r()(this);return r()("html, body").animate({scrollTop:r()(e.attr("href")).offset().top-s+"px"},{duration:800}),!1})),r()(window).on("scroll",(function(){r()(window).scrollTop()>1?(r()(".header").addClass("js-fixed"),r()("body").addClass("js-fixed")):(r()(".header").removeClass("js-fixed"),r()("body").removeClass("js-fixed"))})),r()(window).on("resize",(function(){d(r()(window).width())})),d(c),r()(".lang__list-item").each((function(e){c>600||0==e&&r()(this).addClass("active")})),r()(".lang__list-item").on("click",(function(){c>600?r()(".lang__list-item").show():(r()(".lang__list-item").removeClass("lang__list-item--active"),r()(this).addClass("lang__list-item--active"))}));var u,f=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add("element-show")}))}),{threshold:[.5]}),h=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}(document.querySelectorAll(".element-animation"));try{for(h.s();!(u=h.n()).done;){var p=u.value;f.observe(p)}}catch(e){h.e(e)}finally{h.f()}n(6);var y=n(16),m=n(11),v=n(12),g=n(13),w=n(14),b=n(15);y.a.use([m.a,v.a,g.a,w.a,b.a]);new y.a(".europen-congress__slider",{slidesPerView:1,effect:"fade",lazy:!0,fadeEffect:{crossFade:!0},watchOverflow:!0,pagination:{el:".swiper-pagination",clickable:!0},grabCursor:!0}),n(7),n(8)}]);