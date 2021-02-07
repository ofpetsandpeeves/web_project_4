// Modal related elements
let openPopup = document.querySelector(".edit-button");
let popupActive = document.querySelector(".popup");
let closePopup = document.querySelector(".close-btn");
let saveButton = document.querySelector(".submit-button");

// Form related elements 
let modalForm = document.querySelector(".popup__form");
let formNameInput = modalForm.querySelector(".popup__form-control_type_name");
let formTitleInput = modalForm.querySelector(".popup__form-control_type_about");

let formName = document.querySelector(".profile__title");
let formTitle = document.querySelector(".profile__subtitle");


// Events handling open and closing of modal
openPopup.addEventListener("click", function() {
    popupActive.classList.add("popup_opened");
});

closePopup.addEventListener("click", function () {
    popupActive.classList.remove("popup_opened");
});

saveButton.addEventListener("click", function () {
    popupActive.classList.remove("popup_opened");
});


// Events handling form input
modalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formName.textContent = formNameInput.value;
    formTitle.textContent = formTitleInput.value;
});







