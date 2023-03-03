/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function mediaFactory(medias, name) {

    const { id, photographId, title, image, video, likes } = medias


    /**
     * REPLACE (ID = 930)
     */

    const picture = `/assets/medias/Ellie-Rose/${image}`;
    const photographerVideo = `/assets/medias/Ellie-Rose/${video}`;


    function photographerMediasPicture() {

        const card = createElement({
            type: 'div',
            className: ['photographer-work']
        })

        const params = {
            data: medias,
            options: {
                cardPicture: { picture: picture, className: ['media-picture'], ariaLabel: "test", alt: "test" },
            }
        }

        const { cardPicture } = getPhotographerElements(params);

        appendElement(card, [cardPicture])

        return card;
    }

    function photographerMediasVideo() {

        const card = createElement({
            type: 'div',
            className: ['photographer-work']
        })

        const params = {
            data: medias,
            options: {
                cardVideo: { src: photographerVideo, className: ['media-video'] },
            }
        }

        const { cardVideo } = getMediaElements(params);


        appendElement(card, [cardVideo])


        return card;
    }




    return { photographerMediasPicture, photographerMediasVideo }
}