const blogRender = (data) => {
  const $blogPost = document.querySelector('#blog-post');
  const $blogList = document.createElement('ul');
  $blogList.className = 'blog-list';
  if ($blogPost) {
    if (data) {
      data.forEach((blog) => {
        $blogList.innerHTML += `
        <li class="blog-item">
        <div class="blog">
            <div class="blog-header d-flex justify-between item-center">
            <div class="blog-author d-flex">
                <img
                class="author-img"
                src="./assets/images/avatar-sample.png"
                alt="Avatar of author post" />
                <p class="author-name">Trang Nguyen T</p>
                <span class="blog-date">${blog.postDate}</span>
            </div>
            <div class="blog-more">
                <a href="#" class="blog-more-action">
                <i class="icon icon-blog-menu"></i>
                </a>
            </div>
            </div>
            <div class="blog-content d-flex">
            <div class="blog-info">
                <a href="" class="blog-link">
                    <h4 class="blog-title">
                        ${blog.title}
                    </h4>
                    <p class="blog-desc">
                        ${blog.description}
                    </p>
                </a>
                <div class="blog-bottom d-flex justify-between">
                <div class="blog-action d-flex">
                    <div class="action-like d-flex item-center">
                    <button class="btn-icon">
                        <i class="icon icon-like"></i>
                    </button>
                    <span class="action-count">12</span>
                    </div>
                    <div class="action-comment">
                    <a href="#" class="action-comment-link d-flex item-center">
                        <i class="icon icon-comment"></i>
                        <span class="action-count">12</span>
                    </a>
                    </div>
                </div>
                <div class="blog-tag">
                    <ul class="tag-list d-flex gap-2">
                    <li class="tag"><a href="#" class="tag-link">React</a></li>
                    <li class="tag"><a href="#" class="tag-link">React</a></li>
                    <li class="tag"><a href="#" class="tag-link">React</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="blog-image">
                <img src="${blog.image}"  alt="Image of blog 1" />
            </div>
            </div>
        </div>
        </li>
        `;
      });
    }
    $blogPost.appendChild($blogList);
  }
};

export default blogRender;
