const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const MAX_ROOMS = 100;

const priceType = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

const adFormElement = document.querySelector('.ad-form');
const formTitleElement = adFormElement.querySelector('#title');
const formPriceElement = adFormElement.querySelector('#price');
const formTypeElement = adFormElement.querySelector('#type');
const formCapacityElement = adFormElement.querySelector('#capacity');
const formRoomsElement = adFormElement.querySelector('#room_number');
const formTimeInElement = adFormElement.querySelector('#timein');
const formTimeOutElement = adFormElement.querySelector('#timeout');

const onTitleInput = () => {
  const valueLength = formTitleElement.value.length;
  if (valueLength === 0) {
    formTitleElement.setCustomValidity('Минимальная длина заголовка - 30 символов!');
  } else if (valueLength < MIN_TITLE_LENGTH) {
    formTitleElement.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    formTitleElement.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    formTitleElement.setCustomValidity('');
  }
  formTitleElement.reportValidity();
};

const changeMinPrice = () => {
  formPriceElement.min = priceType[formTypeElement.value];
  formPriceElement.placeholder = priceType[formTypeElement.value];
};

const onChangePrice = () => changeMinPrice();

const onPriceInput = (evt) => {
  const value = evt.target.value;
  const typeValue = priceType[formTypeElement.value];

  if (value < typeValue) {
    formPriceElement.setCustomValidity(`Минимальная цена ${typeValue}`);
  } else if (value > MAX_PRICE) {
    formPriceElement.setCustomValidity(`Максимальная цена ${MAX_PRICE}`);
  } else {
    formPriceElement.setCustomValidity('');
  }
  formPriceElement.reportValidity();
};

const checkCapacity = () => {
  const rooms = Number(formRoomsElement.value);
  const guests = Number(formCapacityElement.value);

  if (rooms < guests) {
    formCapacityElement.setCustomValidity('Выберите другой вариант');
  } else if (rooms === MAX_ROOMS && guests !== 0) {
    formCapacityElement.setCustomValidity('Выберите другой вариант');
  } else if (guests === 0 && rooms !== MAX_ROOMS) {
    formCapacityElement.setCustomValidity('Выберите другой вариант');
  } else {
    formCapacityElement.setCustomValidity('');
  }
  formCapacityElement.reportValidity();
};
const onChangeTimeIn = () => formTimeOutElement.value = formTimeInElement.value;
const onChangeTimeOut = () => formTimeInElement.value = formTimeOutElement.value;

const syncTime = () => {
  onChangeTimeIn();
  onChangeTimeOut();
};
const onChangeCapacity = () => checkCapacity();

const syncFields = () => {
  changeMinPrice();
  checkCapacity();
  syncTime();
};

export const validateForm = () => {
  syncFields();

  formTitleElement.addEventListener('invalid', onTitleInput);
  formTitleElement.addEventListener('input', onTitleInput);

  formTypeElement.addEventListener('change', onChangePrice);
  formPriceElement.addEventListener('invalid', onPriceInput);
  formPriceElement.addEventListener('input', onPriceInput);

  formRoomsElement.addEventListener('change', onChangeCapacity);
  formCapacityElement.addEventListener('change', onChangeCapacity);
};
