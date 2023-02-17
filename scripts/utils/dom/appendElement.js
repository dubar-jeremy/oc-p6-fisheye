/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function appendElement(parent, option){
    console.log(parent)
    option.forEach(el => {
        return parent.appendChild(el);
    });   
}