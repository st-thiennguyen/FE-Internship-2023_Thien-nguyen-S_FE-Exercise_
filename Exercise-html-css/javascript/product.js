class Product {
  constructor(item) {
    const { id, name, image, price, discount } = item;
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
  }
}

export default Product;
