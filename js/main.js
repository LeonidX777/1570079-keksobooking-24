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

const ADDRESSES = [
  'location.lat',
  'location.lng',
];

const Price = {MIN:1, MAX:100};

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const Rooms = {MIN:1, MAX:5};

const Guests = {MIN:1, MAX:500};

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
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const lat = {MIN:35.65000, MAX:35.70000, DIGITS:5};

const lng = {MIN:139.70000, MAX:139.80000, DIGITS:5};

const getRandomIntegerInRange =  (max, min = 0) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const getAuthor = () => (
  {
    avatar: getRandomIntegerInRange(AVATARS.length - 1),
  }
);

const getOffer = () => (
  {
    title: getRandomIntegerInRange(TITLES.length - 1),
    address: getRandomIntegerInRange(ADDRESSES.length - 1),
    price: getRandomIntegerInRange(Price.MAX, Price.MIN),
    type: getRandomIntegerInRange(TYPES.length - 1),
    rooms: getRandomIntegerInRange(Rooms.MAX, Rooms.MIN),
    guests: getRandomIntegerInRange(Guests.MAX, Guests.MIN),
    checkin: getRandomIntegerInRange(CHECKIN.length - 1),
    checkout: getRandomIntegerInRange(CHECKOUT.length - 1),
    features: getRandomIntegerInRange(FEATURES.length - 1),
    description: getRandomIntegerInRange(TITLES.length - 1),
    photos: getRandomIntegerInRange(PHOTOS.length - 1),
  }
);

const getRandomPositiveFloat = (ar, br, digits = 1) => {
  const lower = Math.min(Math.abs(ar), Math.abs(br));
  const upper = Math.max(Math.abs(ar), Math.abs(br));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

const getLocation = () => (
  {
    lat: getRandomPositiveFloat(lat.MAX, lat.MIN, lat.DIGITS),
    lng: getRandomPositiveFloat(lng.MAX, lng.MIN, lng.DIGITS),
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
