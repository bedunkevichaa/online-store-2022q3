import { queryElement } from './types';

const changeView = () => {
    const smallView = queryElement(document, HTMLDivElement, '.small-v');
    const bigView = queryElement(document, HTMLDivElement, '.big-v');
    const bigItems = document.querySelectorAll('.big-item');
    const itemsInfo = document.querySelectorAll('.item-info');

    smallView.addEventListener('click', () => {
        bigView.classList.remove('active-mode');
        smallView.classList.add('active-mode');

        bigItems.forEach((el) => {
            el.classList.add('small-item');
            el.classList.remove('big-item');
        });

        itemsInfo.forEach((el) => {
            el.classList.add('hide');
            el.classList.remove('show');
        });
    });
    bigView.addEventListener('click', () => {
        smallView.classList.remove('active-mode');
        bigView.classList.add('active-mode');

        bigItems.forEach((el) => {
            el.classList.add('big-item');
            el.classList.remove('small-item');
        });

        itemsInfo.forEach((el) => {
            el.classList.add('show');
            el.classList.remove('hide');
        });
    });
};

export default changeView;
