import { createElement } from "../shared/dom/createElement.js"

function getMediaElements(props) {
    const { data, options } = props

    const elementsList = {
        cardTitle: createElement({
            type: options?.cardTitle?.type ?? 'span',
            content: options?.cardTitle?.content ?? 'title',
            className: options?.cardTitle?.className ?? ["photo__title-text"]
        }),
        cardLikes: createElement({
            type: options?.cardLikes?.type ?? 'span',
            content: options?.cardLikes?.content ?? '0',
            className: options?.cardLikes?.className ?? ["photo__likes-count"]
        }),
        cardIcon: createElement({
            type: options?.cardIcon?.type ?? 'i',
            ariaLabel: options?.cardLikes?.ariaLabel ?? 'likes',
            className: options?.cardIcon?.className ?? ["fa-solid", "fa-heart"]
        }),
        cardPrice: createElement({
            type: options?.cardPrice?.type ?? 'span',
            className: options?.cardPrice?.className ?? ["photographer-price"],
            content: options?.cardPrice?.content + `€/jour` ?? '10€/jour',
        }),
    }

    if(options?.cardVideo){
        elementsList.cardVideo = createElement({
            type: 'video',
            src: options?.cardVideo?.src ?? data?.video,
            className: options?.cardVideo?.className ?? ["card-video"],
        })
    }

    return elementsList
}

export { getMediaElements }