const setPageActivity = (isActive = false) => {
  const formAdElement = document.querySelector('.ad-form');
  formAdElement.classList[isActive ? 'remove' : 'add']('ad-form--disabled');

  const fieldsetElements = formAdElement.querySelectorAll('fieldset');
  fieldsetElements.forEach((fieldset) => {
    fieldset.disabled = isActive;
  });

  const mapFiltersElement = document.querySelector('.map__filters');
  mapFiltersElement.classList[isActive ? 'remove' : 'add']('ad-form--disabled');

  const mapFilterFieldsetElements = mapFiltersElement.querySelector('fieldset');
  mapFilterFieldsetElements.disabled = isActive;

  const mapFilterSelectElements = mapFiltersElement.querySelectorAll('select');
  mapFilterSelectElements.forEach((select) => {
    select.disabled = isActive;
  });
};

export {setPageActivity};
