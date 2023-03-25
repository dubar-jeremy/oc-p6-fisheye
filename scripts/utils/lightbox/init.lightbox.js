import { hideMedia } from "./hideMedia.lightbox.js";
import { showMedia } from "./showMedia.lightbox.js";

function initLightbox() {
    const medias = document.querySelectorAll('[id^="content-"]');
    const lightbox = document.querySelector(".lightbox");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;
  
    medias.forEach((element, index) => {
      element.addEventListener("click", () => {
        console.log(element)
        lightbox.classList.add("lightbox-open");
        showMedia(element);
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
  }
  
  export { initLightbox };
  