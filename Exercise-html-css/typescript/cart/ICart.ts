import CartItem from "./CartItem.js";

interface ICart{
    items : CartItem[],
    addItem(product:CartItem):void;
    saveCart():void;
    deleteItem(item:CartItem):void;
    getTotal():number;
    cartCount():number;
    getCart():void;
}

export default ICart;