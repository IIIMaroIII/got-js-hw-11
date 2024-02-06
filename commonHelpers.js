var d=(e,r,l)=>{if(!r.has(e))throw TypeError("Cannot "+l)};var y=(e,r,l)=>(d(e,r,"read from private field"),l?l.call(e):r.get(e)),f=(e,r,l)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,l)};import{i as m,S as h}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();var i;class ${constructor(){f(this,i,"42204653-dde2ea6d5277704e408fb2018");this.BASE_URL="https://pixabay.com/api/"}getImages(r){const l=new URLSearchParams({key:y(this,i),q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:50}),s=`${this.BASE_URL}?${l}`;return fetch(s).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}}i=new WeakMap;const c="/got-js-hw-11/assets/error-bd282b8e.svg",w="/got-js-hw-11/assets/caution-fce7ed33.svg";function u(e="Hello",r="Type in your message, please",l="white",s=w){return m.show({titleSize:"16px",title:`${e}`,message:`${r}`,messageSize:"16px",closeOnEscape:!0,position:"topRight",backgroundColor:`${l}`,iconUrl:`${s}`})}function S(e){return e.map(({webformatURL:l,largeImageURL:s,tags:t,likes:o,views:n,comments:p,downloads:g})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${l}"
            data-source="${s}"
            alt="${t}"
            title="${t}"
          />
        </a>
        <ul class="gallery-info">
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Likes</h3>
        <p class="gallery-infoText">${o}</p>
        </li>
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Views</h3>
        <p class="gallery-infoText">${n}</p>
        </li>
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Comments</h3>
        <p class="gallery-infoText">${p}</p>
        </li>
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Downloads</h3>
        <p class="gallery-infoText">${g}</p>
        </li>
        </ul></li>`).join("").trim()}const b=new $,a={form:document.querySelector(".form"),btn:document.querySelector(".form--btn"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};a.loader.style.display="none";a.form.addEventListener("submit",L);function L(e){e.preventDefault(),a.loader.style.display="block";const r=e.target.elements.formInput.value;if(!r)return a.loader.style.display="none",a.gallery.innerHTML="",u("Error","Please do your searching request, fill out the input","red",c);b.getImages(r.trim().toLowerCase()).then(({hits:l,...s})=>{a.loader.style.display="none",T(l),E(l),e.target.reset()}).catch(l=>{a.loader.style.display="none",u("Error",l,"red",c)})}function T(e){if(e.length!==0)return e;u("Error","Sorry, there are no images matching your search query. Please try again!","red",c)}function E(e){let r=new h(".gallery a",{captionDelay:250,captionsData:"alt"});const l=S(e);a.gallery.innerHTML=l,r.refresh()}
//# sourceMappingURL=commonHelpers.js.map
