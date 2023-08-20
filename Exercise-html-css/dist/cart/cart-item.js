class CartItem {
    constructor({ id, name, image, price, discount, finalPrice }, quantity) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.discount = discount;
        this.quantity = quantity;
        this.finalPrice = finalPrice;
        this.subTotal = finalPrice * this.quantity;
    }
}
export default CartItem;
