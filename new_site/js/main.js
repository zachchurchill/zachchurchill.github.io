/**
  * Loads blog posts from JSON file using provided path prefix
  * and injects them as anchor tags within a list element.
  *
  * @param {Object} options - Configuration options .
  * @param {string} options.listId - The ID of the element to insert posts into.
  * @param {string} [options.pathPrefix=null] - Path prefix from HTML file to blog/posts.json e.g., in index.html this would be "blog/".
  * @param {number} [options.topN=null] - Maximum number of posts to display. If not provided then all posts displayed.
  */
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
window.loadPosts = loadPosts;


/**
  * Displays the books read from a given year in the provide section with a
  * header for the year, summary of books read within the read, and an unordered
  * list of book title, author and type.
  *
  * @param {Object} options - Configuration options.
  * @param {Object[]} options.books - An array of books objects with keys for `title`, `author`, `yearRead`, and `type`.
  * @param {number} options.year - Year that will be used to filter `options.books`.
  * @param {string} [options.sectionId="booksByYear"] - ID associated with section to inject elements into.
  */
function listBooksByYear({ books, year, sectionId = "booksByYear" }) {
  const booksForYear = books.filter(book => book.yearRead === year);
  if (!booksForYear || booksForYear.length === 0) {
    console.warn(`no books read in ${year}`);
    return;
  }

  const section = document.getElementById(sectionId);
  if (!section) {
    console.error(`${sectionId} does not exist in document`);
    return;
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
window.listBooksByYear = listBooksByYear;


/**
  * Displays the meads enjoyed by each meadery provided in the list of objects.
  * The elements include a header for meadery name, summary of meads enjoyed,
  * and an unordered list of mead name plus tasting notes.
  *
  * @param {Object} options - Configuration options.
  * @param {Object[]} options.meads - An array of books objects with keys for `meadery`, `mead`, and `tastingNotes`.
  * @param {string} [options.sectionId="meadsByMeadery"] - ID associated with section to inject elements into.
  */
function listMeadsByMeadery({ meads, sectionId = "meadsByMeadery" }) {
  if (!meads || meads.length === 0) {
    console.warn("meads not provided");
    return;
  }

  const section = document.getElementById(sectionId);
  if (!section) {
    console.error(`${sectionId} does not exist in document`);
    return;
  }

  const meaderies = [...new Set(meads.map(mead => mead.meadery).sort())];
  meaderies.forEach(meadery => {
    const relevantMeads = meads.filter(mead => mead.meadery === meadery);

    const meaderySection = document.createElement("section");
    meaderySection.classList.add("meadery");
    const header = document.createElement("h1");
    header.innerText = meadery;
    const meadSummary = document.createElement("p");
    meadSummary.innerHTML = `<strong>${relevantMeads.length}</strong> mead${relevantMeads.length > 0 ? "s" : ""} enjoyed:`;
    const ul = document.createElement("ul");
    ul.classList.add("meads");
    relevantMeads.forEach(mead => {
      let li = document.createElement("li");
      li.classList.add("mead");
      let tastingNotesSpan = document.createElement("span");
      tastingNotesSpan.classList.add("mead-tasting-notes");
      tastingNotesSpan.innerText = mead.tastingNotes;
      li.innerHTML = `${mead.mead} &mdash; `;
      li.appendChild(tastingNotesSpan);
      ul.appendChild(li);
    });
    meaderySection.appendChild(header);
    meaderySection.appendChild(meadSummary);
    meaderySection.appendChild(ul);

    section.appendChild(meaderySection);
  });
}
window.listMeadsByMeadery = listMeadsByMeadery;
