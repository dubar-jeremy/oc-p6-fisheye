/* eslint-disable no-unused-vars */
function elementBuilder(elementProperties) {
    const element = document.createElement(elementProperties?.type);
    element.textContent = elementProperties?.content
    elementProperties?.className && elementProperties.className.map(c => element.classList.add(c))

    element.setAttribute("aria-label", elementProperties?.ariaLabel);

    if(elementProperties?.role) {
        element.setAttribute("role", elementProperties.role);
    }

    if(elementProperties.type === "img"){
        element.setAttribute("alt", elementProperties?.alt);
        element.setAttribute("src", elementProperties?.src);    
    }

    if(elementProperties.type === "a"){
        element.setAttribute("href", elementProperties?.href);
        element.setAttribute("target", elementProperties?.target);    
    }

    return element;
}