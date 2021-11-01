import {createCard} from './templates/offer.js';
import {getAnnouncement} from './utils/mock.js';
import {setPageActivity} from './utils/form-activity.js';
import {makeActive, makeInactive} from './form-activation.js';
import {validateForm} from './form-validation.js';

const MAX_COUNT = 10;

const announcements = new Array (MAX_COUNT).fill('').map(() => getAnnouncement());

const container = document.querySelector('#map-canvas');

announcements.forEach((offer) => {
  container.appendChild(createCard(offer));
});

setPageActivity();
makeInactive();
makeActive();
validateForm();
