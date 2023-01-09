import { queryElement } from './types';
import { products } from './products';
import loadContent from './loadContent';

const rangeInputs = () => {
    const fromSlider = queryElement(document, HTMLInputElement, '#fromSlider');
    const toSlider = queryElement(document, HTMLInputElement, '#toSlider');
    const fromInput = queryElement(document, HTMLSpanElement, '#fromInput');
    const toInput = queryElement(document, HTMLSpanElement, '#toInput');
    const productsItem = queryElement(document, HTMLDivElement, '.products-items');
    let valuesPrice: number[] = [];

    products.forEach((el) => {
        valuesPrice.push(el.price);
    });
    valuesPrice = [...new Set(valuesPrice)].sort((a, b) => a - b);
    console.log(valuesPrice);
    // fromSlider.step = `${valuesPrice}`;
    // toSlider.step = `${valuesPrice}`;

    function controlFromSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, fromInput: HTMLSpanElement) {
        const [from, to] = getParsed(fromSlider, toSlider);
        // console.log(valuesPrice[valuesPrice.indexOf(from) + 1]);
        if (from > to) {
            fromSlider.value = `${to}`;
            fromInput.innerHTML = `${to}`;
        } else {
            fromInput.innerHTML = `${from}`;
            // fromSlider.step = `${valuesPrice[valuesPrice.indexOf(to) + 1] - valuesPrice[valuesPrice.indexOf(to)]}`;
        }
        // fromSlider.value = `${valuesPrice[valuesPrice.indexOf(+fromSlider.value) + 1]}`;
        productsItem.innerHTML = '';
        products.forEach((el) => {
            if (+`${el.price}` >= +fromInput.innerHTML && +`${el.price}` <= +toInput.innerHTML) {
                loadContent(el);
            }
        });
    }

    function controlToSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, toInput: HTMLSpanElement) {
        const [from, to] = getParsed(fromSlider, toSlider);
        // fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
        // setToggleAccessible(toSlider);
        if (from <= to) {
            toSlider.value = `${to}`;
            toInput.innerHTML = `${to}`;
        } else {
            toInput.innerHTML = `${from}`;
            toSlider.value = `${from}`;
        }
        productsItem.innerHTML = '';
        products.forEach((el) => {
            if (+`${el.price}` >= +fromInput.innerHTML && +`${el.price}` <= +toInput.innerHTML) {
                loadContent(el);
            }
        });
    }

    function getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
        const from = parseInt(currentFrom.value, 10);
        const to = parseInt(currentTo.value, 10);
        return [from, to];
    }

    // function setToggleAccessible(currentTarget: HTMLInputElement) {
    //     const toSlider = queryElement(document, HTMLInputElement, '#toSlider');
    //     if (Number(currentTarget.value) <= 0) {
    //         toSlider.style.zIndex = `${2}`;
    //     } else {
    //         toSlider.style.zIndex = `${0}`;
    //     }
    // }

    // setToggleAccessible(toSlider);

    fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
    toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
};

export default rangeInputs;
