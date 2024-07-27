const myLibrary = [];
const domLibrary = document.querySelector('.books');

function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}

let theHobbit = new Book('tolkien', 'the hobbit', '100', 'not read ');
let theStranger = new Book('Albert camus', 'The stranger', '200', 'read');
let theRepublic = new Book('Plato', 'The republic', '325', 'not read');

myLibrary.push(theHobbit, theStranger, theRepublic);

function addBookToLibrary() {
  domLibrary.textContent = '';

  myLibrary.forEach((item) => {
    let book = document.createElement('div');
    book.classList = 'book';

    let topSection = document.createElement('div');
    topSection.classList = 'top';

    let author = document.createElement('h4');
    author.classList = 'author';
    author.textContent = item.author;

    let title = document.createElement('h3');
    title.classList = 'title';
    title.textContent = item.title;

    topSection.appendChild(author);
    topSection.appendChild(title);

    let pages = document.createElement('p');
    pages.classList = 'pages';

    let status = document.createElement('span');
    status.classList = 'isRead';

    pages.textContent = '| ' + item.pages + ' pages';

    pages.appendChild(status);

    book.appendChild(topSection);
    book.appendChild(pages);

    domLibrary.appendChild(book);
  });
}

// Display every book from library on the dom

{
  /* <div class="book">
                <div class="top">
                    <h4 class="author">Tolkien</h4>
                    <h3 class="title">Lord of the Rings</h3>
                </div>
                <p class="pages"><span
                        class="isRead"></span> | 240 pages
                </p>
            </div> */
}
