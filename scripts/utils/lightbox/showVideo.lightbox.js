function showVideo(videoSrc) {
    const lightboxImg = document.querySelector(".lightbox-img");
    const lightboxVideo = document.querySelector(".lightbox-video");
    lightboxVideo.src = videoSrc;
    lightboxVideo.classList.add("lightbox-video-open");
    lightboxVideo.classList.remove("lightbox-video-closed");
    lightboxImg.src = "";
    lightboxImg.classList.remove("lightbox-img-open");
    lightboxImg.classList.add("lightbox-img-closed");
}

export { showVideo }