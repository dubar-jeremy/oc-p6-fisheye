import { photographerHeader } from '../utils/photographer/photographer.header.js'
import { photographerSection } from '../utils/photographer/photographer.section.js'
import { getUrlParam } from '../utils/getUrlParam.js'
import { getPhotographerById } from '../data/getPhotographer.js'
import { photographerSectionInfo } from '../utils/photographer/photographer.section-info.js'
import { photographerMedias } from '../utils/photographer/photographer.medias.js'
import { createFilters } from '../utils/filter/filter.create.js'
import { lightBoxContainer } from '../utils/lightbox/container.lightbox.js'
import { initLightbox } from '../utils/lightbox/init.lightbox.js'

const DEFAULT_OPTIONS = {
    createHeader: true,
    sectionInfo: true,
    createSectionWork: true,
    createSectionFilter: true,
    createLightbox: true,
}

async function displayData(photographer, options = DEFAULT_OPTIONS) {
    const { createHeader, sectionInfo, createSectionWork, createSectionFilter, createLightbox } = options

    createHeader && photographerHeader(photographer.photographer)
    createSectionFilter && createFilters(photographer)
    createSectionWork && photographerSection()
    sectionInfo && photographerSectionInfo(photographer.media, photographer.photographer.price)
    createLightbox && lightBoxContainer()

    photographerMedias(photographer)
}

async function init() {
    const userId = getUrlParam('userId')
    const photographer = await getPhotographerById(Number(userId))

    displayData(photographer)
    initLightbox(photographer.media)
}

init()

export { displayData }
