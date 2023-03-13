import { appendElement } from "../utils/shared/dom/appendElement.js"
import { createElement } from "../utils/shared/dom/createElement.js"

function filterFactory() {

    const container = createElement({
        type: 'select',
        className: ['container-filter'],
        ariaLabel: 'order by'
    })

    function createFilters(options){

        options.forEach(element => {
            const newElement = createElement({
                type: 'option',
                className: [`filter-${element.className}`],
                content: element.content
            })
            appendElement(container, [newElement])
        });

        container.addEventListener('change', () => {
            const selectedIndex = container.selectedIndex;
            if(selectedIndex >= 0){
                options[selectedIndex].callBack()
            }
        })

        return container
    }

    return { createFilters }
}

export { filterFactory }