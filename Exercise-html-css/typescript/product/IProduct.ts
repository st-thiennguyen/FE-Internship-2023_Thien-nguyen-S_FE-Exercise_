import PRODUCT_STATUS from '../utils/product-status.js';
interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number;
  status: PRODUCT_STATUS;
}

export default IProduct;
