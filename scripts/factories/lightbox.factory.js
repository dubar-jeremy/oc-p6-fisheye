import { appendElement } from "../utils/shared/dom/appendElement.js"
import { createElement } from "../utils/shared/dom/createElement.js"

function lightboxFactory() {
  function createLightbox() {

    const lightbox = createElement({
      type: 'div',
      className: ['lightbox']
    })

    const closeBtn = createElement({
      type: 'button',
      className: ['close'],
      content: '<i class="fa-solid fa-xmark"></i>'
    })

    const img = createElement({
      type: 'img',
      className: ['lightbox-img'],
      src: '',
      alt: ''
    })

    const video = createElement({
      type: 'video',
      className: ['lightbox-video'],
      src: ''
    })

    const previousBtn = createElement({
      type: 'button',
      className: ['prev'],
      name: "prev",
      content: "<i class='fa-solid fa-chevron-left'></i>"
    })

    const nextBtn = createElement({
      type: 'button',
      className: ['next'],
      name: "next",
      content: "<i class='fa-solid fa-chevron-right'></i>"
    })

    const text = createElement({
      type: 'p',
      className: ['lightbox-text'],
      content: ''
    })

    appendElement(lightbox, [closeBtn, img, video, text, previousBtn, nextBtn])

    document.body.appendChild(lightbox)

    return lightbox
  }

  return { createLightbox }
}

export { lightboxFactory }
