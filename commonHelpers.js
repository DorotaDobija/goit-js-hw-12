import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as d,a as g,i as c}from"./assets/vendor-c493984e.js";const p=document.querySelector("form"),l=document.querySelector(".gallery"),n=document.querySelector(".pagination_btn"),h=new d(".gallery a");let o,r;const m=async t=>{await g.get("https://pixabay.com/api/",{params:{key:"35719926-181ab604ec6a85b118ffdb3f0",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:o}}).then(a=>{const s=a.data.hits,i=a.data.totalHits,e=s.length*o;s.length===0&&(l.textContent="",c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),y(s),e>=i&&(c.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),n.style.display="none")}).catch(a=>console.log(a))},y=t=>{const a=t.map(e=>`<li>
        <div class="card">
        <a href="${e.largeImageURL}"><img class="gallery_img" width ="360px" height="200px" src="${e.webformatURL}" alt="${e.tags}"></a>
        <div class="information_box">
        <p class="information"><span class="information_header">Likes:</span>${e.likes}</p>
        <p class="information"><span class="information_header">Views:</span>${e.views}</p>
        <p class="information"><span class="information_header">Comments:</span>${e.comments}</p>
        <p class="information"><span class="information_header">Downloads:</span>${e.downloads}</p></div>
        </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",a),n.style.display="block";const i=document.querySelector(".gallery_img").getBoundingClientRect();window.scrollBy(0,2*i),h.refresh()},f=t=>{t.reset()},u=async t=>{o=1,n.style.display="none",l.textContent="",r=t.target.elements[0].value,t.preventDefault(),m(r),f(p)},b=()=>{o++,m(r)};p.addEventListener("submit",u);n.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
