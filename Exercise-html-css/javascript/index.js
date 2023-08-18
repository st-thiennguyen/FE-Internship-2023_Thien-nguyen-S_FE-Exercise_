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
      reRenderCartUI(prodId);
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
      reRenderCartUI(prodId);
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
      CartRender(carts.productsCart, "shop-cart", true);
    });
  });
};

//prettier-ignore
const reRenderCartUI = (prodId) => {
  //  Get cart item with prodId
  const cartProd = carts.productsCart.find((prod) => prod.id == prodId);
  // Get product sale price
  const prodSalePrice = Number(cartProd.price - (cartProd.price / 100) * cartProd.discount).toFixed(2);
  // Get total price of prod
  const price = cartProd.discount ? prodSalePrice : cartProd.price;

  // Update quantity
  document.querySelectorAll(".cart-item-quantity").forEach((qty) => {
    if (prodId == qty.getAttribute("data-index")) {
      qty.innerText = cartProd.quantity;
    }
  });
  // Update UI of total cart
  let totalCart = carts.totalCart();
  const totalEl = document.querySelector("#cart-total-price");
  totalEl.innerText = `$${Number(totalCart).toFixed(2)}`;
  // update UI subtitle
  document.querySelector(`#subtotal-product-${prodId}`).innerText = `$${(cartProd.quantity * price).toFixed(2)}`;
  
  cartCount();
};

const cartCount = () => {
  let count = carts.countCart();
  cartCountEl.innerText = count;
};

addToCartEvent();
handleClickPlusCart();
handleClickMinusCart();
handleRemoveCart();
cartCount();
