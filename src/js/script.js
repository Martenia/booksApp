
const templates = {
  booksTemplate: Handlebars.compile(document.querySelector('#template-book').innerHTML),
};

const booksContainer = document.querySelector('.books-list');
// console.log(booksContainer);

function render() {
  for (let items in dataSource.books) {
    
    const book = dataSource.books[items];
    console.log(book);

    const generatedHTML = templates.booksTemplate(book);
    // console.log(generatedHTML);
    
    booksContainer.appendChild(utils.createDOMFromHTML(generatedHTML));

  }
}
render();

// Zacznij od dodania nowej pustej tablicy favoriteBooks.
const favoriteBooks = [];

// Dodaj funkcję initActions.
function initActions() {
  // Przygotuj w niej referencję do listy wszystkich elementów .book__image w liście .booksList.
  const bookImage = document.querySelectorAll('ul.books-list .book__image');
  console.log(bookImage);
  
  // Następnie przejdź po każdym elemencie z tej listy.
  for (let cover of bookImage){
    // Dla każdego z nich dodaj nasłuchiwacz, który po wykryciu uruchomi funkcję, która...
    cover.addEventListener('dblclick', function(event) {
      // ...zatrzyma domyślne zachowanie przeglądarki (preventDefault),
      event.preventDefault();
      // doda do klikniętego elementu klasę favorite,
      cover.classList.add('favorite');
      // pobierze z jego data-id identyfikator książki,
      const bookId = cover.getAttribute('data-id');
      // i doda ten identyfikator do favoriteBooks
      favoriteBooks.push(bookId);
    });
   
    
  }
}
initActions();

console.log(favoriteBooks);


