import IProduct from '../product/IProduct';
import PRODUCT_STATUS from '../utils/ProductStatus.js';
const data: IProduct[] = [
  {
    id: 1,
    name: 'T-Shirt Summer Vibes',
    image: 'assets/images/product-01.png',
    price: 119.99,
    discount: 30,
    status: PRODUCT_STATUS.AVAILABLE
  },
  {
    id: 2,
    name: 'Loose Knit 3/4 Sleeve',
    image: 'assets/images/product-02.png',
    price: 119.99,
    status: PRODUCT_STATUS.AVAILABLE
  },
  {
    id: 3,
    name: 'Basic Slim Fit T-Shirt',
    image: 'assets/images/product-03.png',
    price: 119.99,
    status: PRODUCT_STATUS.OUT_OF_STOCK
  },
  {
    id: 4,
    name: 'Loose Textured T-Shirt',
    image: 'assets/images/product-04.png',
    price: 119.99,
    status: PRODUCT_STATUS.AVAILABLE
  }
];

export default data;
