class Cart {
  constructor(item) {
    this.item = [];
    this.getCart();
  }

  addProduct = (product, quantity = 1) => {
    const check = this.item.find((prod) => prod.id === product.id);
    if (!check) {
      this.item.push({ ...product, quantity });
    } else {
      check.quantity += quantity;
    }
    localStorage.setItem("cart", JSON.stringify(this.item));
  };

  deleteProduct = (product) => {
    this.item.filter((prod) => prod.id != product.id);
  };

  countCart = () => {
    return this.item.reduce((total, item) => (total += item.quantity), 0);
  };

  getCart = () => {
    const carts = JSON.parse(localStorage.getItem("cart")) || [];
    this.item = carts;
  };

  totalCart = () => {
    return this.item.reduce(
      (total, item) => (total *= Number(item.quantity) * Number(item.price)),
      0
    );
  };

  reset = () => {
    this.item = [];
  };
}

export default Cart;
