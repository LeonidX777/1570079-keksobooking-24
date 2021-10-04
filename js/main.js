const getRandomIntegerInRange = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

getRandomIntegerInRange(1, 3);

const getRandomIntegerToMax = (max) =>
  Math.floor(Math.random() * max);

getRandomIntegerToMax(1);

const AVATAR = [
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
const ADDRESS = [
  'location.lat',
  'location.lng',
];
const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
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

const SIMILAR_HOTEL_COUNT = 10;

const createHotel = () => {
  const randomFeaturesIndex = _.random(0, FEATURES.length - 1);
  const randomPhotosIndex = _.random(0, PHOTOS.length - 1);
  const randomAvatarIndex = _.random(0, AVATAR.length - 1);
  const randomTypeIndex = _.random(0, TYPE.length - 1);
  const randomCheckinIndex = _.random(0, CHECKIN.length - 1);
  const randomCheckoutIndex = _.random(0, CHECKOUT.length - 1);

  const getPriceRandomIntegerInRange = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };
  const getRoomsRandomIntegerInRange = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };
  const getGuestsRandomIntegerInRange = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };
  return {
    features: FEATURES[randomFeaturesIndex],
    avatar: AVATAR[randomAvatarIndex],
    address: '',
    price: '',
    type: TYPE[randomTypeIndex],
    rooms: '',
    guests: '',
    checkin: CHECKIN[randomCheckinIndex],
    checkout: CHECKOUT[randomCheckoutIndex],
    photos: PHOTOS[randomPhotosIndex],
    location: '',
  };
};

const similarHotels = Array.from({length: SIMILAR_HOTEL_COUNT}, createHotel);
