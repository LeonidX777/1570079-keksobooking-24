import {changeStatePage} from './form-activation.js';
import { createCard } from './offer.js';
import { getAnnouncements } from './utils/mock.js';


const MAX_COUNT = 10;

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const ATTRIBUTION = {
  attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
};

const  DefaultLeaflet = {
  LAT: 35.67500,
  LNG: 139.75000,
  ZOOM: 13,
  DIGITS: 5,
};

const MainPinMarker = {
  URL: '../img/main-pin.svg',
  WIDTH: 52,
  HEIGHT: 52,
};

const PinMarker = {
  URL: '../img/pin.svg',
  WIDTH: 40,
  HEIGHT: 40,
};

const mapCanvas = document.querySelector('#map-canvas');
const address = document.querySelector('#address');

const getAddressValue = () => {
  const { LAT, LNG, DIGITS } =  DefaultLeaflet;
  address.value = `${LAT.toFixed(DIGITS)}, ${LNG.toFixed(DIGITS)}`;
};

const map = L.map(mapCanvas)
  .on('load', () => {
    getAddressValue();
    changeStatePage();
  })
  .setView({ lat: DefaultLeaflet.LAT, lng: DefaultLeaflet.LNG }, DefaultLeaflet.ZOOM);

L.tileLayer(TILE_LAYER, { ATTRIBUTION }).addTo(map);

const markerGroup = L.layerGroup().addTo(map);
const createMainPinMarker = () => {
  const mainPinIcon = L.icon({
    iconUrl: MainPinMarker.URL,
    iconSize: [MainPinMarker.WIDTH, MainPinMarker.HEIGHT],
    iconAnchor: [MainPinMarker.WIDTH / 2, MainPinMarker.HEIGHT],
  });

  return L.marker(
    { lat: DefaultLeaflet.LAT, lng: DefaultLeaflet.LNG },
    { draggable: true, icon: mainPinIcon },
  );
};

const mainMarker = createMainPinMarker();

const onAddressChange = (evt) => {
  const { DIGITS } = DefaultLeaflet;
  const { lat, lng } = evt.target.getLatLng();

  return address.value = `${lat.toFixed(DIGITS)}, ${lng.toFixed(DIGITS)}`;
};

const createMarker = (point) => {
  const { lat, lng } = point.location;

  const icon = L.icon({
    iconUrl: PinMarker.URL,
    iconSize: [PinMarker.WIDTH, PinMarker.HEIGHT],
    iconAnchor: [PinMarker.WIDTH / 2, PinMarker.HEIGHT],
  });

  L.marker({ lat, lng }, { icon }).addTo(markerGroup).bindPopup(createCard(point));
};

const renderMarkers = (points) => points.forEach(createMarker);

const announcements = getAnnouncements(MAX_COUNT);

export const initMap = () => {
  mainMarker.addTo(map);
  mainMarker.on('move', onAddressChange);
  renderMarkers(announcements);
};

export const resetMap = () => {
  const { LAT, LNG, ZOOM } = DefaultLeaflet;

  map.setView({ lat: LAT, lng: LNG }, ZOOM);
  mainMarker.setLatLng({ lat: LAT, lng: LNG });

  getAddressValue();
};
