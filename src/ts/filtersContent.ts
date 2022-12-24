import { Product } from './types';
import { queryElement } from './types';
import { Category } from './types';
import { Brand } from './types';

const filtersContent = (products: Product[]) => {
    let categoryArray: string[] = products.map((el) => el.category);

    let categoryObj: Category = {};
    categoryObj = categoryArray.reduce(function (prev: Category, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});

    console.log(typeof categoryObj.smartphones);
    categoryArray = [...new Set(categoryArray)];

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
        span.innerHTML = `(${categoryObj[el]}/${categoryObj[el]})`;
    });

    let brandArray = products.map((el) => el.brand);
    let brandObj: Brand = {};
    brandObj = brandArray.reduce(function (prev: Brand, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});

    brandArray = [...new Set(brandArray)];
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
        span.innerHTML = `(${brandObj[el]}/${brandObj[el]})`;
    });
};

export default filtersContent;
