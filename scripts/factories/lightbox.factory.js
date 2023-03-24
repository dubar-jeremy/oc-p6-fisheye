import { appendElement } from "../utils/shared/dom/appendElement.js"
import { createElement } from "../utils/shared/dom/createElement.js"

function lightboxFactory() {

    function createLightbox(medias) {

        const lightboxMainContainer = createElement({
            type: 'div',
            className: ['photographer-lightbox']
        })

        medias.forEach(el => {
            if(el.image){
                const picture = `/assets/medias/${el.photographerId}/${el.image}`;

                const row = createElement({
                    type: 'div',
                    className: ['lightbox-row']
                })

                const image = createElement({
                    type: 'img',
                    alt: 'alt exemple',
                    className: ['lightbox-content'],
                    src: picture
        
                })

                const lightboxText = createElement({
                    type: 'p',
                    className: ['lightbox-text'],
                    content: 'toto'
                })

                const next = createElement({
                    type: 'i',
                    className: ["fa-solid", "fa-arrow-right"],
                })

                const previous = createElement({
                    type: 'i',
                    className: ["fa-solid", "fa-arrow-left"],
                })

                appendElement(row, [previous, image, lightboxText, next])
                appendElement(lightboxMainContainer, [row])
            }

            if(el.video){
                const photographerVideo = `/assets/medias/${el.photographerId}/${el.video}`;

                const row = createElement({
                    type: 'div',
                    className: ['lightbox-row']
                })

                const video = createElement({
                    type: 'video',
                    className: ['lightbox-content'],
                    src: photographerVideo
                })


                const lightboxText = createElement({
                    type: 'p',
                    className: ['lightbox-text'],
                    content: 'toto'
                })

                const next = createElement({
                    type: 'i',
                    className: ["fa-solid", "fa-arrow-right"],
                })

                const previous = createElement({
                    type: 'i',
                    className: ["fa-solid", "fa-arrow-left"],
                })

                appendElement(row, [previous, video, lightboxText, next])

                appendElement(lightboxMainContainer, [row])

            }
        });

        const closeBtn = createElement({
            type: 'button',
            content: 'fermer',
            className: ['close_lightbox']
        })

        const nextBtn = createElement({
            type: 'button',
            content: 'next'
        })

        const prevBtn = createElement({
            type: 'button',
            content: 'prev'
        })

        appendElement(lightboxMainContainer, [nextBtn, prevBtn, closeBtn])

        return lightboxMainContainer
    }
    return { lightboxFactory, createLightbox }
}

export { lightboxFactory }