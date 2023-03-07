/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function photographerHeader(photographer) {
    const photographHeader = document.querySelector('.photograph-header');
    const photographerModel = photographerFactory(photographer);
    const { photographerInfo, photographerPicture } = photographerModel.photographerPageCard()
    appendElement(photographHeader, [photographerInfo, photographerPicture])
}