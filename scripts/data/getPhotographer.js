async function getPhotographerById(id) {

    const response = await fetch('./data/photographers.json');

    if (!response.ok) {
        throw new Error("Data not found");
    }

    const { photographers, media } = await response.json()

    const photographer = photographers.find(photographer => photographer.id === id);
    const photographerMedia = media.filter(photographerMedia => photographerMedia.photographerId === id);
    
    const data = {
        photographer: photographer,
        media: photographerMedia
    }

    return data
}

export { getPhotographerById }