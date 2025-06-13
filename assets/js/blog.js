document.addEventListener("DOMContentLoaded", () => {
  const blogList = document.getElementById("blog-list");
  if (!blogList || !window.blogs) return;

  blogs.forEach((blog) => {
    const blogItem = document.createElement("div");
    blogItem.className = "blog-item";

    blogItem.innerHTML = `
      <a href="${blog.url}">
        <img src="${blog.thumbnail}" alt="${blog.title}" />
        <h3>${blog.title}</h3>
      </a>
    `;

    blogList.appendChild(blogItem);
  });
});
