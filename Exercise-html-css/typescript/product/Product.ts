import IProduct from './IProduct.js';
import PRODUCT_STATUS from '../utils/ProductStatus.js';

class Product implements IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  status: PRODUCT_STATUS;
  finalPrice: number;
  constructor({ id, name, image, price, discount, status }: Product) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
    this.status = status;
    this.finalPrice = this.price - (this.price / 100) * (this.discount ?? 0);
  }
}

export default Product;
