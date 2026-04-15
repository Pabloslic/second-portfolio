const galleryCards = document.querySelectorAll(".gallery-card[data-full]");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  if (lightboxImage) {
    lightboxImage.src = "";
    lightboxImage.alt = "";
  }
};

galleryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const imageUrl = card.dataset.full;
    const imageAlt = card.dataset.alt || "Graphic design preview";

    if (!lightbox || !lightboxImage || !imageUrl) return;

    lightboxImage.src = imageUrl;
    lightboxImage.alt = imageAlt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
