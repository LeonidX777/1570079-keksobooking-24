import { NameOperation } from '../constants.js';

const ALERT_SHOW_TIME = 3000;

const MessageError = {
  SEND: 'Произошла ошибка отправки данных',
  GET: 'Произошла ошибка загрузки данных',
};

const showMessage = (name, error) => {
  const templateFragment = document.querySelector(`#${name}`).content;
  const template = templateFragment.querySelector(`.${name}`);
  const message = template.cloneNode(true);
  const button = message.querySelector(`.${name}__button`);

  if (error) {
    const messageText = message.querySelector(`.${name}__text`);
    messageText.textContent = error;
  }

  if (button) {
    button.addEventListener('click', () => {
      message.remove();
    }, { once: true });
  }

  document.addEventListener('click', (evt) => {
    evt.preventDefault();
    message.remove();
  }, { once: true });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      message.remove();
    }
  }, { once: true });

  document.body.appendChild(message);
};

const onClickBtnAlertPopup = (evt) => {
  const btnElement = evt.target;
  btnElement.removeEventListener('click', onClickBtnAlertPopup);
  const parentElement = btnElement.closest('.error');
  parentElement.remove();
};

const showAlert = (error, operation) => {
  const alertFragment = document.querySelector('#error').content;
  const templateAlert = alertFragment.querySelector('.error');
  const alertElement = templateAlert.cloneNode(true);

  const alertMessageElement = alertElement.querySelector('.error__message');
  const alertNameElement = alertElement.querySelector('.error__name');

  alertMessageElement.textContent = MessageError[operation];
  alertNameElement.textContent = error;

  const btnElement = alertElement.querySelector('.error__button');

  if (operation === NameOperation.SEND) {
    btnElement.remove();
    setTimeout(() => alertElement.remove(), ALERT_SHOW_TIME);
  }

  if (operation === NameOperation.GET) {
    btnElement.addEventListener('click', onClickBtnAlertPopup);
  }

  document.body.append(alertElement);
};

export {showAlert, showMessage};
