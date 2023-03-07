import { appendElement } from "../dom/appendElement.js"
import { createElement } from "../dom/createElement.js"

function photographerSection() {
    const main = document.querySelector('main');
    const section = createElement({
        type: 'section',
        className: ['section-work']
    })

    appendElement(main, [section])
}

export { photographerSection }