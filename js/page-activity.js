const setPageDisabled = () => {
  const formAd = document.querySelector('.ad-form');
  formAd.classList.add('ad-form--disabled');

  const fieldsets = formAd.querySelectorAll('fieldset');
  for (const element of fieldsets) {
    element.disabled = true;
  }

  const formFilters = document.querySelector('.map__filters');
  formFilters.classList.add('map__filters--disabled');

  const filterElements = formFilters.children;
  for (const element of filterElements) {
    element.disabled = true;
  }
};

const setPageEnabled = () => {
  const formAd = document.querySelector('.ad-form');
  formAd.classList.remove('ad-form--disabled');

  const fieldsets = formAd.querySelectorAll('fieldset');
  for (const element of fieldsets) {
    element.disabled = false;
  }

  const formFilters = document.querySelector('.map__filters');
  formFilters.classList.remove('map__filters--disabled');

  const filterElements = formFilters.children;
  for (const element of filterElements) {
    element.disabled = false;
  }
};

export {setPageDisabled, setPageEnabled};
