import { Checkbox } from './types';
import { queryElement } from './types';
import changeView from './changeView';

export const saveCheckboxes = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']") as NodeListOf<HTMLInputElement>;
    const arrData: Checkbox[] = [];
    checkboxes.forEach((el) => {
        arrData.push({ id: el.id, checked: el.checked });
    });

    localStorage.setItem('inputs', JSON.stringify(arrData));
};

export const loadCheckboxes = () => {
    const checkboxes = JSON.parse(localStorage.getItem('inputs') || '{}') as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((el) => {
        queryElement(document, HTMLInputElement, `#${el.id}`).checked = el.checked;
    });
};

export const saveContentLocalStorage = () => {
    const productsItem = queryElement(document, HTMLDivElement, '.products-items');
    localStorage.setItem('content', JSON.stringify(productsItem.innerHTML));
};

export const loadContentLocalStorage = () => {
    const productsItem = queryElement(document, HTMLDivElement, '.products-items');
    productsItem.innerHTML = '';
    productsItem.innerHTML = JSON.parse(localStorage.getItem('content') || '{}');
    changeView();
};
