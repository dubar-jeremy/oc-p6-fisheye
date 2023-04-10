function hideMedia() {
    const lightboxImg = document.querySelector('.lightbox-img')
    const lightboxVideo = document.querySelector('.lightbox-video')

    lightboxImg.classList.remove('lightbox-img-open')
    lightboxImg.classList.remove('lightbox-img-closed')
    lightboxVideo.classList.remove('lightbox-video-open')
    lightboxVideo.classList.remove('lightbox-video-closed')
}

export { hideMedia }
