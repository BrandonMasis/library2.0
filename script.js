const domLibrary = document.querySelector('.books');
const submitBookBtn = document.querySelector('#submitBook');
const bookForm = document.querySelector('#bookForm');

function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}
let theHobbit = new Book('J.R.R. Tolkien', 'The Hobbit', '310', false);
let theStranger = new Book('Albert Camus', 'The Stranger', '123', true);
let meditations = new Book('Marcus Aurelius', 'Meditations', '256', true);
let sapiens = new Book(
  'Yuval Noah Harari',
  'Sapiens: A Brief History of Humankind',
  '443',
  false
);
let braveNewWorld = new Book('Aldous Huxley', 'Brave New World', '268', false);

// Adding more books
let crimeAndPunishment = new Book(
  'Fyodor Dostoevsky',
  'Crime and Punishment',
  '671',
  true
);
let dune = new Book('Frank Herbert', 'Dune', '412', false);
let nineteenEightyFour = new Book('George Orwell', '1984', '328', true);
let mobyDick = new Book('Herman Melville', 'Moby Dick', '585', false);
let prideAndPrejudice = new Book(
  'Jane Austen',
  'Pride and Prejudice',
  '279',
  true
);

let myLibrary = [
  theHobbit,
  theStranger,
  meditations,
  sapiens,
  braveNewWorld,
  crimeAndPunishment,
  dune,
  nineteenEightyFour,
  mobyDick,
  prideAndPrejudice,
];

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

// Example usage:
addGlobalEventListener('click', 'div', (e) => {
  console.log('hi');
});

display();

function display() {
  domLibrary.textContent = '';
  let index = 0;
  myLibrary.forEach((item) => {
    // Create the book container
    const book = document.createElement('div');
    book.classList.add('book');
    book.setAttribute('data-id', index);
    index++;

    // Create the top section
    const topSection = document.createElement('div');
    topSection.classList.add('top');

    // Create the author element
    const author = document.createElement('h4');
    author.classList.add('author');
    author.textContent = item.author;

    // Create the title element
    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = item.title;

    // Append author and title to top section
    topSection.appendChild(author);
    topSection.appendChild(title);

    // Create the pages element
    const pages = document.createElement('p');
    pages.classList.add('pages');
    pages.textContent = `${item.pages} pages`;

    // Create the status element
    const status = document.createElement('span');

    if (item.status) {
      status.classList.add('isRead');
    } else {
      status.classList.add('notRead');
    }

    // Append status to pages element
    pages.appendChild(status);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.textContent = '🗑️';

    // Append top section and pages to book container

    book.appendChild(topSection);
    book.appendChild(pages);
    book.appendChild(deleteBtn);

    // Append book container to DOM
    domLibrary.appendChild(book);
  });
}

// Need to let user input information to add new books

function getInputInformation() {
  let author = document.getElementById('bookAuthor').value;
  let title = document.getElementById('bookTitle').value;
  let pages = document.getElementById('bookPages').value;
  let status = document.getElementById('bookStatus').value;

  if (status == 'Read') {
    status = true;
  } else {
    status = false;
  }

  return { author, title, pages, status };
}

// Preventing form to submit
bookForm.addEventListener('submit', function (event) {
  event.preventDefault();
});

// Check if form is valid before getting it's data
submitBookBtn.addEventListener('click', (e) => {
  if (bookForm.checkValidity()) {
    let book = getInputInformation();
    let item = new Book(book.author, book.title, book.pages, book.status);

    myLibrary.push(item);
    display();
    bookForm.reset();
  } else {
    alert('Please fill all the fields');
  }
});

// toggle status

addGlobalEventListener('click', '.pages span', (e) => {
  let targetBook = e.target.parentElement.parentElement;
  let bookIndex = targetBook.getAttribute('data-id');

  if (e.target.className == 'isRead') {
    e.target.className = 'notRead';
    myLibrary[bookIndex].status = false;
  } else {
    e.target.className = 'isRead';
    myLibrary[bookIndex].status = true;
  }

  console.table(myLibrary);
});

// delete book
addGlobalEventListener('click', '.deleteBtn', (e) => {
  let targetBook = e.target.parentElement;
  let bookIndex = targetBook.getAttribute('data-id');

  myLibrary.splice(bookIndex, 1);

  display();
});
