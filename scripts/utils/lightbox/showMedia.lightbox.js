import { showImg } from "./showImg.lightbox.js";
import { showVideo } from "./showVideo.lightbox.js";

const showMedia = (media) => {
    document.querySelector(".lightbox-text").innerHTML = media.getAttribute('alt')
    if (media.tagName === "IMG") {
      showImg(media.src);
    }

    if (media.tagName === "VIDEO") {
      showVideo(media.querySelector("source").src);
    }
  };

  export { showMedia }