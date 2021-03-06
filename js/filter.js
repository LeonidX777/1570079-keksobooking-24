import {resetMap, renderMarkers} from './map.js';

const DEBOUNCE_TIMER = 500;

const FilterTypes = {
  TYPE: 'type',
  PRICE: 'price',
  ROOMS: 'room',
  GUESTS: 'guest',
  FEATURES: 'features',
};

const PriceValueToTypes = {
  LOW: 10000,
  MIDDLE: {
    low: 10000,
    high: 50000,
  },
  HIGH: 50000,
};

const PriceTypes = {
  ANY: 'any',
  LOW: 'low',
  MIDDLE: 'middle',
  HIGH: 'high',
};

const RoomTypes = {
  ANY: 'any',
  ONE: 'one',
  TWO: 'two',
  THREE: 'three',
};

const GuestTypes = {
  ANY: 'any',
  ONE: 'one',
  TWO: 'two',
  NOT: 'not',
};

const roomValueToType = {
  any: 0,
  one: 1,
  two: 2,
  three: 3,
};

const guestValueToType = {
  any: 0,
  one: 1,
  two: 2,
  not: 0,
};

const debounce = (callback, timeoutDelay = DEBOUNCE_TIMER) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const mapFilterElelement = document.querySelector('.map__filters');
const selectTypeElelment = mapFilterElelement.querySelector('#housing-type');
const selectPriceElelment = mapFilterElelement.querySelector('#housing-price');
const selectRoomsElelment = mapFilterElelement.querySelector('#housing-rooms');
const selectGuestsElelment = mapFilterElelement.querySelector('#housing-guests');
const fieldsetFeaturesElement = mapFilterElelement.querySelector('#housing-features');

let defaultPoints = [];

const getFilteredPointsToPrice = (points, price) => {
  const filteredPoints = points.filter(({offer}) => {
    let isMatch = true;

    if (price === PriceTypes.LOW) {
      isMatch = offer.price < PriceValueToTypes.LOW;
    }

    if (price === PriceTypes.MIDDLE) {
      isMatch = offer.price <= PriceValueToTypes.MIDDLE.high && offer.price >= PriceValueToTypes.MIDDLE.low ;
    }

    if (price === PriceTypes.HIGH) {
      isMatch = offer.price > PriceValueToTypes.HIGH;
    }

    return isMatch;
  });

  return filteredPoints;
};

const getFilteredPointsToRoom = (points, room) => {
  const filteredPoints = points.filter(({offer}) => {
    let isMatch = true;

    if (room === RoomTypes.ANY) {
      isMatch = offer.rooms >= roomValueToType[room];
    }

    if (room === RoomTypes.ONE) {
      isMatch = offer.rooms === roomValueToType[room];
    }

    if (room === RoomTypes.TWO) {
      isMatch = offer.rooms === roomValueToType[room];
    }

    if (room === RoomTypes.THREE) {
      isMatch = offer.rooms === roomValueToType[room];
    }

    return isMatch;
  });

  return filteredPoints;
};

const getFilteredPointsToGuest = (points, guest) => {
  const filteredPoints = points.filter(({offer}) => {
    let isMatch = true;

    if (guest === GuestTypes.ANY) {
      isMatch = offer.guests >= guestValueToType[guest];
    }

    if (guest === GuestTypes.ONE) {
      isMatch = offer.guests === guestValueToType[guest];
    }

    if (guest === GuestTypes.TWO) {
      isMatch = offer.guests === guestValueToType[guest];
    }

    if (guest === GuestTypes.NOT) {
      isMatch = offer.guests === guestValueToType[guest];
    }

    return isMatch;
  });

  return filteredPoints;
};

const getFilteredPointsToType = (points, type) => {
  if (type === 'any') {
    return defaultPoints.slice();
  }
  const filteredPoints = points.filter(({offer}) => offer.type === type);

  return filteredPoints;
};


const getFilteredPointsToFeatures = (points, features) => {
  const filteredPoints = points.filter(({offer}) => {
    if (!offer.features) {
      return false;
    }

    const pointFeatures = offer.features;

    const difference = features.filter((feature) => !pointFeatures.includes(feature));


    if (difference.length === 0) {
      return true;
    }

    return false;
  });

  return filteredPoints;
};

const getFilteredPointToAllParameters = (filterParameters) => {
  let filteredPoints = defaultPoints.slice();

  for (const [key, value] of Object.entries(filterParameters)) {
    if (key === FilterTypes.TYPE) {
      filteredPoints = getFilteredPointsToType(filteredPoints, value);
    }
    if (key === FilterTypes.PRICE) {
      filteredPoints = getFilteredPointsToPrice(filteredPoints, value);
    }
    if (key === FilterTypes.ROOMS) {
      filteredPoints = getFilteredPointsToRoom(filteredPoints, value);
    }
    if (key === FilterTypes.GUESTS) {
      filteredPoints = getFilteredPointsToGuest(filteredPoints, value);
    }
    if (key === FilterTypes.FEATURES) {
      filteredPoints = getFilteredPointsToFeatures(filteredPoints, value);
    }
  }

  return filteredPoints;
};

const onMapFilterElelementChange = () => {
  const activeCheckboxElements = fieldsetFeaturesElement.querySelectorAll('input:checked');
  const featuresValues = Array.from(activeCheckboxElements).map((element) => element.value);

  resetMap();

  const filterParameters = {
    type: selectTypeElelment.value,
    price: selectPriceElelment.value,
    room: selectRoomsElelment.value,
    guest: selectGuestsElelment.value,
    features: featuresValues,
  };

  renderMarkers(getFilteredPointToAllParameters(filterParameters));
};

const startFilter = (data) => {
  defaultPoints = data;
  mapFilterElelement.addEventListener('change', debounce(onMapFilterElelementChange));
};

const resetFilter = () => {
  mapFilterElelement.reset();
  resetMap();
  renderMarkers(defaultPoints);
};

export {startFilter, resetFilter};
