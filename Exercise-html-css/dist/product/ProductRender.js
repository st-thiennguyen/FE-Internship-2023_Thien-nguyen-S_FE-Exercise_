import CartItem from "../cart/CartItem.js";
import PRODUCT_STATUS from "../utils/ProductStatus.js";
import { handleAddtoCart } from "./ProductIndex.js";
const productListRender = (data, idElement) => {
    let productBox = document.querySelector(`#${idElement}`);
    let productListEl = document.createElement("ul");
    productListEl.className = "row";
    if (productBox != null) {
        {
            (data === null || data === void 0 ? void 0 : data.length) &&
                data.forEach((product) => {
                    productListEl.innerHTML += `
          <li class="col col-3 col-sm-6">
              <div class="product">
                  <a class="product-action ${product.discount ? 'discounted' : ''}" href="#">
                      <div class="product-image">
                          <img src="${product.image}" alt="${product.name}" />
                          <div class="product-cart d-flex justify-center item-center">
                              <button data-index="${product.id}" class="btn btn-cart-add">Add to cart</button>
                          </div>
                          ${product.status === PRODUCT_STATUS.OUT_OF_STOCK ? `<span class="bagde bagde-grey product-status">Out of stock</span>` : ''}
                          ${product.discount ? `<span class="sale-product bagde bagde-red">-${product.discount}%</span>` : ''}
                      </div>
                      <div><h4 class="product-name">${product.name}</h4></div>
                      <div class="product-price d-flex justify-between">
                          ${product.discount ? `<span class="product-price-sale">$ ${product.finalPrice}</span>` : ''}
                          <span class="product-price-base">$ ${product.price}</span>
                      </div>
                  </a>
              </div>
          </li>`;
                });
            const cartButtons = productListEl.querySelectorAll(".btn-cart-add");
            cartButtons.forEach((btn) => {
                const idProd = Number(btn.getAttribute("data-index"));
                const product = data.find((prod) => prod.id === idProd);
                if (product.status === PRODUCT_STATUS.OUT_OF_STOCK) {
                    btn.disabled = true;
                    btn.classList.add("disabled");
                }
                btn.addEventListener("click", (event) => {
                    event.preventDefault();
                    const cartItem = new CartItem(product, 1);
                    handleAddtoCart(cartItem);
                });
            });
        }
        productBox.appendChild(productListEl);
    }
};
export default productListRender;
