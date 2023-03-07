import { infoFactory } from "../../factories/info.js"
function photographerSectionInfo(media) {
    const photographerInfoModel = infoFactory(media)

    photographerInfoModel.getPhotographerInfo()
}

export { photographerSectionInfo }