let formNameInput = document.querySelector(".popup__form-control_type_name");
let formAboutMeInput = document.querySelector(".popup__form-control_type_about");

let profileName = document.querySelector(".profile__title");
let profileAboutMe = document.querySelector(".profile__subtitle");

let popup = document.querySelector(".popup"); //use when direct changes to modal

let clickEdit = document.querySelector(".edit-button"); // when you click edit this happens
let clickClose = document.querySelector(".close-btn");
let clickSave = document.querySelector(".submit-button");

function ravenOpenModal() {
  let open = popup.classList.toggle("popup_opened");

  if (!open) {
    event.preventDefault();
    profileName.textContent = formNameInput.value; //equal to the value
    profileAboutMe.textContent = formAboutMeInput.value;


  } else {
    formNameInput.value = profileName.textContent;
    formAboutMeInput.value = profileAboutMe.textContent;
  }
};

clickEdit.addEventListener("click", ravenOpenModal);
clickClose.addEventListener("click", ravenOpenModal);
clickSave.addEventListener("click", ravenOpenModal);








