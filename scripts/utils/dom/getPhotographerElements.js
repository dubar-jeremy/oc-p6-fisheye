/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function getPhotographerElements(props) {
    const { data, options } = props

    return {
        cardPicture: createElement({
            type: 'img',
            role: options?.cardPicture?.role ?? 'img',
            ariaLabel: options?.cardPicture?.ariaLabel ?? `portrait de ${data?.name}`,
            alt: options?.cardPicture?.alt ?? `portrait de ${data?.name}`,
            src: options?.cardPicture?.picture ?? data?.picture,
            className: options?.cardPicture?.className ?? ['card-img']
        }),
        cardLink: createElement({
            type: 'a',
            href: queryBuilder({
                page: options?.cardLink?.page,
                query: options?.cardLink?.href?.query
            }),
            className: options?.cardLink?.className ?? ["card-link"]
        }),
        cardTitle: createElement({
            type: options?.cardTitle?.type ?? 'h2',
            content: options?.cardTitle?.content ?? data?.name,
            ariaLabel: options?.cardTitle?.ariaLabel ?? 'title of the card',
            className: options?.cardTitle?.className ?? ["card-title"]
        }),
        cardLocation: createElement({
            type: options?.cardLocation?.type ?? 'p',
            content: options?.cardLocation?.content ?? `${data?.city}, ${data?.country}`,
            ariaLabel: options?.cardLocation?.ariaLabel ?? `location of ${data?.name}`,
            className: options?.cardLocation?.className ?? ["card-location"]
        }),
        cardDescription: createElement({
            type: options?.cardDescription?.type ?? 'p',
            content: options?.cardDescription?.content ?? data?.tagline,
            ariaLabel: options?.cardDescription?.ariaLabel ?? `the job description of ${data?.name}`,
            className: options?.cardDescription?.className ?? ["card-description"]
        }),
        cardPrice: createElement({
            type: options?.cardPrice?.type ?? 'p',
            content: options?.cardPrice?.content ?? `${data?.price}€/jour`,
            ariaLabel: options?.cardPrice?.ariaLabel ?? `the price of ${data?.name}`,
            className: options?.cardPrice?.className ?? ["card-price"]
        }),
        button: createElement({
            type: 'button',
            content: options?.button?.content,
            className: options?.button?.className,
            name: options?.button?.name,
        })
    }
}