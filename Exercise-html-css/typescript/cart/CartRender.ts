import Cart from "./Cart.js";
import { cart } from "./CartIndex.js";

const CartRender = (data:Cart, idElement:string) => {
    let cartTableEl = document.querySelector(`#${idElement}`);
    let tableEl = document.createElement('table');
    tableEl.className = "cart-table";
    tableEl.id = "cart-list";
    let cartTotal = 0;
  
    tableEl.innerHTML = `
      <tr class="table-header">
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
      </tr>
    `;
    //prettier-ignore
    if (cartTableEl != null) {
      data.items?.length &&
        data.items.forEach((cartItem) => {
          
        //   const prodSalePrice = Number(product.price - (product.price / 100) * product.discount).toFixed(2);
        //   const price = product.discount ? prodSalePrice : product.price;
        //   cartTotal += product.quantity * price;
          tableEl.innerHTML += 
          `<tr class="cart-item">
              <td class="product-image">
                  <a href="" class="product-link">
                  <div class="product-img d-inline-flex">
                      <img
                      src="${cartItem.image}"
                      alt="${cartItem.name}" />
                  </div>
                  </a>
              </td>
              <td class="product-name">
                  <a href="" class="product-link">${cartItem.name}</a>
              </td>
              <td class="product-price">$ ${cartItem.finalPrice}</td>
              <td class="product-quantity">
                  <button data-index="${cartItem.id}" class="btn-cart-minus">-</button>
                  <span class="quantity">${cartItem.quantity}</span>
                  <button data-index="${cartItem.id}" class="btn-cart-plus">+</button>
              </td>
              <td class="product-subtotal">$${(cartItem.subTotal).toFixed(2)}</td>
              <td class="product-remove">
                  <button class="product-remove-link" data-index="${cartItem.id}">
                      <i class="icon icon-small icon-trash"></i>
                  </button>
              </td>
          </tr>`;
        });
  
        tableEl.innerHTML += 
        `</table>
          <div class="cart-total d-flex justify-between item-center">
              <p class="total-price">
              Total : <span class="price" id="cart-total-price">$${cartTotal}</span>
              </p>
              <a href="" class="cart-checkout btn btn-primary">
              Proceed checkout
              </a>
          </div>`;
      }
  
      cartTableEl && cartTableEl.appendChild(tableEl);

      const plusBtns:NodeListOf<Element> = tableEl.querySelectorAll('.btn-cart-plus');      
      plusBtns.forEach((btn:Element) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            const prodId = btn.getAttribute("data-index");
            cart.updateItem(Number(prodId), 1);
        });
      });

      const minusBtns:NodeListOf<Element> = tableEl.querySelectorAll('.btn-cart-minus');
      minusBtns.forEach((btn:Element) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            const prodId = btn.getAttribute("data-index");
            cart.updateItem(Number(prodId), -1);
        });
      })
  };
  
  export default CartRender;
  