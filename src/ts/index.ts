//import App from './components/app/app';
import '../css/normalize.css';
import '../css/style.min.css';
import { products } from './products';
import filtersContent from './filtersContent';
import mainContent from './mainContent';
import filter from './filters';
import { loadCheckboxes } from './savelocalStorage';

document.addEventListener('DOMContentLoaded', () => {
    filtersContent(products);
    mainContent(products);
    filter(products);
    loadCheckboxes();
});
