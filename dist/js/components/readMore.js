var e=function(){const e=e=>{const a=e.querySelector("[data-read-more-toggler]");a&&(a.innerHTML=a.dataset.moreText||"Read More",a.addEventListener("click",(()=>t(e,a))))},t=(e,t)=>{const a=e.dataset.readMoreActiveClass||"active";e.classList.toggle(a),t.innerHTML=e.classList.contains(a)?t.dataset.lessText||"Read Less":t.dataset.moreText||"Read More"};return{run:()=>{document.querySelectorAll("[data-read-more]").forEach(e)}}}();export{e as default};