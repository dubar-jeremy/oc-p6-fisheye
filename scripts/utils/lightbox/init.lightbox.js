import { hideMedia } from "./hideMedia.lightbox.js";
import { showMedia } from "./showMedia.lightbox.js";

function initLightbox() {
  const medias = document.querySelectorAll('[id^="content-"]');
  const lightbox = document.querySelector(".lightbox");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;

  function handleElementClick(element, index) {
    openLightbox(element, index);
  }

  function handleElementKeydown(event, element, index) {
    if (event.key === "Enter") {
      openLightbox(element, index);
    }
  }

  function handleLightboxKeydown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      if (document.activeElement === nextBtn) {
        prevBtn.focus();
      } else if (document.activeElement === prevBtn) {
        closeBtn.focus();
      } else {
        nextBtn.focus();
      }
    } else if (event.key === "ArrowRight") {
      currentIndex++;
      if (currentIndex >= medias.length) {
        currentIndex = 0;
      }
      const currentMedia = medias[currentIndex];
      showMedia(currentMedia);
      nextBtn.focus();
    } else if (event.key === "ArrowLeft") {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = medias.length - 1;
      }
      const currentMedia = medias[currentIndex];
      showMedia(currentMedia);
      prevBtn.focus();
    } else if (event.key === "Escape") {
      lightbox.classList.remove("lightbox-open");
      hideMedia();
    }
  }

  function handlePrevBtnClick() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = medias.length - 1;
    }
    const currentMedia = medias[currentIndex];
    showMedia(currentMedia);
  }

  function handleNextBtnClick() {
    currentIndex++;
    if (currentIndex >= medias.length) {
      currentIndex = 0;
    }
    const currentMedia = medias[currentIndex];
    showMedia(currentMedia);
  }

  function handleCloseBtnClick() {
    lightbox.classList.remove("lightbox-open");
    hideMedia();
  }

  function openLightbox(element, index) {
    lightbox.classList.add("lightbox-open");
    showMedia(element);
    currentIndex = index;
    lightbox.focus();
  }

  medias.forEach((element, index) => {
    element.addEventListener("click", () => handleElementClick(element, index));
    element.addEventListener("keydown", (event) => handleElementKeydown(event, element, index));
  });

  lightbox.addEventListener("keydown", handleLightboxKeydown);

  prevBtn.addEventListener("click", handlePrevBtnClick);
  nextBtn.addEventListener("click", handleNextBtnClick);
  closeBtn.addEventListener("click", handleCloseBtnClick);
}

export { initLightbox };
