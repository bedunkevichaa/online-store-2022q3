import { Product } from './types';
import { queryElement } from './types';

const filtersContent = (products: Product[]) => {
    let categoryArray = products.map((el) => el.category);
    categoryArray = [...new Set(categoryArray)];
    console.log(categoryArray);

    categoryArray.forEach((el) => {
        const checkboxLine = document.createElement('div');
        checkboxLine.className = 'checkbox-line';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `${el}`;
        const label = document.createElement('label');
        label.htmlFor = `${el}`;
        const span = document.createElement('span');
        const categoryList = queryElement(document, HTMLDivElement, '#category-list');

        categoryList.appendChild(checkboxLine);
        checkboxLine.appendChild(input);
        checkboxLine.appendChild(label);
        label.innerHTML = `${el}`;
        checkboxLine.appendChild(span);
        span.innerHTML = '(5/5)';
    });

    let brandArray = products.map((el) => el.brand);
    brandArray = [...new Set(brandArray)];
    console.log(brandArray);
    brandArray.forEach((el) => {
        const checkboxLine = document.createElement('div');
        checkboxLine.className = 'checkbox-line';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `${el}`;
        const label = document.createElement('label');
        label.htmlFor = `${el}`;
        const span = document.createElement('span');
        const brandList = queryElement(document, HTMLDivElement, '#brand-list');

        brandList.appendChild(checkboxLine);
        checkboxLine.appendChild(input);
        checkboxLine.appendChild(label);
        label.innerHTML = `${el}`;
        checkboxLine.appendChild(span);
        span.innerHTML = '(5/5)';
    });
};

export default filtersContent;
