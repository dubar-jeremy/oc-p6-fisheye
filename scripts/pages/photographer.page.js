import { photographerHeader } from '../utils/photographer/photographer.header.js';
import { photographerSection } from '../utils/photographer/photographer.section.js';
import { getUrlParam } from '../utils/getUrlParam.js';
import { getPhotographerById } from '../data/getPhotographer.js';
import { photographerSectionInfo } from '../utils/photographer/photographer.section-info.js';
import { photographerMedias } from '../utils/photographer/photographer.medias.js';
import { createFilters } from '../utils/filter/filter.create.js';


const DEFAULT_OPTIONS = {
    createHeader: true,
    sectionInfo: true,
    createSectionWork: true,
    createSectionFilter: true,
}

async function displayData(photographer, options = DEFAULT_OPTIONS) {

    const { createHeader, sectionInfo, createSectionWork, createSectionFilter } = options

    createHeader && photographerHeader(photographer.photographer)
    createSectionWork && photographerSection()
    sectionInfo && photographerSectionInfo(photographer.media);
    createSectionFilter && createFilters(photographer);

    photographerMedias(photographer);
}

async function init() {
    const userId = getUrlParam('userId')
    const photographer = await getPhotographerById(Number(userId))

    document.querySelector('.asc')

    // document.querySelector('.sort_title').addEventListener("click", () => {
    //     cleanDom()
    //     filterMedias(photographer.media, 'RECENT');

    //     const options = {
    //         createHeader: false,
    //         sectionInfo: false,
    //         createSectionWork: true,
    //         createSectionFilter: false,

    //     }

    //     displayData(photographer, options)

    // })

    displayData(photographer)
}

init()

export { displayData }

