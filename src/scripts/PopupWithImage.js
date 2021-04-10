import Popup from "./Popup"

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    super.open();
    const imageModalTitle = this._popup.querySelector(".image-popup__title");
    const imageModalLink = this._popup.querySelector(".image-popup__image");

    imageModalLink.src = link;
    imageModalTitle.textContent = name;
  }

}

export default PopupWithImage;
