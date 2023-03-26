import { hideMedia } from "./hideMedia.lightbox.js";
import { showMedia } from "./showMedia.lightbox.js";

function initLightbox() {
  const medias = document.querySelectorAll('[id^="content-"]');
  const lightbox = document.querySelector(".lightbox");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;

  lightbox.setAttribute("tabindex", "0");
  closeBtn.setAttribute("tabindex", "0");
  prevBtn.setAttribute("tabindex", "0");
  nextBtn.setAttribute("tabindex", "0");

  closeBtn.focus()

  medias.forEach((element, index) => {
    element.addEventListener("click", () => {
      lightbox.classList.add("lightbox-open");
      showMedia(element);
      lightbox.focus();
      currentIndex = index;
    });
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = medias.length - 1;
    }
    const currentMedia = medias[currentIndex];
    showMedia(currentMedia);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= medias.length) {
      currentIndex = 0;
    }
    const currentMedia = medias[currentIndex];
    showMedia(currentMedia);
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("lightbox-open");
    hideMedia();
  });

  // keyboard navigation

  const firstFocusable = lightbox;
  const lastFocusable = nextBtn;
  firstFocusable.setAttribute("tabindex", "0");
  lastFocusable.setAttribute("tabindex", "0");
  firstFocusable.focus();

  document.addEventListener("keydown", (event) => {


    if (event.key === "Escape") {
      lightbox.classList.remove("lightbox-open");
      hideMedia();
      closeBtn.focus();
    }

    if (event.key === "ArrowLeft") {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = medias.length - 1;
      }
      const currentMedia = medias[currentIndex];
      showMedia(currentMedia);
      prevBtn.focus();
    }

    if (event.key === "ArrowRight") {
      currentIndex++;
      if (currentIndex >= medias.length) {
        currentIndex = 0;
      }
      const currentMedia = medias[currentIndex];
      showMedia(currentMedia);
      nextBtn.focus();
    }

    if (event.key === "Tab") {

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
      
      if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }

  });
}

export { initLightbox };
