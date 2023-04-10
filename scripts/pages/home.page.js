import { photographerFactory } from '../factories/photographer.factory.js'
import { getPhotographers } from '../data/getPhotographers.js'

async function displayData(photographers) {
    const photographersSection = document.querySelector('.photographer-section')

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer)
        const userCardDOM = photographerModel.homePageCard()
        photographersSection.appendChild(userCardDOM)
    })
}

async function init() {
    const { photographers } = await getPhotographers()
    displayData(photographers)
}

init()
