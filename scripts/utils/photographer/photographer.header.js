import { photographerFactory } from "../../factories/photographer.factory.js";
import { appendElement } from "../shared/dom/appendElement.js";

function photographerHeader(photographer) {
    const photographHeader = document.querySelector('.photograph-header');
    const photographerModel = photographerFactory(photographer);
    const { photographerInfo, photographerPicture } = photographerModel.photographerPageCard()
    appendElement(photographHeader, [photographerInfo, photographerPicture])
}

export { photographerHeader }