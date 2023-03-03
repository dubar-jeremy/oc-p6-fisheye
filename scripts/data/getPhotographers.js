/* eslint-disable no-unused-vars */
async function getPhotographers() {

    const response = await fetch('data/photographers.json');

    if (!response.ok) {
        throw new Error("Data not found");
    }

    const { photographers, media } = await response.json()

    return {
        photographers,
        media
    }
}