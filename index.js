function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(book => renderBooks(book));
  return fetch('https://anapioficeandfire.com/api/books');
}
  

// document.addEventListener('DOMContentLoaded', fetchBooks)

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


// function getBook() {
//   let book = fetch("https://anapioficeandfire.com/api/books")
//   .then(resp => resp.json())
//   .then(json => console.log(json[4].name))
//   }