import "./product/ProductIndex.js";
import "./cart/CartIndex.js";
import { cart } from "./cart/CartIndex.js";

window.addEventListener("scroll", () => {
  const header = document.querySelector<HTMLElement>("#header");
  const headerDesktop = document.querySelector<HTMLElement>(".header-desktop");
  const cartPage = document.querySelector("#section-cart");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "#333";
    headerDesktop.style.marginTop = "30px";
  } else {
    !cartPage && (header.style.backgroundColor = "transparent");
  }
});

export const RerenderUI = (element: string, value: any) => {
  const box = document.querySelector(element);
  if (box) {
    box.textContent = value;
  }
};

RerenderUI("#cart-count", `${cart.cartCount()}`);
RerenderUI("#cart-total-price", `$${cart.getTotal().toFixed(2)}`);
