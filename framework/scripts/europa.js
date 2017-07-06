!function(e){"use strict";function t(e,t){return e===t||!!(16&e.compareDocumentPosition(t))}function n(e){e.setAttribute("aria-hidden",!0)}var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))},i=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.context,i=void 0===r?document:r,o=n.forceClose,a=void 0!==o&&o,c=n.closeSiblings,l=void 0!==c&&c,u=n.siblingsSelector,d=void 0===u?"[aria-controls][aria-expanded]":u;if(t){var s=document.getElementById(t.getAttribute("aria-controls"));if(s){var f=!0===a||"true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!f),s.setAttribute("aria-hidden",f),!0===l&&Array.prototype.slice.call(i.querySelectorAll(d)).filter(function(e){return e!==t}).forEach(function(t){e(t,{context:i,forceClose:!0})})}}};e.accordions=function(){function e(e){var t=document.getElementById(e.getAttribute("aria-controls"));e.setAttribute("aria-expanded","false"),t.setAttribute("aria-hidden","true")}function t(e){var t=document.getElementById(e.getAttribute("aria-controls"));e.setAttribute("tabindex",0),e.setAttribute("aria-expanded","true"),t.setAttribute("aria-hidden","false")}function n(n){"true"!==n.getAttribute("aria-expanded")?t(n):e(n)}function i(e,t){e[t].focus()}function o(e){n(e.currentTarget)}function a(e){var t=e.currentTarget,o=e.metaKey||e.altKey,a=t.parentNode.parentNode,c=r(h,a),l=[].indexOf.call(c,t);if(!o)switch(e.keyCode){case 13:case 32:n(t),e.preventDefault();break;case 37:case 38:i(c,0===l?c.length-1:l-1),e.preventDefault();break;case 39:case 40:i(c,l<c.length-1?l+1:0),e.preventDefault()}}function c(e){r(h,e).forEach(function(e){e.addEventListener("click",o),e.addEventListener("keydown",a)})}function l(e){r(h,e).forEach(function(e){e.removeEventListener("click",o),e.removeEventListener("keydown",a)})}function u(){E.length&&E.forEach(function(e){c(e)})}var d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=d.selector,f=void 0===s?".ecl-accordion":s,v=d.headerSelector,h=void 0===v?".ecl-accordion__header":v;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var E=r(f);return u(),{init:u,destroy:function(){E.forEach(function(e){l(e)})}}},e.dropdown=function(e){var n=Array.prototype.slice.call(document.querySelectorAll(e));document.addEventListener("click",function(r){n.forEach(function(n){if(!t(n,r.target)){var i=document.querySelector(e+" > [aria-expanded=true]"),o=document.querySelector(e+" > [aria-hidden=false]");o&&(i.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0))}})})},e.toggleExpandable=i,e.initExpandables=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[aria-controls][aria-expanded]",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;Array.prototype.slice.call(t.querySelectorAll(e)).forEach(function(e){return e.addEventListener("click",function(){return i(e,{context:t})})})},e.fileUploads=function(){function e(e,t){var n=t.split("\\").pop();e.innerHTML=n}function t(t){r(f,t.target.fileUploadContainer).forEach(function(n){e(n,t.target.value)})}function n(e){r(d,e).forEach(function(n){var r=n;r.addEventListener("change",t),r.container=e})}function i(e){r(d,e).forEach(function(e){e.removeEventListener("change",t)})}function o(){v.length&&v.forEach(function(e){n(e)})}var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=a.selector,l=void 0===c?".ecl-file-upload":c,u=a.inputSelector,d=void 0===u?".ecl-file-upload__input":u,s=a.valueSelector,f=void 0===s?".ecl-file-upload__value":s;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var v=r(l);return o(),{init:o,destroy:function(){v.forEach(function(e){i(e)})}}},e.initMessages=function(){Array.prototype.slice.call(document.getElementsByClassName("ecl-message__dismiss")).forEach(function(e){return e.addEventListener("click",function(){return n(e.parentElement)})})},e.megamenu=function(e){Array.prototype.slice.call(document.querySelectorAll(e)).forEach(function(e){Array.prototype.slice.call(e.querySelectorAll("[aria-controls][aria-expanded]")).forEach(function(t){return t.addEventListener("click",function(){i(t,{context:e,closeSiblings:!0})})})})},e.eclTables=function(){var e=document.getElementsByClassName("ecl-table");[].forEach.call(e,function(e){for(var t=[],n="",r=0,i=[],o=e.querySelectorAll("tbody tr"),a=e.querySelectorAll("thead tr th"),c=e.querySelectorAll("thead tr")[0].querySelectorAll("th").length-1,l=e.querySelectorAll("tbody tr")[0].querySelectorAll("td").length,u=-1,d=0;d<a.length;d+=1)a[d].getAttribute("colspan")&&(u=d),t[d]=[],t[d]=a[d].textContent;if(-1!==u){n=t.splice(u,1),r=u,i=e.querySelectorAll("th[colspan]")[0].getAttribute("colspan");for(var s=0;s<i;s+=1)t.splice(r+s,0,t[c+s]),t.splice(c+1+s,1)}[].forEach.call(o,function(e){for(var r=0;r<l;r+=1)if(""===t[r]||" "===t[r]?e.querySelectorAll("td")[r].setAttribute("class","ecl-table__heading"):e.querySelectorAll("td")[r].setAttribute("data-th",t[r]),-1!==u){var o=e.querySelectorAll("td")[u];o.setAttribute("class","ecl-table__group-label"),o.setAttribute("data-th-group",n);for(var a=1;a<i;a+=1)e.querySelectorAll("td")[u+a].setAttribute("class","ecl-table__group_element")}})})},e.tabs=function(){function e(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=r(s+" li",e.parentElement.parentElement),i=r(v,e.parentElement.parentElement);n.forEach(function(e){e.setAttribute("tabindex",-1),e.removeAttribute("aria-selected")}),i.forEach(function(e){e.setAttribute("aria-hidden","true")}),e.setAttribute("tabindex",0),e.setAttribute("aria-selected","true"),t&&e.focus(),document.getElementById(e.getAttribute("aria-controls")).removeAttribute("aria-hidden")}function t(t){e(t.currentTarget),t.preventDefault()}function n(t){var n=t.currentTarget,r=n.previousElementSibling||n.parentElement.lastElementChild,i=n.nextElementSibling||n.parentElement.firstElementChild;if(!t.metaKey&&!t.altKey)switch(t.keyCode){case 37:case 38:e(r),t.preventDefault();break;case 39:case 40:e(i),t.preventDefault()}}function i(e){r(E,e).forEach(function(e){e.addEventListener("click",t),e.addEventListener("keydown",n)})}function o(e){r(E,e).forEach(function(e){e.removeEventListener("click",t),e.removeEventListener("keydown",n)})}function a(){p.forEach(i)}var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=c.selector,u=void 0===l?".ecl-tabs":l,d=c.tablistSelector,s=void 0===d?".ecl-tabs__tablist":d,f=c.tabpanelSelector,v=void 0===f?".ecl-tabs__tabpanel":f,h=c.tabelementsSelector,E=void 0===h?s+" li":h;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var p=r(u);return a(),{init:a,destroy:function(){p.forEach(o)}}}}(this.ECL=this.ECL||{});
