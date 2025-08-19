import{a as d,S as h,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();d.defaults.baseURL="https://pixabay.com/api/";const y="51662095-362d68f1fb432ef34c7441ea2";function b(r){return d.get("",{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).data}let c;const u=document.querySelector("#gallery"),f=document.querySelector(".loader");function L(r=[]){const o=r.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:a,comments:g,downloads:p})=>`
      <div class="photo-card">
        <a class="gallery__item" href="${s}">
          <img class="gallery__image" src="${i}" alt="${e}" loading="lazy" />
        </a>
        <ul class="info">
          <li><b>Likes:</b> ${t}</li>
          <li><b>Views:</b> ${a}</li>
          <li><b>Comments:</b> ${g}</li>
          <li><b>Downloads:</b> ${p}</li>
        </ul>
      </div>`).join("");u.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new h("#gallery a",{captionsData:"alt",captionDelay:250})}function x(){u.innerHTML=""}function v(){f.classList.remove("is-hidden")}function w(){f.classList.add("is-hidden")}const m=document.querySelector("form"),n=m.querySelector('button[type="submit"]');m.addEventListener("submit",r=>{r.preventDefault();const i=new FormData(r.target).get("searchText").trim();if(!i){l.error({position:"topRight",title:"Error",message:"Ви нічого не ввели!"});return}x(),v();const s=n.textContent;n.disabled=!0,b(i).then(e=>{const t=e.hits;if(!t.length){l.warning({position:"topRight",title:"Немає результатів",message:"Нічого не знайдено"}),n.disabled=!1,n.textContent=s;return}L(t)}).catch(e=>{console.log(e),l.error({position:"topRight",title:e,message:"Помилка"})}).then(()=>{w(),n.disabled=!1,r.target.reset()})});
//# sourceMappingURL=index.js.map
