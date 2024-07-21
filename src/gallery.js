import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

const formEl = document.querySelector("form");
const gallery = document.querySelector(".gallery");
const paginationButton = document.querySelector(".pagination_btn");
const loaderEL = document.querySelector(".loader");

const lightbox = new SimpleLightbox('.gallery a');

let pageValue;
let searchValue;

const fetchImages = async (value) => {
    loaderEL.classList.toggle("invisible");
    await axios.get('https://pixabay.com/api/', {
        params: {
            key: "35719926-181ab604ec6a85b118ffdb3f0",
            q: value,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 40,
            page: pageValue,
        }
    }).then((images) => {
        const imagesArr = images.data.hits;
        const imagesTotal = images.data.totalHits;
        const imagesFetched = imagesArr.length * pageValue;
       
        if (imagesArr.length === 0) {
            gallery.textContent = "";
            iziToast.error({
                title: '',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
        };
        createListItemToAdd(imagesArr);
        loaderEL.classList.toggle("invisible");
        if (imagesFetched >= imagesTotal) {
            iziToast.info({
                title: '',
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight'
            });
            paginationButton.classList.toggle("invisible");
        }
        
    }).catch(error => console.log(error));
}

const createListItemToAdd = (arr) => {
  
    const image = arr.map(image => `<li>
        <div class="card">
        <a href="${image.largeImageURL}"><img class="gallery_img" width ="360px" height="200px" src="${image.webformatURL}" alt="${image.tags}"></a>
        <div class="information_box">
        <p class="information"><span class="information_header">Likes:</span>${image.likes}</p>
        <p class="information"><span class="information_header">Views:</span>${image.views}</p>
        <p class="information"><span class="information_header">Comments:</span>${image.comments}</p>
        <p class="information"><span class="information_header">Downloads:</span>${image.downloads}</p></div>
        </div>
        </li>`).join('');
    gallery.insertAdjacentHTML("beforeend", image);
    paginationButton.classList.toggle("invisible");
    console.log(pageValue)
    if (pageValue > 1) {
        const imageEl = document.querySelector(".gallery_img");
        const rect = imageEl.getBoundingClientRect();
        window.scrollBy({
        top: 2*rect.height,
        behavior: "smooth",
     });
    }

    lightbox.refresh();
}

const clearFunc = (form) => {
    form.reset();
}
    
const sendRequest = (event) => {
    pageValue = 1;
    gallery.textContent = "";
    searchValue = event.target.elements[0].value;
    event.preventDefault();
    fetchImages(searchValue);
    clearFunc(formEl);
};
    
const paginationFunc = () => {
    paginationButton.classList.toggle("invisible");
    pageValue++;
    fetchImages(searchValue);
}

formEl.addEventListener("submit", sendRequest);
paginationButton.addEventListener("click", paginationFunc);