const adFormElement = document.querySelector('.ad-form');
const filtersElement = document.querySelector('.map__filters');

const activityForm = (isActive=false, form, formClass) => {
  form.classList[isActive ?'remove' : 'add'](`${formClass}--disabled`);
  Array.from(form.children).forEach((element) => element.disabled);
};

export const makeActivity = () => {
  activityForm(adFormElement, 'ad-form');
  activityForm(filtersElement, 'map__filters');
};
