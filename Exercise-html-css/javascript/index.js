import data from "./data.js";
import Product from "./product.js";
import productListRender from "./productListRender.js";
import CartRender from "./cartListRender.js";
import Cart from "./cart.js";

const products = data.map((item) => new Product(item));

productListRender(products, "product-bestseller");
productListRender(products, "product-recommend");

let carts = new Cart();

const cartCountEl = document.querySelector("#cart-count");

CartRender(carts.productsCart, "shop-cart");

const handleAddtoCart = (idProd) => {
  const newProd = products.find((prod) => prod.id == idProd);
  carts.addProduct(newProd, 1);
  cartCount();
};

const addToCartEvent = () => {
  const cartBtns = document.querySelectorAll(".btn-cart-add");
  cartBtns.forEach((cartButton) => {
    cartButton.addEventListener("click", (event) => {
      event.preventDefault();
      const idProd = cartButton.getAttribute("data-index");
      handleAddtoCart(idProd);
    });
  });
};

const handleClickPlusCart = () => {
  const plusBtns = document.querySelectorAll(".btn-cart-plus");
  plusBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const prodId = btn.getAttribute("data-index");
      const prod = carts.productsCart.find((prod) => prod.id == prodId);
      carts.addProduct(prod, 1);
    });
  });
};

const handleClickMinusCart = () => {
  const minusBtns = document.querySelectorAll(".btn-cart-minus");
  minusBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const prodId = btn.getAttribute("data-index");
      const prod = carts.productsCart.find((prod) => prod.id == prodId);
      carts.addProduct(prod, -1);
    });
  });
};

const handleRemoveCart = () => {
  const removeBtns = document.querySelectorAll(".product-remove-link");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const prodId = btn.getAttribute("data-index");
      const prod = carts.productsCart.find((prod) => prod.id == prodId);
      carts.deleteProduct(prod);
    });
  });
};

addToCartEvent();
handleClickPlusCart();
handleClickMinusCart();
handleRemoveCart();

const cartCount = () => {
  let count = carts.countCart();
  cartCountEl.innerText = count;
};

cartCount();
