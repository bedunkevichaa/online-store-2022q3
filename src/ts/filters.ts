import { Product } from './types';
import { queryElement } from './types';
import loadContent from './loadContent';
import changeView from './changeView';
import { saveCheckboxes } from './savelocalStorage';
import { saveContentLocalStorage } from './savelocalStorage';
// import { products } from './products';

const filter = (products: Product[]) => {
    const productsItem = queryElement(document, HTMLDivElement, '.products-items');
    const searchURL = new URL(window.location.href);
    let checkboxCategoryValues: string[] = [];
    let checkboxBrandValues: string[] = [];
    const checkboxesBrand = document.querySelectorAll(".brand input[type='checkbox']") as NodeListOf<HTMLInputElement>;
    const checkboxesCategory = document.querySelectorAll(
        ".category input[type='checkbox']"
    ) as NodeListOf<HTMLInputElement>;

    const isChecked = () => {
        return document.querySelectorAll('input:checked').length === 0 ? false : true;
    };
    const isCheckedBrand = () => {
        return document.querySelectorAll('.brand input:checked').length === 0 ? false : true;
    };
    const isCheckedCategory = () => {
        return document.querySelectorAll('.category input:checked').length === 0 ? false : true;
    };

    const checkboxes = document.querySelectorAll("input[type='checkbox']") as NodeListOf<HTMLInputElement>;

    checkboxes.forEach((box) => {
        // box.checked = false;
        box.addEventListener('change', () => filterCards());
    });

    function grabCheckboxCategoryValues() {
        const checkboxCategoryValues: string[] = [];
        checkboxesCategory.forEach((checkbox) => {
            if (checkbox.checked) checkboxCategoryValues.push(checkbox.id);
        });
        return checkboxCategoryValues;
    }

    function grabCheckboxBrandValues() {
        const checkboxBrandValues: string[] = [];
        checkboxesBrand.forEach((checkbox) => {
            if (checkbox.checked) checkboxBrandValues.push(checkbox.id);
        });
        return checkboxBrandValues;
    }

    const filterCards = () => {
        checkboxCategoryValues = grabCheckboxCategoryValues();
        checkboxBrandValues = grabCheckboxBrandValues();
        productsItem.innerHTML = '';
        products.forEach((el) => {
            if (checkboxCategoryValues.includes(el.category) && checkboxBrandValues.includes(el.brand)) {
                loadContent(el);
                searchURL.searchParams.set('category', el.category);
                searchURL.searchParams.set('brand', el.brand);
            } else if (checkboxCategoryValues.length > 0 && checkboxBrandValues.length === 0) {
                if (checkboxCategoryValues.includes(el.category)) {
                    loadContent(el);
                    searchURL.searchParams.set('category', el.category);
                    //(window as Window).location = `/${searchURL}`;
                }
            } else if (checkboxBrandValues.length > 0 && checkboxCategoryValues.length === 0) {
                if (checkboxBrandValues.includes(el.brand)) {
                    loadContent(el);
                    searchURL.searchParams.set('brand', el.brand);
                }
            }
            if (!isChecked()) {
                loadContent(el);
                searchURL.searchParams.delete('category');
                searchURL.searchParams.delete('brand');
            }
            if (!isCheckedBrand()) searchURL.searchParams.delete('brand');
            if (!isCheckedCategory()) searchURL.searchParams.delete('category');
        });
        changeView();
        saveCheckboxes();
        saveContentLocalStorage();
        window.history.pushState({}, '', searchURL);
        // rangeInputs();
    };
};

export default filter;
