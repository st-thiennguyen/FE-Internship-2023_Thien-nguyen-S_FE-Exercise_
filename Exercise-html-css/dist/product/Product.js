class Product {
    constructor({ id, name, image, price, discount, status }) {
        var _a;
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.discount = discount;
        this.status = status;
        this.finalPrice = this.price - (this.price / 100) * ((_a = this.discount) !== null && _a !== void 0 ? _a : 0);
    }
}
export default Product;
