/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function getMediaElements(props) {
    const { data, options } = props

    return {
        cardVideo: createElement({
            type: 'video',
            src: options?.cardVideo?.src ?? data?.video,
            className: options?.cardVideo?.className ?? ["card-video"],
        }),
    }
}