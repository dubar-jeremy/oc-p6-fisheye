/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
async function getPhotographerById(id) {

    const response = await fetch('/oc-p6-fisheye/data/photographers.json');

    if (!response.ok) {
        throw new Error("Data not found");
    }

    const { photographers, media } = await response.json()

    const photographer = photographers.find(photographer => photographer.id === id);
    const photographerMedia = media.filter(photographerMedia => photographerMedia.photographerId === id);
    
    const data = {
        photographer: photographer,
        media: photographerMedia
    }

    return data
}


async function init(){
    const userId = getUrlParam('userId')
    const photographer = await getPhotographerById(Number(userId))
    console.log(photographer)
    
}

init()

