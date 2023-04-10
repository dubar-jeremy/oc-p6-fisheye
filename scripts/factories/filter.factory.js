import { appendElement } from '../utils/shared/dom/appendElement.js'
import { createElement } from '../utils/shared/dom/createElement.js'

function filterFactory() {
    const container = createElement({
        type: 'div',
        className: ['container-filerby'],
    })

    const label = createElement({
        type: 'p',
        className: ['label-filterby'],
        content: 'Trier par',
    })

    appendElement(container, [label])

    const select = createElement({
        type: 'select',
        className: ['container-select'],
        ariaLabel: 'order by',
    })

    function createFilters(options) {
        options.forEach((element) => {
            const newElement = createElement({
                type: 'option',
                className: [`filter-${element.className}`],
                content: element.content,
            })
            appendElement(select, [newElement])
        })

        select.addEventListener('change', () => {
            const selectedIndex = select.selectedIndex
            if (selectedIndex >= 0) {
                options[selectedIndex].callBack()
            }
        })

        appendElement(container, [select])

        return container
    }

    return { createFilters }
}

export { filterFactory }
