var t=function(){const t=t=>{const e=t.querySelectorAll("[data-tab-button]"),s=t.querySelectorAll("[data-tab-content]"),c=t.dataset.activeButtonClass||"active";t.dataset.tabs;const l=t.dataset.activeContentClass||"active";e.forEach((t=>{t.addEventListener("click",(()=>{a(t,s,c,l)}))})),e.length>0&&e[0].click()},a=(t,a,e,s)=>{const c=t.dataset.tabButton;t.parentElement.querySelectorAll("[data-tab-button]").forEach((t=>{t.classList.remove(e)})),a.forEach((t=>{"active"!==s?t.classList.remove(s):t.style.display="none"})),t.classList.add(e);const l=[...a].find((t=>t.dataset.tabContent===c));l&&("active"!==s?l.classList.add(s):l.style.display="block")};return{run:()=>{document.querySelectorAll("[data-tabs]").forEach(t)}}}();export{t as default};
