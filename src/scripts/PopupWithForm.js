import Popup from "./Popup"

class PopupWithForm extends Popup {
  constructor ({popupSelector, submitHandler}) {
    super(popupSelector);
    this._submitHandler = submitHandler;
  }

  _getInputValues() {
    const formValues = {}
    const inputs = Array.from(this._form.querySelectorAll(".modal__form-control"));

    // gather form input values
    inputs.forEach( input => {
      formValues[input.name] = input.value
    })

    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form = this._popup.querySelector(".modal__form")
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler(
        this._getInputValues()
      );
      this.close();
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithForm;
