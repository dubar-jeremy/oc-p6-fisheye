/* eslint-disable no-undef */

async function getPhotographers() {

    const response = await fetch('/oc-p6-fisheye/data/photographers.json');

    if (!response.ok) {
        throw new Error("Data not found");
    }

    const { photographers, media } = await response.json()

    return {
        photographers,
        media
    }
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();

