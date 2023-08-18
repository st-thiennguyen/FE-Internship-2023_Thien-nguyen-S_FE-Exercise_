import IProduct from "../product/IProduct.js";

interface ICartItem extends Omit<IProduct, 'status'>{
    quantity : number;
    subTotal : number;
    finalPrice : number;
}

export default ICartItem;