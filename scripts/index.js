let form = document.querySelector(".popup__form");
let formNameInput = document.querySelector(".popup__form-control_type_name");
let formAboutMeInput = document.querySelector(".popup__form-control_type_about");

let profileName = document.querySelector(".profile__title");
let profileAboutMe = document.querySelector(".profile__subtitle");

let popup = document.querySelector(".popup"); //use when direct changes to modal

let onEdit = document.querySelector(".edit-button"); // when you click edit this happens
let onClose = document.querySelector(".close-btn");


function ravenOpenModal(e) {
  let open = popup.classList.toggle("popup_opened");

  if (!open) {
    e.preventDefault();
    profileName.textContent = formNameInput.value; //equal to the value
    profileAboutMe.textContent = formAboutMeInput.value;

  } else {
    formNameInput.value = profileName.textContent;
    formAboutMeInput.value = profileAboutMe.textContent;
  }};

function exitWithoutSave () {
  let open = popup.classList.toggle("popup_opened");

  if (!open) {
    formNameInput.value = profileName.textContent;
    formAboutMeInput.value = profileAboutMe.textContent;
}};



onEdit.addEventListener("click", ravenOpenModal);
onClose.addEventListener("click", exitWithoutSave);
form.addEventListener("submit", ravenOpenModal);







