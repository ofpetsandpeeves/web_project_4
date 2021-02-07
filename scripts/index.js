// Modal related elements
let openPopup = document.querySelector(".edit-button");
let popupActive = document.querySelector(".popup");
let closePopup = document.querySelector(".close-btn");
let saveButton = document.querySelector(".submit-button");

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

// Form related elements 
let form = document.querySelector(".popup__form");

// Events handling form input
form.addEventListener("submit", function (event) {
    event.preventDefault();
});


