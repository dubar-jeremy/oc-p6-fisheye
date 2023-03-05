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
            type: 'article',
            className: ['photographer-work']
        })

        const params = {
            data: medias,
            options: {
                cardPicture: { picture: picture, className: ['media-picture'], ariaLabel: "test", alt: "test" },
                cardLikes: { content: likes},
                cardTitle: { content: title },
            }
        }

        const { cardPicture } = getPhotographerElements(params);

        const {mainContentContainer } = createMediaContent(params)


        appendElement(card, [cardPicture, mainContentContainer ])

        return card;
    }

    function photographerMediasVideo() {

        const card = createElement({
            type: 'article',
            className: ['photographer-work']
        })

        const params = {
            data: medias,
            options: {
                cardVideo: { src: photographerVideo, className: ['media-video'] },
                cardLikes: { content: likes},
                cardTitle: { content: title },
            }
        }

        const { cardVideo } = getMediaElements(params);

        const { mainContentContainer } = createMediaContent(params)

        appendElement(card, [cardVideo, mainContentContainer])

        return card;
    }

    function createMediaContent(params){

        const { cardTitle, cardLikes, cardIcon } = getMediaElements(params);

        const mainContentContainer = createElement({
            type: 'div',
            className: ['photographer-work-main-container']
        })

        const contentContainer = createElement({
            type: 'div',
            className: ['photographer-work-container']
        })

        const likesContainer = createElement({
            type: 'div',
            className: ['photographer-work-container-like']
        })
        
        appendElement(contentContainer, [cardTitle])
        appendElement(likesContainer, [cardLikes, cardIcon])
        appendElement(mainContentContainer, [contentContainer, likesContainer])

        return { mainContentContainer }
    }

    function photographerMediasInfo(){
        const main = document.querySelector('main');
        
        
        const sectionInfo = createElement({
            type: 'section-info',
            className: ['section-info']
        })
    
        const params = {
            data: medias,
            options: {
                cardVideo: { src: photographerVideo, className: ['media-video'] },
                cardLikes: { content: 10 },
                cardPrice: { content: 200 },
            }
        }

        const { cardLikes, cardPrice } = getMediaElements(params);

        appendElement(sectionInfo, [cardLikes, cardPrice])
        appendElement(main, [sectionInfo])
    }




    return { photographerMediasPicture, photographerMediasVideo, photographerMediasInfo }
}