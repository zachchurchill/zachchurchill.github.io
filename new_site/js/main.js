/**
  * Go back to the previous entry in the session history, doing nothing if no history present.
  */
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  }
}
window.goBack = goBack;


/**
  * Displays blog posts as anchor tags within a list element.
  *
  * @param {Object} options - Configuration options .
  * @param {Object[]} options.posts - An array of post objects with keys for `date`, `path`, and `name`.
  * @param {string} [options.listId="posts"] - The ID of the element to insert posts into.
  * @param {string} [options.pathPrefix=null] - Path prefix from HTML file to blog/posts.json e.g., in index.html this would be "blog/".
  * @param {number} [options.topN=null] - Maximum number of posts to display. If not provided then all posts displayed.
  */
function listPosts({ posts, listId = "posts", pathPrefix = null, topN = null }) {
  const list = document.getElementById(listId);
  if (!list) {
    console.warn(`list element with ID "${listId}" not found`);
    return;
  }

  const postsToShow = topN !== null ? topN : posts.length;
  posts.slice(0, postsToShow).forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${post.date}</span>
      <a href="${pathPrefix !== null ? pathPrefix : ""}${post.path}">${post.name}</a>
    `;
    list.appendChild(li);
  });
}
window.listPosts = listPosts;


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


/**
  * Displays details about fermentation projects.
  *
  * @param {Object} options - Configuration options .
  * @param {Object[]} options.ferments - An array of ferment objects with keys for `id`, `ferment`, `type`, `gallon`, `yeast`, `startingSG`, `primaryStateDate`, `primaryEndingSG`, `secondaryStartDate`, `tertiaryStateDate`, `bottlingDate`, `finalSG`, `stabilized` and `backsweetened`. Optionally, there can be keys for `carbonationMethod`, `oakStateDate`, `oakEndDate`, `oakType`, `oakFlavor`, and `oakAmount`.
  * @param {string} options.listId - The ID of the element to insert ferments into.
  */
function listFerments({ ferments, listId }) {
  const list = document.getElementById(listId);
  if (!list) {
    console.warn(`list element with ID "${listId}" not found`);
    return;
  }

  ferments.forEach(ferment => {
    const li = document.createElement("li");
    li.classList.add("ferment");
    li.innerText = `"${ ferment.ferment }" (${ ferment.id } - ${ ferment.type})`;

    const detailsList = document.createElement("ul");
    const started = document.createElement("li");
    started.innerText = `Started ${ ferment.primaryStartDate }${ ferment.startingSG !== null ? " with SG ~ " + ferment.startingSG : ""}`;
    detailsList.appendChild(started);
    if (ferment.bottlingDate !== null) {
      const completed = document.createElement("li");
      completed.innerText = `Bottled ${ ferment.bottlingDate }`;
      if (ferment.finalSG !== null) {
        completed.append(` with final SG ~ ${ ferment.finalSG }`);
      }
      detailsList.appendChild(completed);
    }
    const batch = document.createElement("li");
    batch.innerText = `${ ferment.gallon } gallon batch using ${ ferment.yeast}`;
    detailsList.appendChild(batch);
    if (ferment.oakStartDate !== undefined) {
      const oaked = document.createElement("li");
      oaked.innerText = `Oaked using ${ ferment.oakAmount } of ${ ferment.oakFlavor } ${ ferment.oakType } ${ ferment.oakEndDate !== undefined ? "from " + ferment.oakStartDate + " to " + ferment.oakEndDate : "since " + ferment.oakStartDate }`;
      detailsList.appendChild(oaked);
    }
    if (ferment.carbonationMethod !== undefined) {
      const carbonated = document.createElement("li");
      carbonated.innerText = `Carbonated via ${ ferment.carbonationMethod }`;
      detailsList.appendChild(carbonated);
    }

    li.appendChild(detailsList);
    list.appendChild(li);
  });
}
window.listFerments = listFerments;
