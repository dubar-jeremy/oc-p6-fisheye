import { createElement } from '../utils/shared/dom/createElement.js'
import { appendElement } from '../utils/shared/dom/appendElement.js'
import { getMediaElements } from '../utils/media/media.elements.js';
import { photographerElements } from '../utils/photographer/photographer.elements.js'
import { getUrlParam } from '../utils/getUrlParam.js';


function mediaFactory(medias) {

    const { title, image, video, likes, id } = medias

    const userId = getUrlParam('userId')

    const picture = `./assets/medias/${userId}/${image}`;
    const photographerVideo = `./assets/medias/${userId}/${video}`;


    function photographerMediasPicture() {

        const card = createElement({
            type: 'article',
            className: ['photographer-media']
        })

        const params = {
            data: medias,
            options: {
                cardPicture: { picture: picture, className: ['photo'], ariaLabel: "test", alt: title, id: `content-${id}` },
                cardLikes: { content: likes, id: medias.id, ariaLabel: `nombre de j'aime: ${likes}` },
                cardTitle: { content: title },
            }
        }

        const { cardPicture } = photographerElements(params);

        const { mainContentContainer } = createMediaContent(params)

        appendElement(card, [cardPicture, mainContentContainer])

        return card;
    }

    function photographerMediasVideo() {

        const card = createElement({
            type: 'article',
            className: ['photographer-media']
        })

        const params = {
            data: medias,
            options: {
                cardVideo: { src: photographerVideo, className: ['media-video'], id: `content-${id}` },
                cardLikes: { content: likes, id: medias.id, ariaLabel: `nombre de j'aime: ${likes}` },
                cardTitle: { content: title },
            }
        }

        const { cardVideo } = getMediaElements(params);

        const { mainContentContainer } = createMediaContent(params)

        appendElement(card, [cardVideo, mainContentContainer])

        

        return card;
    }

    function createMediaContent(params) {

        const { cardTitle, cardLikes, cardIcon } = getMediaElements(params);

        const mainContentContainer = createElement({
            type: 'div',
            className: ['photo__details']
        })

        const likesContainer = createElement({
            type: 'div',
            className: ['photographer-work-container-like']
        })

        appendElement(likesContainer, [cardLikes, cardIcon])
        appendElement(mainContentContainer, [cardTitle, likesContainer])

        return { mainContentContainer }
    }

    function photographerMediasInfo() {
        const main = document.querySelector('main');


        const sectionInfo = createElement({
            type: 'section',
            className: ['section-info']
        })

        const params = {
            data: medias,
            options: {
                cardVideo: { src: photographerVideo, className: ['media-video'] },
            }
        }

        const { cardLikes, cardPrice } = getMediaElements(params);

        appendElement(sectionInfo, [cardLikes, cardPrice])
        appendElement(main, [sectionInfo])
    }



    return { photographerMediasPicture, photographerMediasVideo, photographerMediasInfo }
}

export { mediaFactory }