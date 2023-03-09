import { createElement } from "../shared/dom/createElement.js"

function getMediaElements(props) {
    const { data, options } = props

    const elementsList = {
        cardTitle: createElement({
            type: options?.cardTitle?.type ?? 'span',
            content: options?.cardTitle?.content ?? 'title',
            ariaLabel: options?.cardTitle?.ariaLabel ?? 'aria label',
            className: options?.cardTitle?.className ?? ["work-card-title"]
        }),
        cardLikes: createElement({
            type: options?.cardLikes?.type ?? 'span',
            content: options?.cardLikes?.content ?? '0',
            ariaLabel: options?.cardLikes?.ariaLabel ?? 'aria label',
            className: options?.cardLikes?.className ?? ["work-card-like"]
        }),
        cardIcon: createElement({
            type: options?.cardIcon?.type ?? 'i',
            className: options?.cardIcon?.className ?? ["fa-solid", "fa-heart"]
        }),
        cardPrice: createElement({
            type: options?.cardPrice?.type ?? 'span',
            className: options?.cardPrice?.className ?? ["card-price"],
            content: options?.cardPrice?.content + `$/jour` ?? '10$/jour',
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