
const getRandomIntegerInRange =  (max, min = 0) => {
  const rand = min - 0.5 + Math.random() * (max - min);
  return Math.round(rand);
};

const getRandomPositiveFloat = (numberA, numberB, digits = 1) => {
  const lower = Math.min(Math.abs(numberA), Math.abs(numberB));
  const upper = Math.max(Math.abs(numberA), Math.abs(numberB));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
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

const isEscapeKey = (evt) => evt.key === 'Escape';

const ALERT_SHOW_TIME = 5000;
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('error');
  alertContainer.classList.add('error__message');
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export {isEscapeKey, showAlert};
export {getRandomIntegerInRange, getRandomPositiveFloat, showMessage};
