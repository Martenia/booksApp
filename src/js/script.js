'use strict';

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




const filters = [];
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

      const cover = event.target.offsetParent;
      // pobierze z jego data-id identyfikator książki,
      const bookId = cover.getAttribute('data-id');
      // console.log(bookId);

      if (!cover.classList.contains('favorite')) {
        // doda do klikniętego elementu klasę favorite
        cover.classList.add('favorite');
        // i doda ten identyfikator do favoriteBooks
        favoriteBooks.push(bookId);
      } else {
        // usunie z klikniętego elementu klasę favorite
        cover.classList.remove('favorite');
        // i usunie ostatni identyfikator z favoriteBooks
        favoriteBooks.splice(favoriteBooks.indexOf(bookId), 1);
      }
    });
  }
  
  const filters = [];
  const typeOfFilters = document.querySelector('.filters');
  
  
  typeOfFilters.addEventListener('change', function(event) {
    event.preventDefault();

    const checked = event.target;
      
    if (checked.tagName === 'INPUT' && checked.name === 'filter' && checked.type === 'checkbox') {
      console.log(checked.value);
      if (checked.checked) {
        filters.push(checked.value);
      } else {
        const filterIndex = filters.indexOf(checked.value);
        filters.splice(filters.indexOf(filterIndex), 1);
      }
    }
  });
  filterBooks();

}
initActions();

function filterBooks() {
  
  for (let book in dataSource.books) {
    let shouldBeHidden = false;
    for (let filter of filters) {
      if(!book.details[filter]) {
        shouldBeHidden = true;
        break;
      }
    }
    const bookCover = document.querySelector('.book__image[data-id="' + book.id + '"]');
    if (shouldBeHidden) {
      bookCover.classList.add('hidden');
    } else {
      bookCover.classList.remove('hidden');
    }
  }
}




