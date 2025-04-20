import{a as p,S as m,i as u}from"./assets/vendor-lDhL-8I6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const y="49833944-6607058f780df4ba7a1e9afed";function h(e){return p("https://pixabay.com/api/",{params:{key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(r=>r.data)}const o=document.querySelector(".gallery"),n=document.querySelector(".loader");let i=null;function g(e){const r=e.tags.split(",").slice(0,3).join(", ");return`
    <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${r}"
                loading="lazy"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${e.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${e.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${e.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${e.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `}function v(e){if(!o)return;const r=e.map(g).join("");o.insertAdjacentHTML("beforeend",r),i?i.refresh():i=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){o&&(o.innerHTML="",i&&(i.destroy(),i=null))}function b(){n==null||n.classList.remove("hidden")}function w(){n==null||n.classList.add("hidden")}const d=document.querySelector(".form"),q=document.querySelector("input[name='search-text']");d.addEventListener("submit",S);function f(e){u.warning({title:"Warning",message:e,position:"topRight"})}async function S(e){e.preventDefault();const r=q.value.trim();if(!r){f("Please enter a search query");return}b(),L();try{const{hits:a}=await h(r);if(a.length===0){f("Sorry, there are no images matching your search query. Please try again!");return}v(a)}catch(a){u.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error("Error fetching images:",a)}finally{w(),d.reset()}}
//# sourceMappingURL=index.js.map
