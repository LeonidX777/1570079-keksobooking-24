import {changeStatePage} from './utils/page-activation.js';
import {getData} from './api.js';
import {initMap, renderMarkers} from './map.js';
import {startFilter} from './filter.js';
import {showAlert} from './templates/popup.js';
import {startValidateForm} from './form.js';

const MAX_COUNT_POINTS = 10;

let points = null;

changeStatePage();

const successGetDataHandler = (data) => {
  points = data.slice(0, MAX_COUNT_POINTS);
  renderMarkers(points);
  startFilter(points);
  startValidateForm();
};

const errorGetDataHandler = (error, operation) => {
  showAlert(error, operation);
};

const mapLoadHandler = () => {
  changeStatePage(true);
};

getData(successGetDataHandler, errorGetDataHandler);
initMap(mapLoadHandler);
