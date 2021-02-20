// variables related to forms/modals
// toggle for addphoto modal modifier visibility
const addPhotoModal = document.querySelector(".modal_type_images");
// toggle for profile modal modifier for visbility
const profileModal = document.querySelector(".modal_type_profile");
// form for profile modal currently-- may have to update for capturing image form info
const profileForm = document.querySelector(".modal__form");
// const for modal_type_imagepopup
const imageModalPopup = document.querySelector(".modal_type_image-popup");
// Variables for array iteration
// set up for array clone- photo-grid__container li = template
const photoGridTemplate = document.querySelector(".photo-grid-template").content.querySelector(".photo-grid__container");


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
// open add image modal
addButton.addEventListener("click", () => {
  toggleModalWindows(addPhotoModal);
});
//close add image modal


photoPopupCloseButton.addEventListener("click", () => {
  toggleModalWindows(imageModalPopup);
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

// close Create button
createButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Hello");
  toggleModalWindows(addPhotoModal);

  //add a function that takes an object and adds it to array
});

const imageModalIFormInput = document.querySelector(".modal__form-control_images");
// making input equal to an object to add to array with push(

closeAddImageButton.addEventListener("click", () => {
  toggleModalWindows(addPhotoModal);
});



// array iteration
initialCards.forEach(data => {

  // photo-grid__container li = template
  const photoGridElement = photoGridTemplate.cloneNode(true);
  const photoGridImage = photoGridElement.querySelector(".photo-grid__image");
  const photoGridTitle = photoGridElement.querySelector(".photo-grid__title");

  photoGridTitle.textContent //title
  photoGridImage.src //image url

  //photo-grid ul = html
  const photoGridList = document.querySelector(".photo-grid");
  // buttons
  const likeButton = photoGridElement.querySelector(".like-button");

  photoGridTitle.textContent = data.name;
  photoGridImage.src = data.link;
  photoGridImage.alt = data.text;
  photoGridList.prepend(photoGridElement);

  // toggle image popup modal with correct info
  photoGridImage.addEventListener("click", () => {

    photoGridImageSource.src = data.link;
    photoGridImageTitle.textContent = data.name;
    toggleModalWindows(imageModalPopup);
  });

  // clicking like
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("like-button_active");
  });
  const photoGridDeleteButton = photoGridElement.querySelector(".delete-btn");

    //event for deleting images
  photoGridDeleteButton.addEventListener("click", function () {
    const photoGridItem = photoGridDeleteButton.closest(".photo-grid__container");
    photoGridItem.remove();
  });


});



