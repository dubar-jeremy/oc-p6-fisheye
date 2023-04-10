import { appendElement } from '../utils/shared/dom/appendElement.js'
import { createElement } from '../utils/shared/dom/createElement.js'

function lightboxFactory() {
    function createLightbox() {
        const lightbox = createElement({
            type: 'div',
            className: ['lightbox'],
            tabIndex: '0',
        })

        const closeBtn = createElement({
            type: 'button',
            className: ['close'],
            content: '<i class="fa-solid fa-xmark"></i>',
            tabIndex: '0',
            name: 'close lightbox button',
        })

        const img = createElement({
            type: 'img',
            className: ['lightbox-img'],
            src: '',
            alt: '',
        })

        const video = createElement({
            type: 'video',
            className: ['lightbox-video'],
            src: '',
        })

        const previousBtn = createElement({
            type: 'button',
            className: ['prev'],
            name: 'prev',
            content: "<i class='fa-solid fa-chevron-left'></i>",
            tabIndex: '0',
        })

        const nextBtn = createElement({
            type: 'button',
            className: ['next'],
            name: 'next',
            content: "<i class='fa-solid fa-chevron-right'></i>",
            tabIndex: '0',
        })

        const text = createElement({
            type: 'p',
            className: ['lightbox-text'],
            content: '',
        })

        appendElement(lightbox, [closeBtn, img, video, text, previousBtn, nextBtn])

        document.body.appendChild(lightbox)

        return lightbox
    }

    return { createLightbox }
}

export { lightboxFactory }
