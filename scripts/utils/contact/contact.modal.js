function displayModal(photographerName) {
    const modal = document.getElementById("contact_modal");
    const contact_me = document.querySelector(".contact_me");
    const close_btn = document.querySelector('.close_button');
    close_btn.setAttribute('name', 'close contact form')
    close_btn.setAttribute('role', 'button')
    contact_me.innerHTML = 'Contactez moi ' + photographerName
    modal.style.display = "block";

    keyboardFocus()
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function keyboardFocus(){
    const modal = document.getElementById("contact_modal");
    const sendButton = modal.querySelector(".validate_form");
    const firstFocusableElement = modal.querySelector("[tabindex='0']");

    sendButton.addEventListener("keydown", function (e) {
        if (e.key === "Tab" && !e.shiftKey) {
            e.preventDefault();
            firstFocusableElement.focus();
        }
    });
}

function renderMondal(photographer) {
    document.querySelector('.contact_button').addEventListener('click', () => {
        displayModal(photographer.name)
    })
    document.querySelector('.close_button').addEventListener('click', closeModal)
    document.querySelector('.close_button').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            closeModal()
        }
    });
}

export { renderMondal }