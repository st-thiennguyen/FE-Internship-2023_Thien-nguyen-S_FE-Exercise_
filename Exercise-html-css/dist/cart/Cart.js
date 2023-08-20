class Cart {
    constructor(items) {
        this.items = items;
        this.getCart();
    }
    getCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.items = cart;
    }
    addItem(item) {
        const cartItem = this.items.find((prod) => prod.id === item.id);
        if (!cartItem) {
            this.items.push(item);
        }
        else {
            cartItem.quantity += item.quantity;
            cartItem.subTotal += item.finalPrice * item.quantity;
        }
        this.saveCart();
    }
    updateItem(idProd, quantity) {
        let cartItem = this.items.find((item) => item.id === idProd);
        if (cartItem !== null) {
            cartItem.quantity += quantity;
            cartItem.subTotal = cartItem.finalPrice * cartItem.quantity;
        }
        if (cartItem.quantity === 0) {
            this.deleteItem(idProd);
        }
        this.saveCart();
    }
    getSubTotalItem(cartItemId) {
        const item = this.items.find((prod) => prod.id === cartItemId);
        return item ? item.subTotal : 0;
    }
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }
    deleteItem(idProd) {
        this.items = this.items.filter((prod) => prod.id != idProd);
        this.saveCart();
    }
    getQuantityItem(cartItemId) {
        const item = this.items.find((prod) => prod.id === cartItemId);
        return item ? item.quantity : 0;
    }
    getTotal() {
        return this.items.reduce((total, item) => (total += item.quantity * item.finalPrice), 0);
    }
    cartCount() {
        return this.items.reduce((total, item) => (total += item.quantity), 0);
    }
}
export default Cart;
