import './navigation.css';

const navigation = (placeForInsert, elements) => {
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

  placeForInsert.innerHTML = navigationListMarkup(elements);
};

export const setActiveLink = e => {
  e.preventDefault();
  if (
    e.target !== e.currentTarget &&
    (e.target.nodeName === 'LI' || e.target.nodeName === 'A')
  ) {
    console.dir(e.target);
    const activeLink = e.target.dataset.navigationlink
      ? e.target.dataset.navigationlink
      : e.target.closest('[data-navigationlink]').dataset.navigationlink;
    console.log(activeLink);
  } else return;
};

export default navigation;
