const adFormElement = document.querySelector('.ad-form');
const mapFiltersElement = document.querySelector('.map__filters');

const changeStateForm = (form, formClass, isActive = false) => {
  form.classList[isActive ? 'remove' : 'add'](`${formClass}--disabled`);
  Array.from(form.children).forEach((element) => element.disabled);
};

const changeStatePage = (isActive = false) => {
  changeStateForm(adFormElement, 'ad-form', isActive);
  changeStateForm(mapFiltersElement, 'map__filters', isActive);
};

export {changeStatePage};
