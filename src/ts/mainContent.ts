import { Product } from './types';
import { queryElement } from './types';

const mainContent = (products: Product[]) => {
    products.forEach((el) => {
        const productsItem = queryElement(document, HTMLDivElement, '.products-items');
        const bigItem = document.createElement('div');
        bigItem.className = 'big-item';
        productsItem.append(bigItem);

        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        bigItem.append(productItem);

        const itemWrapper = document.createElement('div');
        itemWrapper.className = 'item-wrapper';
        itemWrapper.style.background = `url(${el.images[el.images.length - 1]}) 0% 0% / cover`;
        productItem.append(itemWrapper);

        const itemText = document.createElement('div');
        itemText.className = 'item-text';
        itemWrapper.append(itemText);

        const itemTitle = document.createElement('div');
        itemTitle.className = 'item-title';
        itemTitle.innerHTML = `${el.title}`;
        itemText.append(itemTitle);

        const itemInfo = document.createElement('div');
        itemInfo.className = 'item-info';
        itemText.append(itemInfo);

        const itemInfoItem = document.createElement('div');
        itemInfoItem.className = 'item-info-item';
        itemInfo.append(itemInfoItem);

        const p1 = document.createElement('p');
        itemInfoItem.append(p1);

        const span1 = document.createElement('span');
        span1.innerHTML = `Category: `;
        p1.append(span1);
        p1.append(el.category);

        const p2 = document.createElement('p');
        itemInfoItem.append(p2);

        const span2 = document.createElement('span');
        span2.innerHTML = `Brand: `;
        p2.append(span2);
        p2.append(el.brand);

        const p3 = document.createElement('p');
        itemInfoItem.append(p3);

        const span3 = document.createElement('span');
        span3.innerHTML = `Price: `;
        p3.append(span3);
        p3.append(`${el.price}`);

        const p4 = document.createElement('p');
        itemInfoItem.append(p4);

        const span4 = document.createElement('span');
        span4.innerHTML = `Discount: `;
        p4.append(span4);
        p4.append(`${el.discountPercentage}%`);

        const p5 = document.createElement('p');
        itemInfoItem.append(p5);

        const span5 = document.createElement('span');
        span5.innerHTML = `Rating: `;
        p5.append(span5);
        p5.append(`${el.rating}`);

        const p6 = document.createElement('p');
        itemInfoItem.append(p6);

        const span6 = document.createElement('span');
        span6.innerHTML = `Stock: `;
        p6.append(span6);
        p6.append(`${el.stock}`);

        const itemButtons = document.createElement('div');
        itemButtons.className = 'item-buttons';
        itemWrapper.append(itemButtons);

        const btnAdd = document.createElement('button');
        btnAdd.innerHTML = 'ADD TO CART';
        itemButtons.append(btnAdd);

        const btnDetails = document.createElement('button');
        btnDetails.innerHTML = 'DETAILS';
        itemButtons.append(btnDetails);
    });
};

export default mainContent;
