let form = document.querySelector(".popup__form");
let formNameInput = document.querySelector(".popup__form-control_type_name");
let formAboutMeInput = document.querySelector(".popup__form-control_type_about");
let profileName = document.querySelector(".profile__title");
let profileAboutMe = document.querySelector(".profile__subtitle");
let popup = document.querySelector(".popup"); //use when direct changes to modal
let onEdit = document.querySelector(".edit-button"); // when you click edit this happens
let onClose = document.querySelector(".close-btn");

function editPopupInputFields() {
  profileName.textContent = formNameInput.value; //equal to the value
  profileAboutMe.textContent = formAboutMeInput.value;
}

function popupInputFields() {
  formNameInput.value = profileName.textContent;
  formAboutMeInput.value = profileAboutMe.textContent;
}

function openModal() {
  popup.classList.toggle("popup_opened");
  popupInputFields();
  }

function closeModal() {
  popup.classList.toggle("popup_opened");
}

function submitModal(e) {
  e.preventDefault();
  editPopupInputFields();
  closeModal();
}

onEdit.addEventListener("click", openModal);
onClose.addEventListener("click", closeModal);
form.addEventListener("submit", submitModal);
