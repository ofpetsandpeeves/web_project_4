import "./index.css";
import {
  initialCards,
  objects,
  editButton,
  addButton,
  addCardForm,
  formName,
  formJob,
  imageModalTitle,
  imageModalLink,
  profileName,
  profileJob
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
    renderer: (items) => {
      cards.addItem(createCards(items));
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
  submitHandler: (item) => {
    document.querySelector(".photo-grid").prepend(createCards(item));
  }
});
editImageForm.setEventListeners();
// event for edit image form click
addButton.addEventListener("click", () =>
{
  editImageForm.open();
})


// edit profile info
const userInput = new UserInfo({
  name: ".profile__title",
  job: ".profile__subtitle"
})

// edit profile form
const editProfileForm = new PopupWithForm({
  popupSelector: ".modal_type_profile",
  submitHandler: (item) =>
  {
    const userInput = new UserInfo(item);
    userInput.setUserInfo();
  }
  })

editProfileForm.setEventListeners();


//click event for edit profile form
editButton.addEventListener("click", () => {
  userInput.getUserInfo();
  editProfileForm.open();
})


const formArray = Array.from(document.querySelectorAll(objects.formSelector));
formArray.forEach((element)=> {
  const formValidation = new FormValidator(objects, element);
  formValidation.enableValidation();
})



/*
edit profile form:
  - form input values on open() do not reflect text content of h1 and p
  - on submit, form h1 (name) is the only one saved to DOM

add image form:
  - submit works but returns a blank card to DOM with no info

validator:
  - error in console about null value when trying to work with classList on close button

misc:
  - check what consoles for private input values in submit for PopupWithForm setEventListeners();
*/
