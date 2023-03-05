/* eslint-disable no-unused-vars */
function createElement(elementProperties) {
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
        element.setAttribute("tabindex", 0)  
    }

    if(elementProperties.type === "a"){
        element.setAttribute("href", elementProperties?.href);
        element.setAttribute("target", elementProperties?.target);    
    }

    if(elementProperties.type === "button"){
        element.innerHTML = elementProperties?.content
        element.name = elementProperties?.name
    }

    if(elementProperties.type === "video"){
        const videoSource = document.createElement('source');
        videoSource.setAttribute('src', elementProperties?.src);
        element.appendChild(videoSource);
        element.setAttribute('controls', '');
        // element.setAttribute('width', elementProperties?.width);
        // element.setAttribute('height', elementProperties?.height);
    }
        
    return element;
}