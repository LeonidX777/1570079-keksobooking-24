const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const GUEST_FIELD_VALUES = [0, 1, 2, 3];
const DEFAULT_VALUE_ROOM = 1;

const priceType = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

const countGuestsForRoom = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const addFormElement = document.querySelector('.ad-form');
const formTitleElement = addFormElement.querySelector('#title');
const formPriceElement = addFormElement.querySelector('#price');
const formTypeElement = addFormElement.querySelector('#type');
const formTimeFieldsetElement = addFormElement.querySelector('.ad-form__element--time');
const formTimeInElement = addFormElement.querySelector('#timein');
const formTimeOutElement = addFormElement.querySelector('#timeout');
const formCapacityElement = addFormElement.querySelector('#capacity');
const formCapacityOptionElements = formCapacityElement.querySelectorAll('option');
const formRoomsElement = addFormElement.querySelector('#room_number');
const addFormResetBtnElement = addFormElement.querySelector('.ad-form__reset');

const changeMinPriceOfType = () => {
  formPriceElement.min = priceType[formTypeElement.value];
  formPriceElement.placeholder = priceType[formTypeElement.value];
};

const setDisabledAndSelectedStateRoomOptions = (capacityValues) => {
  formCapacityOptionElements.forEach((option) => option.disabled = false);
  const disabledRoomValues = GUEST_FIELD_VALUES.filter((value) => !capacityValues.includes(value));

  const disabledGuestOptionElements = [];
  disabledRoomValues.forEach((value) => {
    const optionElement = formCapacityElement.querySelector(`option[value="${value}"]`);
    disabledGuestOptionElements.push(optionElement);
  });
  disabledGuestOptionElements.forEach((option) => option.disabled = true);

  const selectedOptionElement = formCapacityElement.querySelector(`option[value="${capacityValues[0]}"]`);
  selectedOptionElement.selected = true;
};

const onTitleInput = (evt) => {
  const value = evt.target.value;
  const valueLength = value;

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

const onChangeType = () => changeMinPriceOfType();

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

const onChangeFormTimeFieldset = (evt) => {
  const value = evt.target.value;

  formTimeInElement.value = evt.target.value;
  formTimeOutElement.value = evt.target.value;

  const timeOptionActiveElements = formTimeFieldsetElement.querySelectorAll(`option[value="${value}"]`);
  timeOptionActiveElements.forEach((option) => option.selected = true);
};

const onChangeRooms = (evt) => {
  const value = evt.target.value;

  const actualCapacityValues = countGuestsForRoom[value];
  setDisabledAndSelectedStateRoomOptions(actualCapacityValues);
};

const onClickResetBtn = () => setDisabledAndSelectedStateRoomOptions(countGuestsForRoom[DEFAULT_VALUE_ROOM]);

export const validateForm = () => {
  //временно для проверки работоспособности формы:
  const formAddreseElement = addFormElement.querySelector('#address');
  formAddreseElement.value = '35.65000, 139.70000';

  changeMinPriceOfType();

  formTitleElement.addEventListener('input', onTitleInput);
  formTypeElement.addEventListener('change', onChangeType);
  formPriceElement.addEventListener('input', onPriceInput);
  formTimeFieldsetElement.addEventListener('change', onChangeFormTimeFieldset);
  formRoomsElement.addEventListener('change', onChangeRooms);
  addFormResetBtnElement.addEventListener('click', onClickResetBtn);
};
