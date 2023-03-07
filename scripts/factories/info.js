import { createElement } from "../utils/dom/createElement.js";
import { appendElement } from "../utils/dom/appendElement.js";
import { getMediaElements } from "../utils/dom/getMediaElements.js";
function infoFactory(medias) {

    function getPhotographerInfo(){
        const main = document.querySelector('main');
        
        
        const sectionInfo = createElement({
            type: 'section-info',
            className: ['section-info']
        })
    
        const params = {
            data: medias,
            options: {
                cardLikes: { content: 10 },
                cardPrice: { content: 200 },
            }
        }

        const { cardLikes, cardPrice } = getMediaElements(params);

        appendElement(sectionInfo, [cardLikes, cardPrice])
        appendElement(main, [sectionInfo])
    }




    return { getPhotographerInfo }
}

export { infoFactory }