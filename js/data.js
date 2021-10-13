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

export {MAX_COUNT, AVATARS, TITLES, TYPES, FEATURES, DESCRIPTIONS, PHOTOS, CHECKIN, CHECKOUT, Price, Room, Guest, locationLat, locationLng};
