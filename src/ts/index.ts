//import App from './components/app/app';
import '../css/normalize.css';
import '../css/style.min.css';
import { products } from './products';
import filtersContent from './filtersContent';
import mainContent from './mainContent';
import changeView from './changeView';

filtersContent(products);
mainContent(products);
changeView();
