import { photographerFactory } from "../../factories/photographer.js";
import { appendElement } from "../dom/appendElement.js";

function photographerHeader(photographer) {
    const photographHeader = document.querySelector('.photograph-header');
    const photographerModel = photographerFactory(photographer);
    const { photographerInfo, photographerPicture } = photographerModel.photographerPageCard()
    appendElement(photographHeader, [photographerInfo, photographerPicture])
}

export { photographerHeader }