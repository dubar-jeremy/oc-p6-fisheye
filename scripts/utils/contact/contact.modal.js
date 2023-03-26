function displayModal(photographerName) {
    const modal = document.getElementById("contact_modal");
    const contactTitle = document.querySelector(".contact_me");
    const closeBtn = document.querySelector(".close_button");
  
    closeBtn.setAttribute("name", "close contact form");
    closeBtn.setAttribute("role", "button");
    contactTitle.textContent = `Contactez moi ${photographerName}`;
    modal.style.display = "block";
  
    modal.querySelector("[tabindex='0']").focus();
  }

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function handleKeyboardNavigation(e) {
    const modal = document.getElementById("contact_modal");
    const sendButton = modal.querySelector("#send_form");
    const firstFocusableElement = modal.querySelector("[tabindex='0']");
    const lastFocusableElement = modal.querySelector("#send_form");
    const focusableElements = modal.querySelectorAll("input, textarea, button, [tabindex='0']");
  
    if (e.key === "Escape") {
      closeModal();
      return;
    }
  
    if (e.key === "Tab") {
      e.preventDefault();
  
      if (!e.shiftKey && document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        return;
      }
  
      if (e.shiftKey && document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        return;
      }
  
      for (let i = 0; i < focusableElements.length; i++) {
        if (document.activeElement === focusableElements[i]) {
          const nextElement = focusableElements[i + (e.shiftKey ? -1 : 1)] || firstFocusableElement;
          nextElement.focus();
          break;
        }
      }
    }
  
    if (e.key === "Enter" && document.activeElement === sendButton) {
      handleSubmitForm(e);
      return;
    }
  }
  
  
  

  function handleSubmitForm(e) {
    e.preventDefault();
  
    const form = document.querySelector("#contact_form");
    const formData = new FormData(form);
  
    const data = {};
  
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
  
    console.log("formData: ", data);
  
    closeModal();
  }

function renderMondal(photographer) {
    const contactButton = document.querySelector(".contact_button");
    const modal = document.getElementById("contact_modal");
    const closeBtn = document.querySelector(".close_button");
    const sendButton = modal.querySelector("#send_form");
  
    contactButton.addEventListener("click", () => {
      displayModal(photographer.name);
    });
  
    modal.addEventListener("keydown", handleKeyboardNavigation);
  
    closeBtn.addEventListener("click", closeModal);
    closeBtn.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        closeModal();
      }
    });
  
    sendButton.addEventListener("click", handleSubmitForm);
  }

export { renderMondal }