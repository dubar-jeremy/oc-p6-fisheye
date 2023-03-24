import { showMedia } from "./showMedia.lightbox.js";

function nextSlide(currentIndex, medias){
    if (currentIndex >= medias.length) {
      currentIndex = 0;
    }
    const currentMedia = medias[currentIndex];
    showMedia(currentMedia);
}

export { nextSlide }