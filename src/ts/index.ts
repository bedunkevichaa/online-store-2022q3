//import App from './components/app/app';
import '../css/normalize.css';
import '../css/style.min.css';
import { products } from './products';
import filtersContent from './filtersContent';
import mainContent from './mainContent';
import filter from './filters';
import { loadCheckboxes } from './savelocalStorage';
import rangeInputs from './rangeInputs';

document.addEventListener('DOMContentLoaded', () => {
    rangeInputs();
    filtersContent(products);
    mainContent(products);
    filter(products);
    loadCheckboxes();
});
