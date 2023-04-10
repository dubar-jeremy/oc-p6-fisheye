import { infoFactory } from '../../factories/info.factory.js'

function photographerSectionInfo(media, price) {
    let countTotalLikes = 0

    media.forEach((element) => {
        countTotalLikes += element.likes
    })

    media.countTotalLikes = countTotalLikes

    const photographerInfoModel = infoFactory(media, price)

    photographerInfoModel.getPhotographerInfo()
}

export { photographerSectionInfo }
