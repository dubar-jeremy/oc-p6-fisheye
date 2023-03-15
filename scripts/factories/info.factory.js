import { createElement } from "../utils/shared/dom/createElement.js";
import { appendElement } from "../utils/shared/dom/appendElement.js";
import { getMediaElements } from "../utils/media/media.elements.js";

function infoFactory(medias, price) {

    function getPhotographerInfo(){
        const main = document.querySelector('main');
        
        
        const sectionInfo = createElement({
            type: 'section',
            className: ['section-info']
        })
    
        const params = {
            data: medias,
            options: {
                cardLikes: { content: medias.countTotalLikes, id: medias.id, className: ["photo__likes-count", "totalLikes"] },
                cardPrice: { content: price },
            }
        }

        const { cardLikes, cardPrice } = getMediaElements(params);

        appendElement(sectionInfo, [cardLikes, cardPrice])
        appendElement(main, [sectionInfo])
    }

    return { getPhotographerInfo }
}

export { infoFactory }