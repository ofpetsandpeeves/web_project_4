import "./index.css";
import {
  initialCards,
  objects,
  editButton,
  addButton,
  formName,
  formJob,
  editProfileImage
}
from "../utils/constants.js";

import Card from "../scripts/Card.js";
import Section from "../scripts/Section.js";
import FormValidator from "../scripts/FormValidator.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage";
import UserInfo from "../scripts/UserInfo";
import Api from "../scripts/Api";


const api = new Api({
  baseLink: "https://around.nomoreparties.co/v1/group-7",
  headers: {
    authorization: "73cfa46d-7987-4709-aab7-bbc2959efd68",
    "Content-Type": "application/json"
  }
});

// initial card pull
api.getInitialCards()
.then(res => {
  const cards = new Section (
    {
      items: res,
      renderer: (cardItems) => {
        cards.addItem(createCards(cardItems));
      },
    },
    ".photo-grid",
  );
  cards.renderElements();
})

const userInformation = new UserInfo({
  nameTitle: ".profile__title",
  jobTitle: ".profile__subtitle"
});

// user info
api.pullUserData()
.then(res => {
  userInformation.setUserInfo(res.name, res.about)
})


// render initial cards on page and in popups
const createCards = cardItems => {
  const card = new Card(
    {
      cardItems,
      image: ({name, link}) => {
        imagePopup.open(name, link);
      },
      handleDeleteCard: (card) => {
        deleteImageForm.open();
        deleteImageForm.setEventListeners(() => {
          api.deleteCard(card.getId())
          .then( res => {
            console.log(res);
          })
        })
      }
    },
    ".photo-grid-template"
    );

    const cardElement = card.createCard();

    return cardElement;
}


// image modal popups
const imagePopup = new PopupWithImage(".modal_type_image-popup");
imagePopup.setEventListeners();


// edit image form
const editImageForm = new PopupWithForm(
  {
  popupSelector: ".modal_type_images",
  submitHandler: (cardItems) => {
    api.postNewCard(cardItems)
      .then( res => {
        document.querySelector(".photo-grid").prepend(createCards(cardItems));
      })
  }
});

const deleteImageForm = new PopupWithForm(
  {
    popupSelector: ".modal_type_delete-card",
    submitHandler: (cardItems) => {
      api.deleteCard(cardItems)
        .then(res => {
          console.log(res);
        })
    }
  }
)

editImageForm.setEventListeners();
// event for edit image form click
addButton.addEventListener("click", () =>
{
  editImageForm.open();

})


// edit profile form
const editProfileForm = new PopupWithForm({
  popupSelector: ".modal_type_profile",
  submitHandler: (data) => {
    userInformation.setUserInfo(formName.value, formJob.value)
    api.patchUserData(data);
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

// edit image form
const profileImageForm = new PopupWithForm(
  {
  popupSelector: ".modal_type_edit-image",
  submitHandler: (data) => {
    console.log(data);
  }
})
profileImageForm.setEventListeners()

// edit image form click event open
editProfileImage.addEventListener("click", () => {
  profileImageForm.open();
})


const formArray = Array.from(document.querySelectorAll(objects.formSelector));
formArray.forEach((element)=> {
  const formValidation = new FormValidator(objects, element);
  formValidation.enableValidation();
})
