import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarKup = createGaleryItemMarKup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarKup);
galleryEl.addEventListener("click", openModalItemGallery);

function createGaleryItemMarKup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
		<a class="gallery__link" href=${original}>
		  <img
			 class="gallery__image"
			 src=${preview}
			 data-source= ${original}
			 alt= ${description}
		  />
		</a>
		</div>`;
    })
    .join("");
}

function openModalItemGallery(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  evt.preventDefault();
  const bigImg = basicLightbox.create(
    `
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `,
    {
      onShow: (instance) => {
        galleryEl.addEventListener("keydown", function OnEscKeyPress(e) {
          if (e.code === "Escape") {
            instance.close();
            galleryEl.removeEventListener("keydown", OnEscKeyPress);
            console.log(e);
          }
        });
      },
    }
  );
  bigImg.show();
}
