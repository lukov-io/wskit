var t=function(){const t=t=>{const n=t.querySelectorAll("[data-accordion-item]");a(t),n.forEach((a=>{a.addEventListener("click",(a=>e(a,t)))}))},e=(t,e)=>{const n=t.currentTarget,i=e.dataset.itemActiveClass||"active";"single"!==(e.dataset.accordion||"single")||n.classList.contains(i)||a(e,i),n.classList.toggle(i)},a=(t,e="active")=>{t.querySelectorAll(`.${e}[data-accordion-item]`).forEach((t=>{t.classList.remove(e)}))};return{run:()=>{document.querySelectorAll("[data-accordion]").forEach((e=>{t(e)}))}}}(),e=function(){const t=(t,e,a)=>{let n="";if(a){const t=new Date;t.setTime(t.getTime()+24*a*60*60*1e3),n="; expires="+t.toUTCString()}document.cookie=`${t}=${e||""}${n}; path=/`};return{set:t,get:t=>{const e=`${t}=`,a=document.cookie.split(";");for(let t of a)if(t=t.trim(),t.startsWith(e))return t.substring(e.length);return null},remove:e=>{t(e,"",-1)}}}(),a=function(){const t=t=>{const a=t.querySelectorAll("[data-tab-button]"),n=t.querySelectorAll("[data-tab-content]"),i=t.dataset.activeButtonClass||"active";t.dataset.tabs;const o=t.dataset.activeContentClass||"active";a.forEach((t=>{t.addEventListener("click",(()=>{e(t,n,i,o)}))})),a.length>0&&a[0].click()},e=(t,e,a,n)=>{const i=t.dataset.tabButton;t.parentElement.querySelectorAll("[data-tab-button]").forEach((t=>{t.classList.remove(a)})),e.forEach((t=>{"active"!==n?t.classList.remove(n):t.style.display="none"})),t.classList.add(a);const o=[...e].find((t=>t.dataset.tabContent===i));o&&("active"!==n?o.classList.add(n):o.style.display="block")};return{run:()=>{document.querySelectorAll("[data-tabs]").forEach(t)}}}(),n=function(){const t=t=>{const a=t.querySelector("[data-read-more-toggler]");a&&(a.innerHTML=a.dataset.moreText||"Read More",a.addEventListener("click",(()=>e(t,a))))},e=(t,e)=>{const a=t.dataset.readMoreActiveClass||"active";t.classList.toggle(a),e.innerHTML=t.classList.contains(a)?e.dataset.lessText||"Read Less":e.dataset.moreText||"Read More"};return{run:()=>{document.querySelectorAll("[data-read-more]").forEach(t)}}}(),i={smallMobile:function(){return window.matchMedia("(max-width: 320px)").matches},smallMobileLandscape:function(){return window.matchMedia("(max-height: 320px) and (orientation: landscape)").matches},smallMobilePortrait:function(){return window.matchMedia("(max-width: 320px) and (orientation: portrait)").matches},mobile:function(){return window.matchMedia("(max-width: 767px)").matches},mobileLandscape:function(){return window.matchMedia("(max-height: 767px) and (orientation: landscape)").matches},mobilePortrait:function(){return window.matchMedia("(max-width: 767px) and (orientation: portrait)").matches},tablet:function(){return window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches},tabletLandscape:function(){return window.matchMedia("(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)").matches},tabletPortrait:function(){return window.matchMedia("(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)").matches},desktop:function(){return window.matchMedia("(min-width: 1025px)").matches}};export{t as accordion,e as cookie,i as devices,n as readMore,a as tabs};
//# sourceMappingURL=bundle.js.map
