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

var cartCountElement = document.getElementById("cart-count");

// find root element
var products = document.getElementsByClassName("product-list");
var ul = document.createElement("ul");
ul.className = "row";

if (products?.length) {
  data.forEach(function (item) {
    // Create li product item wrapper
    var productItemElement = document.createElement("li");
    productItemElement.className = "col col-3 col-sm-6";

    // Create a div wrapper product inside li
    var productEmlement = document.createElement("div");
    productEmlement.className = "product";

    // Create a action for click to item
    var productActionElement = document.createElement("a");
    productActionElement.className = "product-action";
    productActionElement.href = "#";

    // Create a div wrapper image of item and sale rate
    var productImageWrapper = document.createElement("div");
    productImageWrapper.className = "product-image";

    // create a image tag for show image
    var imgElement = document.createElement("img");
    imgElement.src = item.image;
    imgElement.alt = item.name;

    // Create a span for display sale rate
    var saleRate = document.createElement("span");
    saleRate.className = "sale-product bagde bagde-red";
    saleRate.innerHTML = "-" + item.discount + "%";

    // create element of show btn add to cart
    var addToCartElement = document.createElement("div");
    addToCartElement.className =
      "product-cart d-flex justify-center item-center";

    var addCartBtnElement = document.createElement("button");
    addCartBtnElement.className = "btn btn-cart-add";
    addCartBtnElement.innerHTML = "Add to cart";
    addCartBtnElement.addEventListener("click", (event) =>
      addToCart(event, item)
    );

    // Create product info div
    var productInfoElement = document.createElement("div");

    // Create product name element
    var productNameElement = document.createElement("h4");
    productNameElement.className = "product-name";
    productNameElement.innerHTML = item.name;

    // Create product price wrapper element
    var productPriceElement = document.createElement("div");
    productPriceElement.className = "product-price d-flex justify-between";

    // Create product sale price element
    var productSalePriceElement = document.createElement("span");
    productSalePriceElement.className = "product-price-sale";
    productSalePriceElement.innerHTML =
      "$ " + Number(item.price - (item.price / 100) * item.discount).toFixed(2);

    // Create product base price element
    var productBasePriceElement = document.createElement("span");
    productBasePriceElement.className = "product-price-base";
    productBasePriceElement.innerHTML = "$ " + item.price;

    addToCartElement.appendChild(addCartBtnElement);

    productImageWrapper.append(imgElement, addToCartElement);
    if (item.discount) {
      productActionElement.classList.add("discounted");
      productPriceElement.appendChild(productSalePriceElement);
      productImageWrapper.appendChild(saleRate);
      productPriceElement.appendChild(productSalePriceElement);
    }
    productPriceElement.appendChild(productBasePriceElement);
    productInfoElement.appendChild(productNameElement);

    productActionElement.append(
      productImageWrapper,
      productInfoElement,
      productPriceElement
    );
    productEmlement.appendChild(productActionElement);
    productItemElement.appendChild(productEmlement);
    ul.appendChild(productItemElement);
  });
}

function addToCart(event, item) {
  // set default action
  event.preventDefault();
  // get list cart from localStorage
  var carts = JSON.parse(localStorage.getItem("cart")) || [];
  // push new item
  carts.push(item);
  // set list cart when push new item
  localStorage.setItem("cart", JSON.stringify(carts));
  // count product duplicate exist in cart
  const countExist = carts.filter((product) => product.id == item.id).length;

  alert("Add " + countExist + " item " + item.name + "successfully");
  countProductCart();
}

function countProductCart() {
  var carts = JSON.parse(localStorage.getItem("cart")) || [];
  const productCount = new Set(carts.map((item) => item.id)).size;
  cartCountElement.innerText = productCount;
}

products[0].appendChild(ul);
