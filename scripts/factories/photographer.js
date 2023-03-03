/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;
    
    const picture = `/assets/photographers/${portrait}`;
        data.picture = picture;

    function homePageCard() {

        const article = createElement({
            type: 'article',
            className: ['card']
        })

        const params = {
            data: data,
            options: { 
                cardLink: { href: { query: { userId: id } },  page: 'photographer.html' },
            }
        }

        const { cardPicture, cardLink, cardTitle, cardLocation, cardDescription, cardPrice } = getElements(params);

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
            data: data
        }

        const { cardPicture: photographerPicture, cardTitle, cardLocation, cardDescription } = getElements(params);

        appendElement(photographerInfo, [cardTitle, cardLocation, cardDescription])
    

        return {photographerPicture, photographerInfo}

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