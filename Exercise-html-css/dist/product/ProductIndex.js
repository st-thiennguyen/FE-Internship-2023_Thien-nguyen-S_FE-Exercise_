import { cart } from '../cart/CartIndex.js';
import data from '../data/mook-data.js';
import { RerenderUI } from '../index.js';
import Product from '../product/Product.js';
import productListRender from '../product/ProductRender.js';
const products = data.map((prod) => new Product(prod));
productListRender(products, 'product-bestseller');
productListRender(products, 'product-recommend');
export const handleAddtoCart = (item) => {
    cart.addItem(item);
    RerenderUI('#cart-count', cart.cartCount());
};
