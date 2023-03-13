import { photographerFactory } from "../../factories/photographer.factory.js";
import { appendElement } from "../shared/dom/appendElement.js";
import { closeModal, displayModal } from '../contactForm.js'

function photographerHeader(photographer) {
    const photographHeader = document.querySelector('.photograph-header');
    // to do add that in generic function
    document.querySelector('.contact_button').addEventListener('click', displayModal)
    document.querySelector('.close_button').addEventListener('click', closeModal)
    photographHeader.setAttribute("aria-label", photographer.name)
    /// end
    const photographerModel = photographerFactory(photographer);
    const { photographerInfo, photographerPicture } = photographerModel.photographerPageCard()
    appendElement(photographHeader, [photographerInfo, photographerPicture])
}

export { photographerHeader }