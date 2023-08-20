import { RerenderUI } from '../index.js';
import Cart from './cart.js';
import { cart, changeQuantity, renderCartUi } from './cart-index.js';

const CartRender = (data: Cart, idElement: string) => {
  let cartTableEl = document.querySelector(`#${idElement}`);
  let tableEl = document.createElement('table');
  tableEl.className = 'cart-table';
  tableEl.id = 'cart-list';

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
                  <span id="prod-quantity-${cartItem.id}" class="quantity">${cartItem.quantity}</span>
                  <button data-index="${cartItem.id}" class="btn-cart-plus">+</button>
              </td>
              <td id="product-subtotal-${cartItem.id}" class="product-subtotal">$${(cartItem.subTotal).toFixed(2)}</td>
              <td class="product-remove">
                  <button class="product-remove-link" data-index="${cartItem.id}">
                      <i class="icon icon-small icon-trash"></i>
                  </button>
              </td>
          </tr>`;
        });

        const table = document.querySelector('#cart-list');
        if (table) {
          cartTableEl.replaceChild(tableEl, table);
        } else {
          cartTableEl.appendChild(tableEl);
          cartTableEl.innerHTML += 
        `
          <div class="cart-total d-flex justify-between item-center">
            <a href="index.html" class="btn btn-primary">
                Back to home
            </a>
            <div class="d-flex justify-end item-center">
              <p class="total-price">
              Total : <span class="price" id="cart-total-price">$${cart.getTotal()}</span>
              </p>
              <a href="" class="cart-checkout btn btn-primary">
              Proceed checkout
              </a>
            </div>
          </div>`;

          
        }
        
      }

  const plusBtns: NodeListOf<Element> = document.querySelectorAll('.btn-cart-plus');
  plusBtns.forEach((btn: Element) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      changeQuantity(btn, 1);
    });
  });

  const minusBtns: NodeListOf<Element> = document.querySelectorAll('.btn-cart-minus');
  minusBtns.forEach((btn: Element) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      changeQuantity(btn, -1);
    });
  });

  const removeBtns: NodeListOf<Element> = document.querySelectorAll('.product-remove-link');
  removeBtns.forEach((btn: Element) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const prodId = Number(btn.getAttribute('data-index'));
      cart.deleteItem(prodId);
      RerenderUI('#cart-count', cart.cartCount());
      RerenderUI('#cart-total-price', `$${cart.getTotal().toFixed(2)}`);
      renderCartUi();
    });
  });
};

export default CartRender;
