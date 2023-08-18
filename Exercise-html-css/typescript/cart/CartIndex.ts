import Cart from "./Cart.js";
import CartRender from "./CartRender.js";

export let cart:Cart = new Cart([]);

CartRender(cart, "shop-cart");

export const updateQuantityItem = (idProd:number, quantity:number) =>{
    const prod = cart.items.find((prod) => prod.id == idProd);
    cart.addItem(prod);
}