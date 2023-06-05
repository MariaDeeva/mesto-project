// Валидация
const validConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input_error_active'
}

/*function hasInvalidInput(inputsArray) {

    return inputsArray.some((input) => {
        return !input.validity.valid;
    });
}*/

function disableButton(button, validConfig) {
    button.setAttribute('disabled', '');
    button.classList.add(validConfig.inactiveButtonClass);
}

function enableButton(button, validConfig) {
    button.removeAttribute('disabled');
    button.classList.remove(validConfig.inactiveButtonClass);
}
function toggleButtonState(form, validConfig) {
    const button = form.querySelector(validConfig.submitButtonSelector);
    if (form.checkValidity()) {
        enableButton(button, validConfig);
    }
    else {
        disableButton(button, validConfig);
    }
}
function setSubmitListener( form, validConfig){
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        toggleButtonState(form, validConfig)
    });
}

function hideInputError(input, errorElm, validConfig) {
    input.classList.remove(validConfig.inputErrorClass);
    errorElm.classList.add(validConfig.errorClass);
    errorElm.textContent = '';
}
function showInputError(input, errorElm) {
    input.classList.add(validConfig.inputErrorClass);
    errorElm.classList.add(validConfig.errorClass);
    errorElm.textContent = input.validationMessage;
}

function checkInputValidaty(input, validConfig) {

    const errorElm = document.querySelector(`#${input.id}-error`);
      if (input.validity.patternMismatch) {
        input.setCustomValidity(input.dataset.errorMessage);
    }
    else {
        input.setCustomValidity('');
    }
    if (input.checkValidity()) {
        hideInputError(input, errorElm, validConfig);
    }
    else {
        showInputError(input, errorElm, validConfig)
    }
}

function setEventListeners(form, validConfig) {
    const inputs = form.querySelectorAll(validConfig.inputSelector);
    const inputsArray = Array.from(inputs);
    toggleButtonState(form, validConfig);
    setSubmitListener(form, validConfig);
    inputsArray.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidaty(input, validConfig);
            toggleButtonState(form, validConfig);
        });
    });
}

function enableValidation(validConfig) {
    const formsArray = document.querySelectorAll(validConfig.formSelector);
    formsArray.forEach((form) => {
        setEventListeners(form, validConfig);
        });
}

enableValidation(validConfig);

export {enableValidation, validConfig, toggleButtonState}