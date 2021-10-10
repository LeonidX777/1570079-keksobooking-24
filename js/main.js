const MAX_COUNT = 10;

const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const TITLES = [
  'Заголовок1',
  'Заголовок2',
  'Заголовок3',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Описание1',
  'Описание2',
  'Описание3',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const Price = {
  MIN: 1,
  MAX: 100,
};

const Room = {
  MIN: 1,
  MAX: 5,
};

const Guest = {
  MIN: 1,
  MAX: 500,
};

const locationLat = {
  min: 35.65000,
  max: 35.70000,
  digits: 5,
};

const locationLng = {
  min: 139.70000,
  max: 139.80000,
  digits: 5,
};

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
