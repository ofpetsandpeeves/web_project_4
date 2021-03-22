function showErrorMesssage(input, objects) {
  const errorMessage = document.querySelector("#" + input.id + "-error");
  console.log(errorMessage);
  errorMessage.textContent = input.validationMessage;
  errorMessage.classList.add(objects.errorClass);
  input.classList.add(objects.inputErrorClass);
}

function hideErrorMesssage(input, objects) {
  const errorMessage = document.querySelector("#" + input.id + "-error");
  errorMessage.textContent = " ";
  errorMessage.classList.remove(objects.errorClass);
  input.classList.remove(objects.inputErrorClass);
}

function checkInputValidity(input, form) {
  if (input.validity.valid) {
    hideErrorMesssage(input, form)
  } else {
    showErrorMesssage(input, form)
  }
}

function toggleSubmitButton(inputs, submitButton, objects) {
  const isValid = inputs.every((input) => input.validity.valid)
  if (isValid) {
    submitButton.classList.remove(objects.inactiveButtonClass);
    submitButton.disabled = false;
  } else {
    submitButton.classList.add(objects.inactiveButtonClass);
    submitButton.disabled = true;
  }
}

const setEventListeners = (objects, form) => {
  const inputs = Array.from(form.querySelectorAll(objects.inputSelector));
  const submitButton = form.querySelector(objects.submitButtonSelector);
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
    checkInputValidity(input, objects);
    toggleSubmitButton(inputs, submitButton, objects);
    });
  });
}

function enableValidation(objects) {
  const forms = Array.from(document.querySelectorAll(objects.formSelector));
  forms.forEach((form) => {
    //disable default browser behavior
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(objects, form);
  });

}

// object holding selectors, which you will call later
enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__form-control",
  submitButtonSelector: ".button",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "modal__form-control_type_error",
  errorClass: "modal__error"
});
