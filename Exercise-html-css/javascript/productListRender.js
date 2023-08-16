const productList = (data, idElement) => {
  // find root element
  let productBox = document.querySelector(`#${idElement}`);
  // Create product list ul
  let productListEl = document.createElement("ul");
  productListEl.className = "row";
  console.log(productBox);
  //prettier-ignore
  {
    data?.length &&
      data.forEach((product) => {
        const prodSalePrice = Number(product.price - (product.price / 100) * product.discount).toFixed(2);
        productListEl.innerHTML += `
        <li class="col col-3 col-sm-6">
            <div class="product">
                <a class="product-action ${product.discount ? 'discounted' : ''}" href="#">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" />
                        <div class="product-cart d-flex justify-center item-center">
                            <button data-index="${product.id}" class="btn btn-cart-add">Add to cart</button>
                        </div>
                        ${product.discount ? `<span class="sale-product bagde bagde-red">-${product.discount}%</span>` : ''}
                    </div>
                    <div><h4 class="product-name">${product.name}</h4></div>
                    <div class="product-price d-flex justify-between">
                        ${product.discount ? `<span class="product-price-sale">$ ${prodSalePrice}</span>` : ''}
                        <span class="product-price-base">$ ${product.price}</span>
                    </div>
                </a>
            </div>
        </li>`;
      });
  }

  productBox.appendChild(productListEl);
  console.log(productListEl);
};

export default productList;
