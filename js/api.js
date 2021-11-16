import { NameOperation } from './constants.js';
const API_URL = 'https://24.javascript.pages.academy/keksobooking/data';
const API_SEND_URL = 'https://24.javascript.pages.academy/keksobooking';
const ERROR_STATUS_RESPONSE = 400;

const getData = (successHandler, errorHandler) => {
  fetch(API_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((points) => successHandler(points))
    .catch((error) => errorHandler(error, NameOperation.GET));
};

const sendData = (successHandler, errorHandler, body) => {
  fetch(
    API_SEND_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.status >= ERROR_STATUS_RESPONSE) {
        errorHandler(response.status, NameOperation.SEND);
      }
      if (response.ok) {
        successHandler();
      }
    })
    .catch((error) => errorHandler(error, NameOperation.SEND));
};

export { getData, sendData };
