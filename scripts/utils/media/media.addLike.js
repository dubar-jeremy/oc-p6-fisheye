function addMediaLike(media) {
    const initialCounter = document.getElementById(media.id)

    const heart = initialCounter.nextElementSibling

    const totalLikes = document.querySelector('.totalLikes')

    let isLiked = false

    const addLikes = () => {
        if (!isLiked) {
            const newCount = Number(initialCounter.innerHTML) + 1
            initialCounter.innerHTML = newCount
            const newTotalLikes = Number(totalLikes.innerHTML) + 1
            totalLikes.innerHTML = newTotalLikes
            isLiked = true
        }
    }

    heart.addEventListener('click', addLikes)
    heart.addEventListener('keypress', addLikes)
}

export { addMediaLike }
