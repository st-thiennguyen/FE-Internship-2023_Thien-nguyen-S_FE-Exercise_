class Blog {
  constructor(item) {
    const { id, title, datePost, description, image, author, tags } = item;
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
    this.postDate = datePost;
    this.image = image;
    this.tags = tags;
  }
}

export default Blog;
