import { showImg } from "./showImg.lightbox.js";
import { showVideo } from "./showVideo.lightbox.js";

const showMedia = (media) => {

    if (media.tagName === "IMG") {
      showImg(media.src);
    }
    if (media.tagName === "VIDEO") {
      showVideo(media.querySelector("source").src);
    }
  };

  export { showMedia }