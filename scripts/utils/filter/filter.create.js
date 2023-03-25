import { filterFactory } from "../../factories/filter.factory.js";
import { displayData } from "../../pages/photographer.page.js";
import { initLightbox } from "../lightbox/init.lightbox.js";
import { filterMedias } from "../media/media.filter.js";
import { cleanDom } from "../photographer/photographer.clean-dom.js";
import { appendElement } from "../shared/dom/appendElement.js";

function createFilters(photographer) {

    const filterModel = filterFactory();

    const getNewMedia = () => {
        cleanDom()

        filterMedias(photographer.media, 'RECENT');

        const options = {
            createHeader: false,
            sectionInfo: false,
            createSectionWork: true,
            createSectionFilter: false,
            createLightbox: false
        }

        displayData(photographer, options)
        initLightbox()
    }

    const getPopulareMedia = () => {
        cleanDom()
        
        filterMedias(photographer.media, 'POPULARE');

        const options = {
            createHeader: false,
            sectionInfo: false,
            createSectionWork: true,
            createSectionFilter: false,
            createLightbox: false

        }

        displayData(photographer, options)
        initLightbox()
    }

    const getAscMedia = () => {
        cleanDom()
        
        filterMedias(photographer.media, 'ASC');

        const options = {
            createHeader: false,
            sectionInfo: false,
            createSectionWork: true,
            createSectionFilter: false,
            createLightbox: false

        }

        displayData(photographer, options)
        initLightbox()
    }


    const options = [
        { type: 'populaire', content: 'popularité', className: 'populare', callBack: getPopulareMedia },
        { type: 'date', content: 'date', className: 'date', callBack: getNewMedia },
        { type: 'asc', content: 'titre', className: 'asc', callBack: getAscMedia },
    ]

    const filters = filterModel.createFilters(options)

    const main = document.querySelector('main');

    appendElement(main, [filters])

}

export { createFilters }