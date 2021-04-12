import "./index.css";
import {
  initialCards,
  objects,
  editButton,
  addButton,
  formName,
  formJob
}
from "../utils/constants.js";

import Card from "../scripts/Card.js";
import Section from "../scripts/Section.js";
import FormValidator from "../scripts/FormValidator.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage";
import UserInfo from "../scripts/UserInfo";


// render initial cards on page and in popups
const createCards = cardItems => {
  const card = new Card(
    {
      cardItems,
      image: ({name, link}) => {
        imagePopup.open(name, link);
      }
    },
    ".photo-grid-template"
    );

    const cardElement = card.createCard();

    return cardElement;

}

const cards = new Section (
  {
    items: initialCards,
    renderer: (cardItems) => {
      cards.addItem(createCards(cardItems));
    },
  },
  ".photo-grid",
);
cards.renderElements();


// image modal popups
const imagePopup = new PopupWithImage(".modal_type_image-popup");
imagePopup.setEventListeners();


// edit image form
const editImageForm = new PopupWithForm(
  {
  popupSelector: ".modal_type_images",
  submitHandler: (cardItems) => {
    document.querySelector(".photo-grid").prepend(createCards(cardItems));
  }
});
editImageForm.setEventListeners();
// event for edit image form click
addButton.addEventListener("click", () =>
{
  editImageForm.open();

})


const userInformation = new UserInfo({
  nameTitle: ".profile__title",
  jobTitle: ".profile__subtitle"
});

// edit profile form
const editProfileForm = new PopupWithForm({
  popupSelector: ".modal_type_profile",
  submitHandler: () => {
    userInformation.setUserInfo(formName.value, formJob.value);
  }
});
editProfileForm.setEventListeners();

//click event for edit profile form
editButton.addEventListener("click", () => {
  editProfileForm.open();
  const {name, job} = userInformation.getUserInfo();
  formName.value = name;
  formJob.value = job;
})


const formArray = Array.from(document.querySelectorAll(objects.formSelector));
formArray.forEach((element)=> {
  const formValidation = new FormValidator(objects, element);
  formValidation.enableValidation();
})
