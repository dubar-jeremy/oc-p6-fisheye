import { appendElement } from "../utils/shared/dom/appendElement.js"
import { createElement } from "../utils/shared/dom/createElement.js"

function filterFactory() {

    const container = createElement({
        type: 'div',
        className: ['container-filter']
    })

    function createFilters(options){

        options.forEach(element => {
            const newElement = createElement({
                type: 'button',
                className: [`filter-${element.className}`],
                content: element.content
            })

            newElement.addEventListener('click', element.callBack)

            appendElement(container, [newElement])
        });

        return container
    }

    return { createFilters }
}

export { filterFactory }