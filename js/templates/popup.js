import {NameOperation} from '../constants.js';

const ALERT_SHOW_TIME = 3000;
const ESC_KEY_CODE = 27;

const MessageError = {
  SEND: 'Произошла ошибка отправки данных',
  GET: 'Произошла ошибка загрузки данных',
};

const bodyElement = document.querySelector('body');
let activePopupElement = null;
let btnErrorElement = null;

const getClosePopup = () => {
  activePopupElement.remove();
  activePopupElement = null;
  btnErrorElement = null;
};

const onClickWindow = (evt) => {
  evt.preventDefault();
  getClosePopup();
};

const onKeydownWindow = (evt) => {
  if (evt.keyCode === ESC_KEY_CODE) {
    evt.preventDefault();
    getClosePopup();
    window.removeEventListener('keydown', onKeydownWindow);
  }
};

const onClickBtnErrorElement = (evt) => {
  evt.preventDefault();
  btnErrorElement.removeEventListener('click', onClickBtnErrorElement);
  window.removeEventListener('keydown', onKeydownWindow);
  getClosePopup();
};

const showAlert = (error, operation) => {
  const alertFragment = document.querySelector('#error').content;
  const templateAlert = alertFragment.querySelector('.error');

  activePopupElement = templateAlert.cloneNode(true);

  const alertMessageElement = activePopupElement.querySelector('.error__message');
  const alertNameElement = activePopupElement.querySelector('.error__name');

  alertMessageElement.textContent = MessageError[operation];
  alertNameElement.textContent = error;

  btnErrorElement = activePopupElement.querySelector('.error__button');

  if (operation === NameOperation.GET) {
    btnErrorElement.remove();
    setTimeout(() => activePopupElement.remove(), ALERT_SHOW_TIME);
  }

  if (operation === NameOperation.SEND) {
    btnErrorElement.addEventListener('click', onClickBtnErrorElement);
    window.addEventListener('keydown', onKeydownWindow);
  }

  bodyElement.append(activePopupElement);
};

const showSuccess = () => {
  const successFragment = document.querySelector('#success').content;
  const templateSuccess = successFragment.querySelector('.success');
  activePopupElement = templateSuccess.cloneNode(true);

  bodyElement.append(activePopupElement);

  activePopupElement.addEventListener('click', onClickWindow);
  window.addEventListener('keydown', onKeydownWindow);
};

export {showAlert, showSuccess};
