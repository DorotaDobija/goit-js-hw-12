import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as g,a as y,i as c}from"./assets/vendor-c493984e.js";const d=document.querySelector("form"),l=document.querySelector(".gallery"),s=document.querySelector(".pagination_btn"),p=document.querySelector(".loader"),h=new g(".gallery a");let n,r;const m=async t=>{p.style.display="block",await y.get("https://pixabay.com/api/",{params:{key:"35719926-181ab604ec6a85b118ffdb3f0",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:n}}).then(a=>{const o=a.data.hits,i=a.data.totalHits,e=o.length*n;o.length===0&&(l.textContent="",c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),f(o),p.style.display="none",e>=i&&(c.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),s.style.display="none")}).catch(a=>console.log(a))},f=t=>{const a=t.map(e=>`<li>
        <div class="card">
        <a href="${e.largeImageURL}"><img class="gallery_img" width ="360px" height="200px" src="${e.webformatURL}" alt="${e.tags}"></a>
        <div class="information_box">
        <p class="information"><span class="information_header">Likes:</span>${e.likes}</p>
        <p class="information"><span class="information_header">Views:</span>${e.views}</p>
        <p class="information"><span class="information_header">Comments:</span>${e.comments}</p>
        <p class="information"><span class="information_header">Downloads:</span>${e.downloads}</p></div>
        </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",a),s.style.display="block";const i=document.querySelector(".gallery_img").getBoundingClientRect();window.scrollBy(0,2*i),h.refresh()},u=t=>{t.reset()},b=async t=>{n=1,s.style.display="none",l.textContent="",r=t.target.elements[0].value,t.preventDefault(),m(r),u(d)},w=()=>{s.style.display="none",n++,m(r)};d.addEventListener("submit",b);s.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
