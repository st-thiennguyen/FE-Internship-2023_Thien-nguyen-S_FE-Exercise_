import { cart } from '../cart/cart-index.js';
import data from '../data/mook-data.js';
import { RerenderUI } from '../index.js';
import Product from './product.js';
import productListRender from './product-render.js';
const products = data.map((prod) => new Product(prod));
productListRender(products, 'product-bestseller');
productListRender(products, 'product-recommend');
export const handleAddtoCart = (item) => {
    cart.addItem(item);
    RerenderUI('#cart-count', cart.cartCount());
};
