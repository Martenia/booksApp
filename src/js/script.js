
const templates = {
  booksTemplate: Handlebars.compile(document.querySelector('#template-book').innerHTML),
};
console.log(templates.booksTemplate);

const booksContainer = document.querySelector('.books-list');
console.log(booksContainer);



function render() {
  for (let items in dataSource.books) {
    
    const book = dataSource.books[items];
    console.log(book);

    const generatedHTML = templates.booksTemplate(book);
    console.log(generatedHTML);
    
    booksContainer.appendChild(utils.createDOMFromHTML(generatedHTML));

    console.log(items);
  }
}
render();