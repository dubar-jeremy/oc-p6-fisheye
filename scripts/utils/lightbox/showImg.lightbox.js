function showImg(imgSrc) {
    const lightboxImg = document.querySelector('.lightbox-img')
    const lightboxVideo = document.querySelector('.lightbox-video')
    lightboxImg.src = imgSrc
    lightboxImg.classList.add('lightbox-img-open')
    lightboxImg.classList.remove('lightbox-img-closed')
    lightboxVideo.pause()
    lightboxVideo.classList.remove('lightbox-video-open')
    lightboxVideo.classList.add('lightbox-video-closed')
}

export { showImg }
