import { infoFactory } from "../../factories/info.factory.js"

function photographerSectionInfo(media) {
    const photographerInfoModel = infoFactory(media)

    photographerInfoModel.getPhotographerInfo()
}

export { photographerSectionInfo }