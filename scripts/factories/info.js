/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function infoFactory(medias) {

    const { title, likes } = medias


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