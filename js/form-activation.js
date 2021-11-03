const adFormElement = document.querySelector('.ad-form');
const mapFiltersElement = document.querySelector('.map__filters');

const changeStateForm = (form, formClass, isActive) => {
  form.classList[isActive ?'remove' : 'add'](`${formClass}--disabled`);
  Array.from(form.children).forEach((element) => element.disabled);
};

export const changeStatePage = (isActive = false) => {
  changeStateForm(adFormElement, 'ad-form', isActive);
  changeStateForm(mapFiltersElement, 'ad-form', isActive);
};
