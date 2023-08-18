import Cart from "./Cart.js";
import CartRender from "./CartRender.js";

export let cart:Cart = new Cart([]);

CartRender(cart, "shop-cart");