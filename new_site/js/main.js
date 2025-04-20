function loadPosts({ listId, pathPrefix = null, topN = null }) {
  const list = document.getElementById(listId);
  if (!list) {
    console.warn(`list element with ID "${listId}" not found`);
    return;
  }

  const jsonPath = `${pathPrefix !== null ? pathPrefix : "./"}posts.json`;
  fetch(jsonPath)
    .then(res => res.json())
    .then(posts => {
      const postsToShow = topN !== null ? topN : posts.length;
      posts.slice(0, postsToShow).forEach(post => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${post.date}</span>
          <a href="${pathPrefix !== null ? pathPrefix : ""}${post.path}">${post.name}</a>
        `;
        list.appendChild(li);
      });
    })
    .catch(err => {
      console.error("error loading and generating posts:", err);
    });
}


function listBooksByYear({ books, year, sectionId = "booksByYear" }) {
  const booksForYear = books.filter(book => book.yearRead === year);
  if (!booksForYear || booksForYear.length === 0) {
    console.log(`no books read in ${year}`);
  }

  const section = document.getElementById(sectionId);
  if (!section) {
    console.error(`${sectionId} does not exist in document`);
  }

  const header = document.createElement("h2");
  header.innerText = year;
  const yearSummary = document.createElement("p");
  yearSummary.innerHTML = `<strong>${booksForYear.length}</strong> books read:`;
  const ul = document.createElement("ul");
  ul.classList.add("books");
  booksForYear.forEach(book => {
    const li = document.createElement("li");
    li.classList.add("book");
    const bookTypeSpan = document.createElement("span");
    bookTypeSpan.classList.add("book-type");
    bookTypeSpan.textContent = book.type;
    li.append(`"${book.title}" by ${book.author} `);
    li.appendChild(bookTypeSpan);
    ul.appendChild(li);
  });
  section.appendChild(header);
  section.appendChild(yearSummary);
  section.appendChild(ul);
}

window.loadPosts = loadPosts;
window.listBooksByYear = listBooksByYear;
