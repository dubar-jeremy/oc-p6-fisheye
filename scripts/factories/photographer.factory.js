import { createElement } from "../utils/shared/dom/createElement.js";
import { photographerElements } from "../utils/photographer/photographer.elements.js";
import { appendElement } from "../utils/shared/dom/appendElement.js";


function photographerFactory(data) {
    const { name, portrait, id, city, tagline, price } = data;

    const picture = `./assets/photographers/${portrait}`;
    data.picture = picture;

    function homePageCard() {

        const article = createElement({
            type: 'article',
            className: ['photographer-article']
        })

        const params = {
            data: data,
            options: {
                cardLink: { href: { query: { userId: id } }, page: 'photographer.html' },
            }
        }

        const { cardPicture, cardLink, cardTitle, cardLocation, cardDescription, cardPrice } = photographerElements(params);

        appendElement(article, [cardPicture, cardTitle, cardLocation, cardDescription, cardPrice])
        cardPicture.parentNode.insertBefore(cardLink, cardPicture);
        appendElement(cardLink, [cardTitle, cardPicture])


        return (article);
    }

    function photographerPageCard() {

        const photographerInfo = createElement({
            type: 'div',
            className: ['photographer-info']
        })

        const params = {
            data: data,
            options: {
                cardPicture: { alt: name }
            }
        }

        const { cardPicture: photographerPicture, cardTitle, cardLocation, cardDescription } = photographerElements(params);

        appendElement(photographerInfo, [cardTitle, cardLocation, cardDescription])


        return { photographerPicture, photographerInfo }

    }


    function getUserData() {
        return {
            id,
            name,
            city,
            tagline,
            price
        }
    }

    return { getUserData, homePageCard, photographerPageCard }
}

export { photographerFactory }