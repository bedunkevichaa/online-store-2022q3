import { queryElement } from './types';

const changeView = () => {
    const smallView = queryElement(document, HTMLDivElement, '.small-v');
    const bigView = queryElement(document, HTMLDivElement, '.big-v');
    const bigItems = document.querySelectorAll('.big-item');
    const itemsInfo = document.querySelectorAll('.item-info');

    const toSmallView = () => {
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

        localStorage.setItem('View', 'smallView');
    };

    const toBigView = () => {
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

        localStorage.setItem('View', 'bigView');
    };

    smallView.addEventListener('click', toSmallView);
    bigView.addEventListener('click', toBigView);

    localStorage.getItem('View') === 'smallView' ? toSmallView() : toBigView();
};

export default changeView;
