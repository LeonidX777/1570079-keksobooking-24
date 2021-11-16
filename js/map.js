import { createCard } from './templates/offer.js';
import { DefaultLeaflet } from './constants.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const ATTRIBUTION = {
  attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
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

const mapCanvasElement = document.querySelector('#map-canvas');
const addressElement = document.querySelector('#address');

const map = L.map(mapCanvasElement);

const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: MainPinMarker.URL,
  iconSize: [MainPinMarker.WIDTH, MainPinMarker.HEIGHT],
  iconAnchor: [MainPinMarker.WIDTH / 2, MainPinMarker.HEIGHT],
});

const mainMarker = L.marker(
  { lat: DefaultLeaflet.LAT, lng: DefaultLeaflet.LNG },
  { draggable: true, icon: mainPinIcon },
);

const getAddressElementValue = () => {
  const { LAT, LNG, DIGITS } =  DefaultLeaflet;
  addressElement.value = `${LAT.toFixed(DIGITS)}, ${LNG.toFixed(DIGITS)}`;
};

const onMoveMarker = (evt) => {
  const { DIGITS } = DefaultLeaflet;
  const { lat, lng } = evt.target.getLatLng();

  return addressElement.value = `${lat.toFixed(DIGITS)}, ${lng.toFixed(DIGITS)}`;
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

const renderMarkers = (points) => points.forEach((point) => createMarker(point));

const initMap = (onLoadMap) => {
  map.on('load', onLoadMap).setView({ lat: DefaultLeaflet.LAT, lng: DefaultLeaflet.LNG }, DefaultLeaflet.ZOOM);

  L.tileLayer(TILE_LAYER, { ATTRIBUTION }).addTo(map);
  mainMarker.addTo(markerGroup);
  mainMarker.on('move', onMoveMarker);
};

const resetMainMarker = () => {
  const { LAT, LNG, ZOOM } = DefaultLeaflet;
  mainMarker.setLatLng({ lat: LAT, lng: LNG });
  map.setView({ lat: LAT, lng: LNG }, ZOOM);
  getAddressElementValue();
};

const resetMap = () => {
  markerGroup.clearLayers();
  mainMarker.addTo(markerGroup);
};

export {initMap, resetMap, resetMainMarker, renderMarkers};
