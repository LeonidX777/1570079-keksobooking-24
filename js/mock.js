import {MAX_COUNT, AVATARS, TITLES, TYPES, FEATURES, DESCRIPTIONS, PHOTOS, CHECKIN, CHECKOUT, Price, Room, Guest, locationLat, locationLng} from './data.js';
import {getRandomIntegerInRange, getRandomPositiveFloat} from './util.js';

const getFeatures = (features) => features.slice(0, getRandomIntegerInRange(features.length));

const getAuthor = () => (
  {
    avatar: getRandomIntegerInRange(AVATARS.length - 1),
  }
);

const getLocation = () => (
  {
    lat: getRandomPositiveFloat(locationLat.min, locationLat.max, locationLat.digits),
    lng: getRandomPositiveFloat(locationLng.min, locationLng.max, locationLng.digits),
  }
);

const getOffer = () => (
  {
    title: getRandomIntegerInRange(TITLES.length - 1),
    address: getLocation(),
    price: getRandomIntegerInRange(Price.MAX, Price.MIN),
    type: getRandomIntegerInRange(TYPES.length - 1),
    rooms: getRandomIntegerInRange(Room.MAX, Room.MIN),
    guests: getRandomIntegerInRange(Guest.MAX, Guest.MIN),
    checkin: getRandomIntegerInRange(CHECKIN.length - 1),
    checkout: getRandomIntegerInRange(CHECKOUT.length - 1),
    features: getFeatures(FEATURES),
    description: getRandomIntegerInRange(DESCRIPTIONS.length - 1),
    photos: getRandomIntegerInRange(PHOTOS.length - 1),
  }
);

const getAnnouncement = () => (
  {
    author: getAuthor(),
    offer: getOffer(),
    location: getLocation(),
  }
);

const announcements = new Array (MAX_COUNT).fill('').map(() => getAnnouncement());

announcements;