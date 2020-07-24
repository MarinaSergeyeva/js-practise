import './navigation.css';

const navigationListMarkup = elements => {
  return `
              <ul class="navigation__list">
              ${navigationItemMarkup(elements)}
              </ul>
              `;
};

const navigationItemMarkup = elements => {
  return elements.reduce((acc, element) => {
    acc += `
                <li class="navigation__item" data-navigationlink="${element}">
                <a href="#">${element}</a>
                </li>
                `;

    return acc;
  }, '');
};

export default {
  placeForInsert: '',
  currentPage: '',

  createLinks(placeForInsert, elements) {
    this.placeForInsert = placeForInsert;
    placeForInsert.innerHTML = navigationListMarkup(elements);
    const activeLink = placeForInsert.querySelector('[data-navigationlink]');
    activeLink.classList.add('activeLink');
    this.currentPage = activeLink.dataset.navigationlink;
  },

  getActiveLink(e) {
    e.preventDefault();
    console.log(e.target);
    if (e.target.nodeName === 'LI' || e.target.nodeName === 'A') {
      console.dir(e.target);
      const dataAttribute = e.target.dataset.navigationlink
        ? e.target.dataset.navigationlink
        : e.target.closest('[data-navigationlink]').dataset.navigationlink;
      const activeLink = this.placeForInsert.querySelector(
        '[data-navigationlink]',
      );
      activeLink.classList.add('activeLink');
      return dataAttribute;
    }
  },
};
