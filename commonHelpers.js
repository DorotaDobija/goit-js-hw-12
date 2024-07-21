import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as d,a as h,i as r}from"./assets/vendor-c493984e.js";const g=document.querySelector("form"),l=document.querySelector(".gallery"),o=document.querySelector(".pagination_btn"),c=document.querySelector(".loader"),f=new d(".gallery a");let a,n;const m=async t=>{c.classList.toggle("invisible"),await h.get("https://pixabay.com/api/",{params:{key:"35719926-181ab604ec6a85b118ffdb3f0",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:a}}).then(s=>{const e=s.data.hits,i=s.data.totalHits,p=e.length*a;e.length===0&&(l.textContent="",r.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),u(e),c.classList.toggle("invisible"),p>=i&&(r.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),o.classList.toggle("invisible"))}).catch(s=>console.log(s))},u=t=>{const s=t.map(e=>`<li>
        <div class="card">
        <a href="${e.largeImageURL}"><img class="gallery_img" width ="360px" height="200px" src="${e.webformatURL}" alt="${e.tags}"></a>
        <div class="information_box">
        <p class="information"><span class="information_header">Likes:</span>${e.likes}</p>
        <p class="information"><span class="information_header">Views:</span>${e.views}</p>
        <p class="information"><span class="information_header">Comments:</span>${e.comments}</p>
        <p class="information"><span class="information_header">Downloads:</span>${e.downloads}</p></div>
        </div>
        </li>`).join("");if(l.insertAdjacentHTML("beforeend",s),o.classList.toggle("invisible"),console.log(a),a>1){const i=document.querySelector(".gallery_img").getBoundingClientRect();window.scrollBy({top:2*i.height,behavior:"smooth"})}f.refresh()},y=t=>{t.reset()},b=t=>{a=1,l.textContent="",n=t.target.elements[0].value,t.preventDefault(),m(n),y(g)},v=()=>{o.classList.toggle("invisible"),a++,m(n)};g.addEventListener("submit",b);o.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
