import CartItem from "./CartItem.js";
import ICart from "./ICart.js";

class Cart implements ICart {
  items: CartItem[];
  constructor(items: CartItem[]) {
    this.items = items;
    this.getCart();
  }
  getCart(): void {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    this.items = cart;
  }

  addItem(item: CartItem): void {
    const cartItem = this.items.find((prod) => prod.id === item.id);    
    if (!cartItem) {
      this.items.push(item);
    } else {
      cartItem.quantity += item.quantity;
    }
    this.saveCart();
  }

  saveCart(): void {
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  deleteItem(item:CartItem): void {
    this.items = this.items.filter((prod) => prod.id != item.id);
    this.saveCart();
  }

  getTotal(): number {
    return this.items.reduce((total, item) => (total *= item.quantity *item.price),0);
  }

  cartCount(): number {
    return this.items.reduce((total, item) => (total += item.quantity),0);
  }
}

export default Cart;