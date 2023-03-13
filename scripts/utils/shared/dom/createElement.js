function createElement(elementProperties) {
    const element = document.createElement(elementProperties?.type);
    
    element.textContent = elementProperties?.content
    elementProperties?.className && elementProperties.className.map(c => element.classList.add(c))


    if(elementProperties?.ariaLabel){
        element.setAttribute("aria-label", elementProperties.ariaLabel);
    }
    if(elementProperties?.role) {
        element.setAttribute("role", elementProperties.role);
    }

    if(elementProperties.type === "img"){
        element.setAttribute("alt", elementProperties?.alt);
        element.setAttribute("src", elementProperties?.src);  
    }

    if(elementProperties.type === "a"){
        element.setAttribute("href", elementProperties?.href);
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
    }
        
    return element;
}

export { createElement }