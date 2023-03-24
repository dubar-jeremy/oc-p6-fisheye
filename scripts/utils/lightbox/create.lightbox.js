import { lightboxFactory } from "../../factories/lightbox.factory.js";
import { appendElement } from "../shared/dom/appendElement.js";

function createLightbox(medias) {
    // sélectionne tous les éléments dont l'ID commence par "content-"
    const elements = document.querySelectorAll('[id^="content-"]');
    const main = document.querySelector('main');
    // boucle à travers les éléments et ajoute un event listener pour le clic
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            const lightboxModel = lightboxFactory(element)
            const lightbox = lightboxModel.createLightbox(medias)
            appendElement(main, [lightbox])
            document.querySelector('.close_lightbox').addEventListener('click', () => {
                console.log('clicked')
            })
        });
    });
}

export { createLightbox }