class FormValidator {
  constructor(objects, formElement) {
    this._objects = objects;
    this._formElement = formElement;
  }

  _showErrorMessage(input) {
    const errorMessage = this._formElement.querySelector("#" + input.id + "-error");
    errorMessage.textContent = input.validationMessage;
    errorMessage.classList.add(this._objects.errorClass);
    input.classList.add(this._objects.inputErrorClass);
  }

  _hideErrorMessage(input) {
    const errorMessage = this._formElement.querySelector("#" + input.id + "-error");
    errorMessage.textContent = " ";
    errorMessage.classList.remove(this._objects.errorClass);
    input.classList.remove(this._objects.inputErrorClass);
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideErrorMessage(input);
    } else {
      this._showErrorMessage(input);
    }
  }

  _toggleSubmitButton(inputs) {
    const isValid = inputs.every((input) => input.validity.valid)
    if (isValid) {
      this._submitButton.classList.remove(this._objects.inactiveButtonClass);
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._objects.inactiveButtonClass);
      this._submitButton.disabled = true;
    }
  }

  _setEventListeners() {
    const inputs = Array.from(this._formElement.querySelectorAll(this._objects.inputSelector));
    this._submitButton = this._formElement.querySelector(this._objects.submitButtonSelector);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
      this._checkInputValidity(input);
      this._toggleSubmitButton(inputs);
      });
    });
  }

  enableValidation() {
    //disable default browser behavior
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
