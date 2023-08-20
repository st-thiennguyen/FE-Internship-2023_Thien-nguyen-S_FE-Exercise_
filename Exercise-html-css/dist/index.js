import './product/product-index.js';
import './cart/cart-index.js';
import { cart } from './cart/cart-index.js';
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    const headerDesktop = document.querySelector('.header-desktop');
    const cartPage = document.querySelector('#section-cart');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#333';
        headerDesktop.style.marginTop = '30px';
    }
    else {
        !cartPage && (header.style.backgroundColor = 'transparent');
    }
});
export const RerenderUI = (element, value) => {
    const box = document.querySelector(element);
    if (box) {
        box.textContent = value;
    }
};
RerenderUI('#cart-count', `${cart.cartCount()}`);
RerenderUI('#cart-total-price', `$${cart.getTotal().toFixed(2)}`);
