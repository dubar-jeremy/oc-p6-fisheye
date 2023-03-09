import { mediaFactory } from "../../factories/media.factory.js";
function photographerMedias(photographer){
    const section = document.querySelector('.section-work')

    photographer.media.forEach((media) => {
        const photographerMediaModel = mediaFactory(media, photographer.photographer.name)
        if (media.image && !media.video) {
            const userCardDOM = photographerMediaModel.photographerMediasPicture();
            section.appendChild(userCardDOM);
        }

        if (media.video && !media.image) {
            const userCardDOM = photographerMediaModel.photographerMediasVideo();
            section.appendChild(userCardDOM);
        }

    });
}

export { photographerMedias }