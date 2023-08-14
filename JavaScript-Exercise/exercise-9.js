/**
 * Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year.
 * Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an
 * additional property for book price. Override the display method to include the book price.
 * Create an instance of the 'Ebook' class and display its details.
 */

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
  detail() {
    console.log(
      "Title : " +
        this.title +
        "\nAuthor : " +
        this.author +
        "\nPublication Year : " +
        this.publicationYear
    );
  }
}

class Ebook extends Book {
  constructor(price, title, author, publicationYear) {
    super(title, author, publicationYear);
    this.price = price;
  }
  detail() {
    console.log(
      "Title : " +
        this.title +
        "\nAuthor : " +
        this.author +
        "\nPublication Year : " +
        this.publicationYear +
        "\nPrice : " +
        this.price
    );
  }
}

const book1 = new Ebook(100, "Hello Title", "Thien", 2000);
book1.detail();
