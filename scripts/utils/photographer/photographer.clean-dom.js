function cleanDom() {
    const section = document.querySelector('.section-work')
    if (section) {
        section.remove()
    }
}

export { cleanDom }
