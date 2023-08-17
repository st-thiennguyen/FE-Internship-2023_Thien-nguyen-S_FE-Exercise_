import CartRender from "./cartListRender.js";

class Cart {
  constructor(productsCart) {
    this.productsCart = [];
    this.getCart();
  }

  addProduct = (product, quantity = 1) => {
    const check = this.productsCart.find((prod) => prod.id === product.id);
    if (!check) {
      this.productsCart.push({ ...product, quantity });
    } else {
      check.quantity += quantity;
    }
    this.saveCart();
  };

  saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(this.productsCart));
  };

  deleteProduct = (product) => {
    this.productsCart = this.productsCart.filter(
      (prod) => prod.id != product.id
    );
    this.saveCart();
  };

  countCart = () => {
    return this.productsCart.reduce(
      (total, item) => (total += item.quantity),
      0
    );
  };

  getCart = () => {
    const carts = JSON.parse(localStorage.getItem("cart")) || [];
    this.productsCart = carts;
  };

  totalCart = () => {
    return this.productsCart.reduce(
      (total, item) => (total *= Number(item.quantity) * Number(item.price)),
      0
    );
  };

  reset = () => {
    this.productsCart = [];
  };
}

export default Cart;
