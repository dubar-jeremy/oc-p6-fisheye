import { photographerHeader } from '../utils/photographer/photographer.header.js';
import { photographerSection } from '../utils/photographer/photographer.section.js';
import { getUrlParam } from '../utils/getUrlParam.js';
import { getPhotographerById } from '../data/getPhotographer.js';
import { photographerSectionInfo } from '../utils/photographer/photographer.section-info.js';
import { photographerMedias } from '../utils/photographer/photographer.medias.js';
import { filterMedias } from '../utils/photographer/filterMedias.js';
import { cleanDom } from '../utils/photographer/cleanDom.js';


async function displayData(photographer, options = {
    createHeader: true,
    sectionInfo: true,
    createSectionWork: true
}) {

    const { createHeader, sectionInfo, createSectionWork } = options

    createHeader && photographerHeader(photographer.photographer)
    createSectionWork && photographerSection()
    sectionInfo && photographerSectionInfo(photographer.media);

    photographerMedias(photographer);
}

async function init() {
    const userId = getUrlParam('userId')
    const photographer = await getPhotographerById(Number(userId))

    document.querySelector('.sort_title').addEventListener("click", () => {
        cleanDom()
        filterMedias(photographer.media, 'RECENT');

        const options = {
            createHeader: false,
            sectionInfo: false,
            createSectionWork: true

        }

        displayData(photographer, options)

    })

    displayData(photographer)
}

init()

