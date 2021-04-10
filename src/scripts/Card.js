class Card {
  constructor({cardItems, image}, templateElement) {
    this._name = cardItems.name;
    this._link = cardItems.link;
    this._image = image;
    this._templateElement = templateElement;
  }

  _getTemplate() {
    const photoGridTemplate = document
    .querySelector(this._templateElement)
    .content.querySelector(".photo-grid__container");

    return photoGridTemplate;
  }

  _handleLikeButton(evt) {
    evt.target.classList.toggle("like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
  }

  _setEventListeners() {
  // toggle like
  this._cardElement.querySelector(".like-button").addEventListener("click", (evt) => this._handleLikeButton(evt));

  //event for deleting images
  this._cardElement.querySelector(".delete-btn").addEventListener("click", () => this._handleDeleteButton());

  // toggle image popup modal with correct info
  this._cardElement.querySelector(".photo-grid__image").addEventListener("click", () => {
    this._image({
      name: this._name,
      link: this._link
    })
  });

  }

  createCard() {

    this._cardElement = this._getTemplate()
    .cloneNode(true);

    // card image and title
    this._cardElement
    .querySelector(".photo-grid__title")
    .textContent = this._name;

    this._cardElement
    .querySelector(".photo-grid__image")
    .src = this._link;

    this._setEventListeners();

    return this._cardElement;
  }
}

export default Card
