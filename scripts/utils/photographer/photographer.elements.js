import { createElement } from '../shared/dom/createElement.js'
import { queryBuilder } from '../queryBuilder.js'
function photographerElements(props) {
    const { data, options } = props

    return {
        cardPicture: createElement({
            type: 'img',
            id: options?.cardPicture?.id ?? '',
            role: options?.cardPicture?.role ?? 'img',
            alt: options?.cardPicture?.alt ?? `photo de profile de ${data?.name}`,
            src: options?.cardPicture?.picture ?? data?.picture,
            className: options?.cardPicture?.className ?? ['photographer-profile-img'],
            tabIndex: options?.cardPicture?.tabIndex ?? '',
        }),
        cardLink: createElement({
            type: 'a',
            href: queryBuilder({
                page: options?.cardLink?.page,
                query: options?.cardLink?.href?.query,
            }),
            className: options?.cardLink?.className ?? ['photographer-link'],
        }),
        cardTitle: createElement({
            type: options?.cardTitle?.type ?? 'h2',
            content: options?.cardTitle?.content ?? data?.name,
            className: options?.cardTitle?.className ?? ['photographer-name'],
        }),
        cardLocation: createElement({
            type: options?.cardLocation?.type ?? 'p',
            content: options?.cardLocation?.content ?? `${data?.city}, ${data?.country}`,
            className: options?.cardLocation?.className ?? ['photographer-location'],
        }),
        cardDescription: createElement({
            type: options?.cardDescription?.type ?? 'p',
            content: options?.cardDescription?.content ?? data?.tagline,
            className: options?.cardDescription?.className ?? ['photographer-motto'],
        }),
        cardPrice: createElement({
            type: options?.cardPrice?.type ?? 'p',
            content: options?.cardPrice?.content ?? `${data?.price}€/jour`,
            className: options?.cardPrice?.className ?? ['photographer-price'],
        }),
        button: createElement({
            type: 'button',
            content: options?.button?.content,
            className: options?.button?.className,
            name: options?.button?.name,
        }),
    }
}

export { photographerElements }
