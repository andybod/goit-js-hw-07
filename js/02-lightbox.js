import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarKup = createGaleryItemMarKup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarKup);
galleryEl.addEventListener("click", openModalItemGallery);

function createGaleryItemMarKup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
		<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join("");
}

function openModalItemGallery(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  console.log(e.target.getAttribute("alt"));
}
