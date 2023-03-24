import { appendElement } from "../utils/shared/dom/appendElement.js"
import { createElement } from "../utils/shared/dom/createElement.js"

function lightboxFactory() {
  function createLightbox() {

    const lightbox = createElement({
      type: 'div',
      className: ['lightbox']
    })

    const closeBtn = createElement({
      type: 'span',
      className: ['close'],
      content: '&times;'
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
      type: 'span',
      className: ['prev'],
      content: ">&#1009"
    })

    const nextBtn = createElement({
      type: 'span',
      className: ['next'],
      content: ">&#1009"
    })

    appendElement(lightbox, [closeBtn, img, video, previousBtn, nextBtn])

    document.body.appendChild(lightbox)

    return lightbox
  }

  return { createLightbox }
}

export { lightboxFactory }
