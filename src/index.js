import './styles.css';
import navigation from './components/navigation';

const elementsNav = ['Home', 'Products', 'Contacts', 'About', 'Cart'];
// const elementsCategories = ['Bread', 'Fruits', 'Vegetables', 'Meat', 'Fish'];

const navigation_header = document.querySelector('.navigation_header');
const navigation_main = document.querySelector('.main');

const nav = document.querySelector('.navigation_header');
const main = document.querySelector('main');

const getPage = e => {
  const link = navigation.getActiveLink(e);
  console.log(link);
};

navigation.createLinks(navigation_header, elementsNav);
// navigation(navigation_main, elementsCategories);

navigation_header.addEventListener('click', getPage);
