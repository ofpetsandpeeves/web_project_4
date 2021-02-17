// variables related to forms/modals
const addPhotoModal = document.querySelector(".modal-images"); // toggle for addphoto modal modifier visibility
const profileForm = document.querySelector(".modal__form"); // form for profile modal
const profileModal = document.querySelector(".modal"); // toggle for profile modal modifier for visbility

// variables related to forms/modals content
const formAboutMeInput = document.querySelector(".modal__form-control_type_about");
const formNameInput = document.querySelector(".modal__form-control_type_name");
const profileAboutMe = document.querySelector(".profile__subtitle");
const profileName = document.querySelector(".profile__title");

// variables related to buttons
const addButton = document.querySelector(".add-button");
const closeButton = document.querySelector(".close-btn");
const createButton = document.querySelector(".create-button");
const editButton = document.querySelector(".edit-button");
const closeAddImageButton = document.querySelector(".close-btn_images");
const likeButton = document.querySelector(".like-button");

//functions
function editModalInputFields() {
  profileName.textContent = formNameInput.value; //equal to the value
  profileAboutMe.textContent = formAboutMeInput.value;
}

function modalInputFields() {
  formNameInput.value = profileName.textContent;
  formAboutMeInput.value = profileAboutMe.textContent;
}

// edit button
function openProfileModal() {
  profileModal.classList.toggle("modal_opened");
  modalInputFields();
}

function openAddImageModal() {
  addPhotoModal.classList.toggle("modal-images_opened");
}

// close button on edit profile
function closeProfileModal() {
  profileModal.classList.toggle("modal_opened");
}

function closeAddImageModal() {
  addPhotoModal.classList.toggle("modal-images_opened")
}

function submitProfileModal(e) {
  e.preventDefault();
  editModalInputFields();
  closeProfileModal();
}

editButton.addEventListener("click", openProfileModal);
closeButton.addEventListener("click", closeProfileModal);
profileForm.addEventListener("submit", submitProfileModal);
addButton.addEventListener("click", openAddImageModal);
closeAddImageButton.addEventListener("click", closeAddImageModal);


const initialCards = [
  {
    name: "Nebula",
    link: "./images/RavenSeamusNebulaFixedScaling.jpg"
  },
  {
    name: "Utah",
    link: "./images/NyanSawyerFixed.jpg"
  },
  {
    name: "Milky Way",
    link: "./images/HeyThereFinallyAwakeFixed.jpg"
  },
  {
    name: "Space Station",
    link: "./images/SpaceStationSawyerFixedScaling.jpg"
  },
  {
    name: "Moon",
    link: "./images/ravenmoon.jpg"
  },
  {
    name: "Earth",
    link: "./images/SeamusOceanDuckeeScalefix.jpg"
  }
];

initialCards.forEach(data => {
    const photoGridTemplate = document.querySelector(".photo-grid-template").content.querySelector(".photo-grid__container");
    const photoGridElement = photoGridTemplate.cloneNode(true);

    const photoGridImage = photoGridTemplate.querySelector(".photo-grid__image");
    const photoGridTitle = photoGridTemplate.querySelector(".photo-grid__title");

    const photoGridLikeButton = photoGridTemplate.querySelector(".like-button");
    const photoGridDeleteButton = photoGridTemplate.querySelector(".delete-btn");

    photoGridTitle.textContent = data.name;
    photoGridImage.src = data.link;

    const photoGridList = document.querySelector(".photo-grid");
    photoGridList.prepend(photoGridElement);
  });



// likeButton.addEventListener("click", likeButtonToggle);
