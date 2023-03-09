import { filterFactory } from "../../factories/filter.factory.js";
import { displayData } from "../../pages/photographer.page.js";
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

        }

        displayData(photographer, options)
    }

    const getPopulareMedia = () => {
        cleanDom()
        
        filterMedias(photographer.media, 'POPULARE');

        const options = {
            createHeader: false,
            sectionInfo: false,
            createSectionWork: true,
            createSectionFilter: false,

        }

        displayData(photographer, options)
    }

    const getAscMedia = () => {
        cleanDom()
        
        filterMedias(photographer.media, 'ASC');

        const options = {
            createHeader: false,
            sectionInfo: false,
            createSectionWork: true,
            createSectionFilter: false,

        }

        displayData(photographer, options)
    }


    const options = [
        { type: 'populaire', content: 'populare', className: 'populare', callBack: getPopulareMedia },
        { type: 'asc', content: 'asc', className: 'asc', callBack: getAscMedia },
        { type: 'date', content: 'date', className: 'date', callBack: getNewMedia },
    ]

    const filters = filterModel.createFilters(options)

    const main = document.querySelector('main');

    appendElement(main, [filters])

}

export { createFilters }