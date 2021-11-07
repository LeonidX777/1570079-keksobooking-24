import {isEscapeKey} from './util.js';

const setFormActivity = (isActive=false) => {
  const formAd = document.querySelector('.ad-form');
  formAd.classList[isActive ?'remove' : 'add'] ('addForm--disabled');

  const fieldsets = formAd.querySelectorAll('fieldset');
  fieldsets.forEach(fieldsets); {
    fieldsets.classList[isActive ?'remove' : 'add']('fieldset');
  }

  const formFilters = document.querySelector('.map__filters');
  formFilters.forEach(formFilters) ; {
    formFilters.classList[isActive ?'remove' : 'add']('map__filters--disabled');
  }
};


const templateFragment = document.querySelector('#success').content;
const template = templateFragment.querySelector('div');
const successMessage = template.cloneNode(true);
const messageContainer = document.querySelector('.map');

const showSuccessMessage = () => {
  messageContainer.appendChild(successMessage);

  window.addEventListener('click', () => {
    messageContainer.removeChild(successMessage);
  });

  window.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      messageContainer.removeChild(successMessage);
    }
  });
};

export {showSuccessMessage};
export {setFormActivity};
