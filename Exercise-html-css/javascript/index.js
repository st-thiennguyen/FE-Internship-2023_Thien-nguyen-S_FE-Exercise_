import data from "./data.js";
import Product from "./product.js";
import productList from "./productListRender.js";
import Cart from "./cart.js";

const products = data.map((item) => new Product(item));

productList(products, "product-bestseller");

let carts = new Cart();

const cartCountEl = document.querySelector("#cart-count");

const handleAddtoCart = (idProd) => {
  const newProd = products.find((prod) => prod.id == idProd);
  carts.addProduct(newProd, 1);
  cartCount();
  // carts.reset();
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

addToCartEvent();

const cartCount = () => {
  let count = carts.countCart();
  cartCountEl.innerText = count;
};

cartCount();
