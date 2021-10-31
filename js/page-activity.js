const setFormActivity = (isActive=false) => {
  const formAd = document.querySelector('.ad-form');
  formAd.classList[isActive ?'remove' : 'add'] ('addForm--disabled');

  const fieldsets = formAd.querySelectorAll('fieldset');
  fieldsets.forEach(fieldsets); {
    fieldsets.classList[isActive ?'remove' : 'add']('fieldset');
  }

  const formFilters = document.querySelector('.map__filters');
  formFilters.forEach(formFilters) ; {
    formFilters.classList[isActive ?'remove' : 'add']('map__filters--disabled');
  }
};

export {setFormActivity};
