/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
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

