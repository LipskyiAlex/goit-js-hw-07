import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (element) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=${element.original}>
        <img
          class="gallery__image"
          src=${element.preview}
          alt=${element.description}
        />
      </a>
    </li>`
  )
  .join("");

  gallery.insertAdjacentHTML("afterbegin",markup);

  gallery.addEventListener("click", (event) => {

       event.preventDefault();

       new SimpleLightbox('.gallery a', {  // В шаблоні змінна, але не зрозумів, навіщо вона, якщо ми її не використовуемо.
        
        captionsData: "alt",
        captionsDelay:250,
     });
  
  })
