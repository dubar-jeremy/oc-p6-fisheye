/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;
    
    const picture = `assets/photographers/${portrait}`;
        data.picture = picture;

    function getUserCardDOM() {

        const article = document.createElement('article');
        article.classList.add('card')

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

    function getUserData() {
        return {
            id,
            name,
            city,
            tagline,
            price
        }
    }

    return { getUserData, getUserCardDOM }
}