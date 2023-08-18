const CartRender = (data, idElement, reload = false) => {
  let cartTableEl = document.querySelector(`#${idElement}`);
  let cartTotal = 0;

  const render = () => {
    let tableElement = `
    <table class="cart-table" id="cart-list">
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
    data?.length &&
      data.forEach((product) => {
        
        const prodSalePrice = Number(product.price - (product.price / 100) * product.discount).toFixed(2);
        const price = product.discount ? prodSalePrice : product.price;
        cartTotal += product.quantity * price;
        tableElement += 
        `<tr class="cart-item">
            <td class="product-image">
                <a href="" class="product-link">
                <div class="product-img d-inline-flex">
                    <img
                    src="${product.image}"
                    alt="${product.name}" />
                </div>
                </a>
            </td>
            <td class="product-name">
                <a href="" class="product-link">${product.name}</a>
            </td>
            <td class="product-price">$ ${price}</td>
            <td class="product-quantity">
                <button data-index="${product.id}" class="btn-cart-minus">-</button>
                <span data-index="${product.id}" class="quantity cart-item-quantity">${product.quantity}</span>
                <button data-index="${product.id}" class="btn-cart-plus">+</button>
            </td>
            <td class="product-subtotal" id="subtotal-product-${product.id}">$${(product.quantity * price).toFixed(2)}</td>
            <td class="product-remove">
                <button class="product-remove-link" data-index="${product.id}">
                    <i class="icon icon-small icon-trash"></i>
                </button>
            </td>
        </tr>`;
      });

      tableElement += 
      `</table>
        <div class="cart-total d-flex justify-between item-center">
            <p class="total-price">
            Total : <span class="price" id="cart-total-price">$${cartTotal.toFixed(2)}</span>
            </p>
            <a href="" class="cart-checkout btn btn-primary">
            Proceed checkout
            </a>
        </div>`;
    }
    cartTableEl != null && (cartTableEl.innerHTML += tableElement);
  };

  const reRender = () => {
    console.log("A");
    cartTableEl.innerHTML = "";
    data = data;
  };

  reload && reRender();

  render();
};

export default CartRender;
