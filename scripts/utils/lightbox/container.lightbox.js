import { lightboxFactory } from '../../factories/lightbox.factory.js'

function lightBoxContainer() {
    const lightboxModel = lightboxFactory()
    lightboxModel.createLightbox()
}

export { lightBoxContainer }
