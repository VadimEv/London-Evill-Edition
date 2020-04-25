!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SwupScriptsPlugin=t():e.SwupScriptsPlugin=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,o=(r=n(1))&&r.__esModule?r:{default:r};e.exports=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=(r=n(2))&&r.__esModule?r:{default:r},u=function(e){return Array.prototype.slice.call(e)},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.name="ScriptsPlugin",n.runScripts=function(){var e=n.options.head&&n.options.body?document:n.options.head?document.head:document.body,t=u(e.querySelectorAll("script:not([data-swup-ignore-script])"));t.forEach(function(e){return n.runScript(e)}),n.swup.log("Executed "+t.length+" scripts.")},n.runScript=function(e){var t=document.createElement("script"),n=!0,r=!1,o=void 0;try{for(var i,a=u(e.attributes)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var s=i.value,l=s.name,c=s.value;t.setAttribute(l,c)}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return t.textContent=e.textContent,t.setAttribute("async","false"),e.replaceWith(t),t},n.options=o({},{head:!0,body:!0},e),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),i(t,[{key:"mount",value:function(){this.swup.on("contentReplaced",this.runScripts)}},{key:"unmount",value:function(){this.swup.off("contentReplaced",this.runScripts)}}]),t}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isSwupPlugin=!0}return r(e,[{key:"mount",value:function(){}},{key:"unmount",value:function(){}},{key:"_beforeMount",value:function(){}},{key:"_afterUnmount",value:function(){}}]),e}();t.default=o}])}),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SwupHeadPlugin=t():e.SwupHeadPlugin=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,o=(r=n(1))&&r.__esModule?r:{default:r};e.exports=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2);function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.name="HeadPlugin",r.getHeadAndReplace=function(){var e=r.getHeadChildren(),t=r.getNextHeadChildren();r.replaceTags(e,t)},r.getHeadChildren=function(){return document.head.children},r.getNextHeadChildren=function(){var e=r.swup.cache.getCurrentPage().originalContent.replace("<head",'<div id="swupHead"').replace("</head>","</div>"),t=document.createElement("div");t.innerHTML=e;var n=t.querySelector("#swupHead").children;return t.innerHTML="",t=null,n},r.replaceTags=function(e,t){var n=document.head,o=Boolean(document.querySelector("[data-swup-theme]")),i=r.getTagsToAdd(e,t,o),a=r.getTagsToRemove(e,t,o);a.reverse().forEach(function(e){n.removeChild(e.tag)}),i.forEach(function(e){n.insertBefore(e.tag,n.children[e.index])}),r.swup.log("Removed "+a.length+" / added "+i.length+" tags in head")},r.compareTags=function(e,t){return e.outerHTML===t.outerHTML},r.getTagsToRemove=function(e,t){for(var n=[],o=0;o<e.length;o++){for(var i=null,a=0;a<t.length;a++)if(r.compareTags(e[o],t[a])){i=a;break}null==i&&null===e[o].getAttribute("data-swup-theme")&&n.push({tag:e[o]})}return n},r.getTagsToAdd=function(e,t,n){for(var o=[],i=0;i<t.length;i++){for(var a=null,u=0;u<e.length;u++)if(r.compareTags(e[u],t[i])){a=u;break}null==a&&o.push({index:n?i+1:i,tag:t[i]})}return o},a(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,((r=i)&&r.__esModule?r:{default:r}).default),o(t,[{key:"mount",value:function(){this.swup.on("contentReplaced",this.getHeadAndReplace)}},{key:"unmount",value:function(){this.swup.off("contentReplaced",this.getHeadAndReplace)}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isSwupPlugin=!0}return r(e,[{key:"mount",value:function(){}},{key:"unmount",value:function(){}},{key:"_beforeMount",value:function(){}},{key:"_afterUnmount",value:function(){}}]),e}();t.default=o}])}),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Swup=t():e.Swup=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.markSwupElements=t.getCurrentUrl=t.transitionEnd=t.fetch=t.getDataFromHtml=t.createHistoryRecord=t.classify=void 0;var r=f(n(8)),o=f(n(9)),i=f(n(10)),a=f(n(11)),u=f(n(12)),s=f(n(13)),l=f(n(14)),c=f(n(15));function f(e){return e&&e.__esModule?e:{default:e}}t.classify=r.default,t.createHistoryRecord=o.default,t.getDataFromHtml=i.default,t.fetch=a.default,t.transitionEnd=u.default,t.getCurrentUrl=s.default,t.markSwupElements=l.default,t.Link=c.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.query=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"!=typeof e?e:t.querySelector(e)},t.queryAll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"!=typeof e?e:Array.prototype.slice.call(t.querySelectorAll(e))}},function(e,t,n){"use strict";var r,o=(r=n(3))&&r.__esModule?r:{default:r};e.exports=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=y(n(4)),a=y(n(6)),u=y(n(7)),s=y(n(16)),l=y(n(17)),c=y(n(18)),f=y(n(19)),d=y(n(20)),p=y(n(21)),h=y(n(22)),g=n(23),m=n(1),v=n(0);function y(e){return e&&e.__esModule?e:{default:e}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',linkSelector:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',cache:!0,containers:["#swup"],requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},plugins:[],skipPopStateHandling:function(e){return!(e.state&&"swup"===e.state.source)}},o=r({},n,t);this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],openPageInNewTab:[],pageLoaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],serverError:[],transitionStart:[],transitionEnd:[],willReplaceContent:[]},this.scrollToElement=null,this.preloadPromise=null,this.options=o,this.plugins=[],this.transition={},this.delegatedListeners={},this.cache=new a.default,this.cache.swup=this,this.loadPage=u.default,this.renderPage=s.default,this.triggerEvent=l.default,this.on=c.default,this.off=f.default,this.updateTransition=d.default,this.getAnimationPromises=p.default,this.getPageData=h.default,this.log=function(){},this.use=g.use,this.unuse=g.unuse,this.findPlugin=g.findPlugin,this.enable()}return o(e,[{key:"enable",value:function(){var e=this;if("undefined"!=typeof Promise){this.delegatedListeners.click=(0,i.default)(document,this.options.linkSelector,"click",this.linkClickHandler.bind(this)),window.addEventListener("popstate",this.popStateHandler.bind(this));var t=(0,v.getDataFromHtml)(document.documentElement.outerHTML,this.options.containers);t.url=t.responseURL=(0,v.getCurrentUrl)(),this.options.cache&&this.cache.cacheUrl(t),(0,v.markSwupElements)(document.documentElement,this.options.containers),this.options.plugins.forEach(function(t){e.use(t)}),window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href),this.triggerEvent("enabled"),document.documentElement.classList.add("swup-enabled"),this.triggerEvent("pageView")}else console.warn("Promise is not supported")}},{key:"destroy",value:function(){var e=this;this.delegatedListeners.click.destroy(),this.delegatedListeners.mouseover.destroy(),window.removeEventListener("popstate",this.popStateHandler.bind(this)),this.cache.empty(),this.options.plugins.forEach(function(t){e.unuse(t)}),(0,m.queryAll)("[data-swup]").forEach(function(e){e.removeAttribute("data-swup")}),this.off(),this.triggerEvent("disabled"),document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function(e){if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)this.triggerEvent("openPageInNewTab",e);else if(0===e.button){this.triggerEvent("clickLink",e),e.preventDefault();var t=new v.Link(e.delegateTarget);if(t.getAddress()==(0,v.getCurrentUrl)()||""==t.getAddress())""!=t.getHash()?(this.triggerEvent("samePageWithHash",e),null!=document.querySelector(t.getHash())?history.replaceState({url:t.getAddress()+t.getHash(),random:Math.random(),source:"swup"},document.title,t.getAddress()+t.getHash()):console.warn("Element for offset not found ("+t.getHash()+")")):this.triggerEvent("samePage",e);else{""!=t.getHash()&&(this.scrollToElement=t.getHash());var n=e.delegateTarget.getAttribute("data-swup-transition");this.loadPage({url:t.getAddress(),customTransition:n},!1)}}}},{key:"popStateHandler",value:function(e){if(!this.options.skipPopStateHandling(e)){var t=new v.Link(e.state?e.state.url:window.location.pathname);""!==t.getHash()?this.scrollToElement=t.getHash():e.preventDefault(),this.triggerEvent("popState",e),this.loadPage({url:t.getAddress()},e)}}}]),e}();t.default=b},function(e,t,n){var r=n(5);function o(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,i){var a=o.apply(this,arguments);return e.addEventListener(n,a,i),{destroy:function(){e.removeEventListener(n,a,i)}}}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=t.Cache=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pages={},this.last=null}return r(e,[{key:"cacheUrl",value:function(e){e.url in this.pages==0&&(this.pages[e.url]=e),this.last=this.pages[e.url],this.swup.log("Cache ("+Object.keys(this.pages).length+")",this.pages)}},{key:"getPage",value:function(e){return this.pages[e]}},{key:"getCurrentPage",value:function(){return this.getPage(window.location.pathname+window.location.search)}},{key:"exists",value:function(e){return e in this.pages}},{key:"empty",value:function(){this.pages={},this.last=null,this.swup.log("Cache cleared")}},{key:"remove",value:function(e){delete this.pages[e]}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0);t.default=function(e,t){var n=this,i=[],a=void 0;this.triggerEvent("transitionStart",t),null!=e.customTransition?(this.updateTransition(window.location.pathname,e.url,e.customTransition),document.documentElement.classList.add("to-"+(0,o.classify)(e.customTransition))):this.updateTransition(window.location.pathname,e.url),!t||this.options.animateHistoryBrowsing?function(){if(n.triggerEvent("animationOutStart"),document.documentElement.classList.add("is-changing"),document.documentElement.classList.add("is-leaving"),document.documentElement.classList.add("is-animating"),t&&document.documentElement.classList.add("is-popstate"),document.documentElement.classList.add("to-"+(0,o.classify)(e.url)),i=n.getAnimationPromises("out"),Promise.all(i).then(function(){n.triggerEvent("animationOutDone")}),!t){var r;r=null!=n.scrollToElement?e.url+n.scrollToElement:e.url,(0,o.createHistoryRecord)(r)}}():this.triggerEvent("animationSkipped"),this.cache.exists(e.url)?(a=new Promise(function(e){e()}),this.triggerEvent("pageRetrievedFromCache")):a=this.preloadPromise&&this.preloadPromise.route==e.url?this.preloadPromise:new Promise(function(t,i){(0,o.fetch)(r({},e,{headers:n.options.requestHeaders}),function(r){if(500===r.status)return n.triggerEvent("serverError"),void i(e.url);var o=n.getPageData(r);null!=o?(o.url=e.url,n.cache.cacheUrl(o),n.triggerEvent("pageLoaded"),t()):i(e.url)})}),Promise.all(i.concat([a])).then(function(){n.renderPage(n.cache.getPage(e.url),t),n.preloadPromise=null}).catch(function(e){n.options.skipPopStateHandling=function(){return window.location=e,!0},window.history.go(-1)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return"/"===t[0]&&(t=t.splice(1)),""===t&&(t="homepage"),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){window.history.pushState({url:e||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,e||window.location.href.split(window.location.hostname)[1])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(1);t.default=function(e,t){var n=e.replace("<body",'<div id="swupBody"').replace("</body>","</div>"),i=document.createElement("div");i.innerHTML=n;for(var a=[],u=function(e){if(null==i.querySelector(t[e]))return{v:null};(0,o.queryAll)(t[e]).forEach(function(n,r){(0,o.queryAll)(t[e],i)[r].setAttribute("data-swup",a.length),a.push((0,o.queryAll)(t[e],i)[r].outerHTML)})},s=0;s<t.length;s++){var l=u(s);if("object"===(void 0===l?"undefined":r(l)))return l.v}var c={title:i.querySelector("title").innerText,pageClass:i.querySelector("#swupBody").className,originalContent:e,blocks:a};return i.innerHTML="",i=null,c}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={url:window.location.pathname+window.location.search,method:"GET",data:null,headers:{}},o=r({},n,e),i=new XMLHttpRequest;return i.onreadystatechange=function(){4===i.readyState&&(i.status,t(i))},i.open(o.method,o.url,!0),Object.keys(o.headers).forEach(function(e){i.setRequestHeader(e,o.headers[e])}),i.send(o.data),i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.createElement("div"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return t[n];return!1}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return window.location.pathname+window.location.search}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(e,t){for(var n=0,o=function(o){null==e.querySelector(t[o])?console.warn("Element "+t[o]+" is not in current page."):(0,r.queryAll)(t[o]).forEach(function(i,a){(0,r.queryAll)(t[o],e)[a].setAttribute("data-swup",n),n++})},i=0;i<t.length;i++)o(i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t instanceof Element||t instanceof SVGElement?this.link=t:(this.link=document.createElement("a"),this.link.href=t)}return r(e,[{key:"getPath",value:function(){var e=this.link.pathname;return"/"!==e[0]&&(e="/"+e),e}},{key:"getAddress",value:function(){var e=this.link.pathname+this.link.search;return this.link.getAttribute("xlink:href")&&(e=this.link.getAttribute("xlink:href")),"/"!==e[0]&&(e="/"+e),e}},{key:"getHash",value:function(){return this.link.hash}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=(n(1),n(0));t.default=function(e,t){var n=this;document.documentElement.classList.remove("is-leaving");var i=new o.Link(e.responseURL);window.location.pathname!==i.getPath()&&(window.history.replaceState({url:i.getPath(),random:Math.random(),source:"swup"},document.title,i.getPath()),this.cache.cacheUrl(r({},e,{url:i.getPath()}))),t&&!this.options.animateHistoryBrowsing||document.documentElement.classList.add("is-rendering"),this.triggerEvent("willReplaceContent",t);for(var a=0;a<e.blocks.length;a++)document.body.querySelector('[data-swup="'+a+'"]').outerHTML=e.blocks[a];document.title=e.title,this.triggerEvent("contentReplaced",t),this.triggerEvent("pageView",t),this.options.cache||this.cache.empty(),setTimeout(function(){t&&!n.options.animateHistoryBrowsing||(n.triggerEvent("animationInStart"),document.documentElement.classList.remove("is-animating"))},10);var u=this.getAnimationPromises("in");!t||this.options.animateHistoryBrowsing?Promise.all(u).then(function(){n.triggerEvent("animationInDone"),n.triggerEvent("transitionEnd",t),document.documentElement.className.split(" ").forEach(function(e){(new RegExp("^to-").test(e)||"is-changing"===e||"is-rendering"===e||"is-popstate"===e)&&document.documentElement.classList.remove(e)})}):this.triggerEvent("transitionEnd",t),this.scrollToElement=null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){this._handlers[e].forEach(function(e){try{e(t)}catch(e){console.error(e)}});var n=new CustomEvent("swup:"+e,{detail:e});document.dispatchEvent(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){this._handlers[e]?this._handlers[e].push(t):console.warn("Unsupported event "+e+".")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=this;if(null!=e)if(null!=t)if(this._handlers[e]&&this._handlers[e].filter(function(e){return e===t}).length){var r=this._handlers[e].filter(function(e){return e===t})[0],o=this._handlers[e].indexOf(r);o>-1&&this._handlers[e].splice(o,1)}else console.warn("Handler for event '"+e+"' no found.");else this._handlers[e]=[];else Object.keys(this._handlers).forEach(function(e){n._handlers[e]=[]})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){this.transition={from:e,to:t,custom:n}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0);t.default=function(){var e=[];return(0,r.queryAll)(this.options.animationSelector).forEach(function(t){var n=new Promise(function(e){t.addEventListener((0,o.transitionEnd)(),function(n){t==n.target&&e()})});e.push(n)}),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){var t=e.responseText,n=(0,r.getDataFromHtml)(t,this.options.containers);return n?(n.responseURL=e.responseURL?e.responseURL:window.location.href,n):(console.warn("Received page is invalid."),null)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.use=function(e){if(e.isSwupPlugin)return this.plugins.push(e),e.swup=this,"function"==typeof e._beforeMount&&e._beforeMount(),e.mount(),this.plugins;console.warn("Not swup plugin instance "+e+".")},t.unuse=function(e){var t=void 0;if(t="string"==typeof e?this.plugins.find(function(t){return e===t.name}):e){t.unmount(),"function"==typeof t._afterUnmount&&t._afterUnmount();var n=this.plugins.indexOf(t);return this.plugins.splice(n,1),this.plugins}console.warn("No such plugin.")},t.findPlugin=function(e){return this.plugins.find(function(t){return e===t.name})}}])});
//# sourceMappingURL=swup-min.js.map