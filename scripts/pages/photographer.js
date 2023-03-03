/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
async function displayData(photographer){

    // header
    const photographHeader = document.querySelector('.photograph-header');
    const photographerModel = photographerFactory(photographer.photographer);
    const {photographerInfo, photographerPicture}  = photographerModel.photographerPageCard()
    appendElement(photographHeader, [photographerInfo, photographerPicture])

    // main content

    const main = document.querySelector('main');

    const section = createElement({
        type: 'section',
        className: ['section-work']
    })

    appendElement(main, [section])

    photographer.media.forEach((media) => {
        const photographerMediaModel = mediaFactory(media, photographer.photographer.name)
        if(media.image && !media.video){
            const userCardDOM = photographerMediaModel.photographerMediasPicture();
            section.appendChild(userCardDOM);
        }

        if(media.video && !media.image){
            const userCardDOM = photographerMediaModel.photographerMediasVideo();
            section.appendChild(userCardDOM);
        }
 
    });

}

async function init(){
    const userId = getUrlParam('userId')
    const photographer = await getPhotographerById(Number(userId))

    displayData(photographer)
}

init()

