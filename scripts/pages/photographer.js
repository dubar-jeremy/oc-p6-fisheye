/* eslint-disable no-undef */
async function init(){
    const photographerSection = document.querySelector(".photograph-header");
    const userId = getUrlParam('userId')
    const photographer = await getPhotographerById(Number(userId))
    const photographerModel = photographerFactory(photographer.photographer);
    const userCardDOM  = photographerModel.getUserCardDOM()
    photographerSection.appendChild(userCardDOM)
    
}

init()

