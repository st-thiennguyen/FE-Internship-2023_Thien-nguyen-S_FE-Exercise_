var data = [
  {
    id: 1,
    name: "T-Shirt Summer Vibes",
    image: "assets/images/product-01.png",
    price: 119.99,
    discount: 30,
  },
  {
    id: 2,
    name: "Loose Knit 3/4 Sleeve",
    image: "assets/images/product-02.png",
    price: 119.99,
  },
  {
    id: 3,
    name: "Basic Slim Fit T-Shirt",
    image: "assets/images/product-03.png",
    price: 119.99,
  },
  {
    id: 4,
    name: "Loose Textured T-Shirt",
    image: "assets/images/product-04.png",
    price: 119.99,
  },
];

var cartCountEl = document.getElementById("cart-count");

function createElProdToday() {
  // find root element
  var products = document.getElementsByClassName("product-list");
  // Create product list ul
  var productListEl = document.createElement("ul");
  productListEl.className = "row";
  if (products?.length) {
    data.forEach(function (item) {
      // Create li product item wrapper
      var productItemEl = document.createElement("li");
      productItemEl.className = "col col-3 col-sm-6";

      // Create a div wrapper product inside li
      var productEl = document.createElement("div");
      productEl.className = "product";

      // Create a action for click to item
      var productActionEl = document.createElement("a");
      productActionEl.className = "product-action";
      productActionEl.href = "#";

      // Create a div wrapper image of item and sale rate
      var productImageWrapper = document.createElement("div");
      productImageWrapper.className = "product-image";

      // create a image tag for show image
      var imgEl = document.createElement("img");
      imgEl.src = item.image;
      imgEl.alt = item.name;

      // Create a span for display sale rate
      var saleRate = document.createElement("span");
      saleRate.className = "sale-product bagde bagde-red";
      saleRate.innerHTML = "-" + item.discount + "%";

      // create element of show btn add to cart
      var addToCartEl = document.createElement("div");
      addToCartEl.className = "product-cart d-flex justify-center item-center";

      var addCartBtnEl = document.createElement("button");
      addCartBtnEl.className = "btn btn-cart-add";
      addCartBtnEl.innerHTML = "Add to cart";
      addCartBtnEl.addEventListener("click", (event) => addToCart(event, item));

      // Create product info div
      var productInfoEl = document.createElement("div");

      // Create product name element
      var productNameEl = document.createElement("h4");
      productNameEl.className = "product-name";
      productNameEl.innerHTML = item.name;

      // Create product price wrapper element
      var productPriceEl = document.createElement("div");
      productPriceEl.className = "product-price d-flex justify-between";

      // Create product sale price element
      var productSalePriceEl = document.createElement("span");
      productSalePriceEl.className = "product-price-sale";
      productSalePriceEl.innerHTML =
        "$ " +
        Number(item.price - (item.price / 100) * item.discount).toFixed(2);

      // Create product base price element
      var productBasePriceEl = document.createElement("span");
      productBasePriceEl.className = "product-price-base";
      productBasePriceEl.innerHTML = "$ " + item.price;

      addToCartEl.appendChild(addCartBtnEl);

      productImageWrapper.append(imgEl, addToCartEl);
      if (item.discount) {
        productActionEl.classList.add("discounted");
        productPriceEl.appendChild(productSalePriceEl);
        productImageWrapper.appendChild(saleRate);
        productPriceEl.appendChild(productSalePriceEl);
      }
      productPriceEl.appendChild(productBasePriceEl);
      productInfoEl.appendChild(productNameEl);

      productActionEl.append(
        productImageWrapper,
        productInfoEl,
        productPriceEl
      );
      productEl.appendChild(productActionEl);
      productItemEl.appendChild(productEl);
      productListEl.appendChild(productItemEl);
    });
  }
  products[0].appendChild(productListEl);
}

function addToCart(event, item) {
  // set default action
  event.preventDefault();

  // get list cart from localStorage
  var carts = JSON.parse(localStorage.getItem("cart")) || [];
  // count product duplicate exist in cart
  const itemExist = carts.find((product) => product.id == item.id);
  if (!itemExist) {
    carts.push({ ...item, quantity: Number(1) });
    // set list cart when push new item
    localStorage.setItem("cart", JSON.stringify(carts));
  } else {
    itemExist.quantity += 1;
    // set list cart when push new item
    localStorage.setItem("cart", JSON.stringify(carts));
  }
  cartCount();
}

function cartCount() {
  // get list cart from localStorage
  var carts = JSON.parse(localStorage.getItem("cart")) || [];
  // Get total of product cart
  var cartCount = carts.reduce((total, item) => (total += item.quantity), 0);
  // append text to element
  cartCountEl.innerText = cartCount;
}

createElProdToday();

cartCount();
