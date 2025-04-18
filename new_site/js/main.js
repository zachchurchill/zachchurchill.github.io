function loadPosts({ listId, jsonPath, topN = null }) {
  const list = document.getElementById(listId);
  if (!list) {
    console.warn(`list element with ID "${listId}" not found`);
    return;
  }

  fetch(jsonPath)
    .then(res => res.json())
    .then(posts => {
      const postsToShow = topN !== null ? topN : posts.length;
      posts.slice(0, postsToShow).forEach(post => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${post.date}</span><a href="${post.path}">${post.name}</a>`;
        list.appendChild(li);
      });
    })
    .catch(err => {
      console.error("error loading and generating posts:", err);
    });
}

window.loadPosts = loadPosts;
