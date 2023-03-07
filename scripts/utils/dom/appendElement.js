function appendElement(parent, option){
    option.forEach(el => {
        return parent.appendChild(el);
    });   
}

export { appendElement }