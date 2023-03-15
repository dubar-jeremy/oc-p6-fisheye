function addMediaLike(media){
    const initialCounter = document.getElementById(media.id);
    const heart = initialCounter.nextElementSibling;

    const totalLikes = document.querySelector('.totalLikes');

    heart.addEventListener('click', () => {
        const newCount = Number(initialCounter.innerHTML) + 1;
        initialCounter.innerHTML = newCount;
        const newTotalLikes = Number(totalLikes.innerHTML) + 1;
        totalLikes.innerHTML = newTotalLikes
    });
}

export { addMediaLike }