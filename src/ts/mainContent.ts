import { Product } from './types';
import loadContent from './loadContent';
import { loadContentLocalStorage } from './savelocalStorage';
import filter from './filters';

const mainContent = (products: Product[]) => {
    products.forEach((el) => {
        loadContent(el);
    });

    loadContentLocalStorage();
    filter(products);
};

export default mainContent;
