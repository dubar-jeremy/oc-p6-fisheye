import { photographerFactory } from '../../factories/photographer.factory.js'
import { renderMondal } from '../contact/contact.modal.js'
import { appendElement } from '../shared/dom/appendElement.js'

function photographerHeader(photographer) {
    renderMondal(photographer)
    const photographHeader = document.querySelector('.photograph-header')
    photographHeader.setAttribute('aria-label', photographer.name)
    const photographerModel = photographerFactory(photographer)
    const { photographerInfo, photographerPicture } = photographerModel.photographerPageCard()
    appendElement(photographHeader, [photographerInfo, photographerPicture])
}

export { photographerHeader }
