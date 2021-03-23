const photoGridPopupImage = document.querySelector(".image-popup__image");
const photoGridPopupTitle = document.querySelector(".image-popup__title");
const imageModalPopup = document.querySelector(".modal_type_image-popup");

function toggleModalWindows(modal) {
  modal.classList.toggle("modal_opened");
  if ( modal.classList.contains("modal_opened")) {
    document.addEventListener("keydown", handleEscEvent);
  } else {
    document.removeEventListener("keydown", handleEscEvent);
  }
}

function handleEscEvent(evt) {
  const modals = document.querySelector(".modal_opened");
  if (evt.key === "Escape" && modals) {
    toggleModalWindows(modals);
  }
}

class Card {
  constructor(data, templateElement) {
    this._data = data;
    this._templateElement = templateElement;
  }

  _getTemplate() {
    const photoGridTemplate = document.querySelector(this._templateElement).content.querySelector(".photo-grid__container");

    return photoGridTemplate;
  }

  _handleLikeButton(evt) {
    evt.target.classList.toggle("like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
  }

  _handlePreviewImage() {
    photoGridPopupImage.src = this._data.link;
    photoGridPopupTitle.textContent = this._data.name;
    toggleModalWindows(imageModalPopup);
  }

  _setEventListeners() {
  const photoGridDeleteButton = this._cardElement.querySelector(".delete-btn");
  const likeButton = this._cardElement.querySelector(".like-button");
  const photoGridImage = this._cardElement.querySelector(".photo-grid__image");

  // toggle like
  likeButton.addEventListener("click", (evt) => this._handleLikeButton(evt));

  //event for deleting images
  photoGridDeleteButton.addEventListener("click", () => this._handleDeleteButton());

  // toggle image popup modal with correct info
  photoGridImage.addEventListener("click", () => this._handlePreviewImage());
  }

  renderCard() {
    // const photoGridElement = photoGridTemplate.cloneNode(true);
    this._cardElement = this._getTemplate().cloneNode(true);
    const photoGridImage = this._cardElement.querySelector(".photo-grid__image");

    // card image and title
    this._cardElement.querySelector(".photo-grid__title").textContent = this._data.name;
    photoGridImage.src = this._data.link;

    this._setEventListeners();

    return this._cardElement;
  }
}

export default Card;

