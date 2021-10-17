const card = document.querySelector('#card').content;

const TypeHouse = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const createImages = (container, sources) => {
  const picture = container.querySelector('.popup__photo');
  container.innerHTML = '';
  const fragmentPhoto = document.createDocumentFragment();
  sources.forEach((source) => {
    const newPhoto = picture.cloneNode(true);
    newPhoto.src = source;
    fragmentPhoto.appendChild(newPhoto);
  });
  return fragmentPhoto;
};

const createFeatures = (features, container) => {
  const list = container.querySelectorAll('li');
  list.forEach((item) => {
    if (features.some((feature) => item.classList.contains(`popup__feature--${feature}`))) {
      item.remove();
    }
  });
};

const createCard = (object) => {
  const {author, offer} = object;
  const offerCard = card.cloneNode(true);
  const title = offerCard.querySelector('.popup__title');
  if (offer.title) {
    title.textContent = offer.title;
  } else {
    title.remove();
  }
  const address = offerCard.querySelector('.popup__text--address');
  if (offer.address) {
    address.textContent = offer.address;
  } else {
    address.remove();
  }
  const price = offerCard.querySelector('.popup__text--price');
  if (offer.price) {
    price.textContent = `${offer.price} ₽/ночь`;
  } else {
    price.remove();
  }
  const type = offerCard.querySelector('.popup__type');
  if (offer.type) {
    type.textContent = TypeHouse[offer.type];
  } else {
    type.remove();
  }
  const capacity = offerCard.querySelector('.popup__text--capacity');
  if (offer.rooms && offer.guests) {
    capacity.textContent = `${offer.rooms} комнат для ${offer.guests} гостей` ;
  } else {
    capacity.remove();
  }
  const time = offerCard.querySelector('.popup__text--time');
  if (offer.checkin && offer.checkout) {
    time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    time.remove();
  }
  const features = offerCard.querySelector('.popup__features');
  if (offer.features) {
    createFeatures(offer.features, features);
  } else {
    features.remove();
  }
  const description = offerCard.querySelector('.popup__description');
  if (offer.description) {
    description.textContent = offer.description;
  } else {
    description.remove();
  }
  const photoBox = offerCard.querySelector('.popup__photos');
  if (offer.photos) {
    photoBox.appendChild(createImages(photoBox, offer.photos));
  } else {
    photoBox.remove();
  }
  const avatar = offerCard.querySelector('.popup__avatar');
  if (author.avatar) {
    avatar.src = author.avatar;
  } else {
    avatar.remove();
  }
  return offerCard;
};

export {createCard};
