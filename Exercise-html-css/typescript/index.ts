import "./product/ProductIndex.js";
import "./cart/CartIndex.js";
import { cart } from "./cart/CartIndex.js";

const cartCountEl: Element = document.querySelector("#cart-count");
const cartSize = cart.cartCount();
cartCountEl.textContent = `${cartSize}`;

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    document.querySelector<HTMLElement>('#header').style.backgroundColor = "#333";
    document.querySelector<HTMLElement>('.header-desktop').style.marginTop = "30px";
    
  }else{
    document.querySelector<HTMLElement>('#header').style.backgroundColor = 'transparent';
  }
  const cartPage = document.querySelector('#section-cart');
  cartPage && (document.querySelector<HTMLElement>('#header').style.backgroundColor = "#333");
});

export const RerenderUI = (element: string, value: any) => {
  const box = document.querySelector(element);
  box && (box.textContent = value);
};

RerenderUI('#cart-total-price', `$${cart.getTotal().toFixed(2)}`);
