const addToCartEvent = () => {
    const cartBtns = document.querySelectorAll(".btn-cart-add");
    cartBtns.forEach((cartButton) => {
    cartButton.addEventListener("click", (event) => {
            console.log(cartButton);
            event.preventDefault();
            const idProd = Number(cartButton.getAttribute("data-index"));
        });
    });
};

addToCartEvent();
