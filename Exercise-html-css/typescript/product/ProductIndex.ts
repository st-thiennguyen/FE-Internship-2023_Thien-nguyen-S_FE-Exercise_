import Cart from '../cart/Cart.js';
import { cart } from '../cart/CartIndex.js';
import CartItem from '../cart/CartItem.js';
import data from '../data/mook-data.js';
import { RerenderUI } from '../index.js';
import Product from '../product/Product.js';
import productListRender from '../product/ProductRender.js';


const products = data.map((prod:Product) => new Product(prod));

productListRender(products, "product-bestseller");
productListRender(products, "product-recommend");


export const handleAddtoCart = (item:CartItem) => {
  cart.addItem(item);
  RerenderUI("#cart-count",  cart.cartCount());
};


// export const countCart = () =>{
//   const cartCountEl:Element = document.querySelector("#cart-count");
//   const cartSize = cart.cartCount();
//   cartCountEl.textContent = `${cartSize}`;
// }


