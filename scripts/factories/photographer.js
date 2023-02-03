/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;


    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add('card')
        
        const cardPicture = elementBuilder({
            type: 'img',
            role: 'img',
            ariaLabel: `portrait de ${name}`,
            alt: `portrait de ${name}`,
            src: picture, 
            className: ["card-img"]
        });
        // mettre un role sur cardTitle ?
        const cardTitle = elementBuilder({
            type: 'h2',
            content: name,
            ariaLabel: 'title of the card',
            className: ["card-title"]
        });
        const cardLocation = elementBuilder({
            type: 'p',
            content: `${city}, ${country}`,
            ariaLabel: `location of ${name}`,
            className: ["card-location"]
        });
        const cardDescription = elementBuilder({
            type: 'p',
            content: tagline,
            ariaLabel: `the job description of ${name}`,
            className: ["card-description"]
        });
        const cardPrice = elementBuilder({
            type: 'p',
            content: `${price}€/jour`,
            ariaLabel: `the price of ${name}`,
            className: ["card-price"]
        });

        article.appendChild(cardPicture);
        article.appendChild(cardTitle);
        article.appendChild(cardLocation);
        article.appendChild(cardDescription);
        article.appendChild(cardPrice);

        return (article);
    }

    return { name, picture, id, city, country, tagline, getUserCardDOM }
}