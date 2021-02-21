// variables related to forms/modals
// toggle for addphoto modal modifier visibility

// toggle for profile modal modifier for visbility
const profileModal = document.querySelector(".modal_type_profile");
// form for profile modal currently-- may have to update for capturing image form info
const profileForm = document.querySelector(".modal__form");
const imageForm = document.querySelector(".modal__form_images");
// const for modal_type_imagepopup
const imageModalPopup = document.querySelector(".modal_type_image-popup");
const addPhotoModal = document.querySelector(".modal_type_images");
// Variables for array iteration
// set up for array clone- photo-grid__container li = template
const photoGridList = document.querySelector(".photo-grid");


// variables related to forms/modals content
const formAboutMeInput = document.querySelector(".modal__form-control_type_about");
const formNameInput = document.querySelector(".modal__form-control_type_name");
const profileAboutMe = document.querySelector(".profile__subtitle");
const profileName = document.querySelector(".profile__title");

// variables related to buttons
const addButton = document.querySelector(".add-button");
const closeButton = document.querySelector(".close-btn");

const editButton = document.querySelector(".edit-button");
const closeAddImageButton = document.querySelector(".close-btn_images");

const photoPopupCloseButton = document.querySelector(".close-btn_images-popup");



//functions
//form input values
function editModalInputFields() {
  profileName.textContent = formNameInput.value; //equal to the value
  profileAboutMe.textContent = formAboutMeInput.value;
}
function modalInputFields() {
  formNameInput.value = profileName.textContent;
  formAboutMeInput.value = profileAboutMe.textContent;
}

// toggle modal windows
function toggleModalWindows(modal) {
  modal.classList.toggle("modal_opened");
}
// Open profile edit button
function openProfileModal() {
  if(!profileModal.classList.contains("modal_opened")) {
    modalInputFields();
  }
  toggleModalWindows(profileModal);
}
// submit handler for profile modal
function submitProfileModal(e) {
  e.preventDefault();
  editModalInputFields();
  toggleModalWindows(profileModal);
}


// open profile modal
editButton.addEventListener("click", openProfileModal);
// close profile modal
closeButton.addEventListener("click", () => {
  toggleModalWindows(profileModal);
});
// submit profile modal
profileForm.addEventListener("submit", submitProfileModal);

addButton.addEventListener("click", () => {
  toggleModalWindows(addPhotoModal);
});

//closeAddImage
closeAddImageButton.addEventListener("click", () => {
  toggleModalWindows(addPhotoModal);
});

photoPopupCloseButton.addEventListener("click", () => {
  toggleModalWindows(imageModalPopup);
});

// submit handler
imageForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  const imageModalTitle = document.querySelector(".modal__form-control_type_title");
  const imageModalLink = document.querySelector(".modal__form-control_type_image");
  const newPhotoTitle = imageModalTitle.value;
  const newPhotoImage = imageModalLink.value;

  const newImageObject = {
    name: `${newPhotoTitle}`,
    link: `${newPhotoImage}`
  };

  const newCard = createCardElement(newImageObject);
  photoGridList.prepend(newCard);
  toggleModalWindows(addPhotoModal);
});


const initialCards = [
  {
    name: "Nebula",
    link: "./images/RavenSeamusNebulaFixedScaling.jpg",
    text: "Nebula"
  },
  {
    name: "Utah",
    link: "./images/NyanSawyerFixed.jpg",
    text: "Utah"
  },
  {
    name: "Milky Way",
    link: "./images/HeyThereFinallyAwakeFixed.jpg",
    text: "Milky way"
  },
  {
    name: "Space Station",
    link: "./images/SpaceStationSawyerFixedScaling.jpg",
    text: "Space station"
  },
  {
    name: "Moon",
    link: "./images/ravenmoon.jpg",
    text: "Moon"
  },
  {
    name: "Earth",
    link: "./images/SeamusOceanDuckeeScalefix.jpg",
    text: "Earth"
  }
];


function createCardElement(data) {
  const photoGridTemplate = document.querySelector(".photo-grid-template").content.querySelector(".photo-grid__container");
  // add to me- wrapper

  const photoGridElement = photoGridTemplate.cloneNode(true);
  const photoGridImage = photoGridElement.querySelector(".photo-grid__image");
  const photoGridTitle = photoGridElement.querySelector(".photo-grid__title");

  photoGridTitle.textContent = data.name;
  photoGridImage.src = data.link;
  photoGridImage.alt = data.text;

  const photoGridDeleteButton = photoGridElement.querySelector(".delete-btn");
  const likeButton = photoGridElement.querySelector(".like-button");

// toggle like
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("like-button_active");
});

//event for deleting images
photoGridDeleteButton.addEventListener("click", function () {
  const photoGridItem = photoGridDeleteButton.closest(".photo-grid__container");
  photoGridItem.remove();
});

  // toggle image popup modal with correct info
photoGridImage.addEventListener("click", () => {
  const photoGridPopupImage = document.querySelector(".image-popup__image");
  const photoGridPopupTitle = document.querySelector(".image-popup__title");
  photoGridPopupImage.src = data.link;
  photoGridPopupTitle.textContent = data.name;
  toggleModalWindows(imageModalPopup);
  });

  return photoGridElement;
}


initialCards.forEach(data => {
  const card = createCardElement(data);
  photoGridList.prepend(card);
});
















