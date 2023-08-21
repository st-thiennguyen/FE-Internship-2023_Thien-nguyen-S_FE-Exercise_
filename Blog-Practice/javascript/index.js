import blogRender from './blog-render.js';
import Blog from './blog.js';
import data from './data.js';

export const blogs = data.map((blog) => new Blog(blog));

blogRender(blogs);
