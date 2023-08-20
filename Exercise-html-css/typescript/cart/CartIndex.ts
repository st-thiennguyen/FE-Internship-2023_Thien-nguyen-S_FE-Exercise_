import { RerenderUI } from "../index.js";
import Cart from "./Cart.js";
import CartRender from "./CartRender.js";

export let cart: Cart = new Cart([]);

const cartPage = document.querySelector("#section-cart");
const header = document.querySelector<HTMLElement>("#header");
if (cartPage) {
  header.style.backgroundColor = "#333";
}

CartRender(cart, "shop-cart");

export const changeQuantity = (btn: Element, quantity: number): void => {
  const prodId = Number(btn.getAttribute("data-index"));
  cart.updateItem(prodId, quantity);
  RerenderUI(`#prod-quantity-${prodId}`, cart.getQuantityItem(prodId));
  RerenderUI("#cart-count", cart.cartCount());
  RerenderUI(`#product-subtotal-${prodId}`, `$${cart.getSubTotalItem(prodId).toFixed(2)}`);
  RerenderUI("#cart-total-price", `$${cart.getTotal().toFixed(2)}`);
  if (cart.getQuantityItem(prodId) === 0) {
    renderCartUi();
  }
};

export const renderCartUi = () => {
  CartRender(cart, "shop-cart");
};
