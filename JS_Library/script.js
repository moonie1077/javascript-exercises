//Prototype definition of book
function book (title, author, pages, readYet) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;

    this.info = function () {
        return (this.title + " by " + this.author + ", " + pages
            + " pages, " + this.readYet)
    }
}
//Book management functions for Deleting and Adding books, marking Read
function toggleRead (book) {
       book.readYet === 1 ? book.readYet = 0 : book.readYet = 1;
       refreshLibrary();}
function delBook(index) {myLibrary.splice(index,1); refreshLibrary()}
function addBookToLibrary(title, author, pages, readYet) {
    myLibrary.push(new book (title, author, pages, readYet));}

//Library management functions for refresh (after book addition/deletion) and display
function displayLibrary (){
    const library = document.querySelector('.bookCards')

    myLibrary.forEach(function callback(book, index) {
        const itemBook = document.createElement('div');
        itemBook.setAttribute('class', 'itemBook');

        const title = document.createElement('div');
            title.setAttribute('class', 'title');
            title.textContent = book.title;
        itemBook.appendChild(title);

        const author = document.createElement('div')
            author.setAttribute('class', 'author');
            author.textContent = book.author;
        itemBook.appendChild(author);

        const pages = document.createElement('div')
            pages.setAttribute('class', 'pages');
            pages.textContent = "Number of pages is " + book.pages;
        itemBook.appendChild(pages);

        const read = document.createElement('div')
            read.setAttribute('class', 'readYet');
            const readYesNo = book.readYet ? "Yes": "No";
                read.textContent = "Read Yet? " + readYesNo;
        itemBook.appendChild(read);

        const markRead = document.createElement('button')
            markRead.setAttribute('class', 'cardButton');
            markRead.innerText="Change Status";
            markRead.onclick = function() {toggleRead(myLibrary[index])};
        itemBook.appendChild(markRead);

        const removeBook = document.createElement('button')
            removeBook.setAttribute('class', 'cardButton');
            removeBook.innerText="Remove Book";
            removeBook.onclick = function() {delBook(index)};
        itemBook.appendChild(removeBook);

        library.appendChild(itemBook);
    }
    );
}


function refreshLibrary() {
    const libraryCards = document.querySelectorAll('.itemBook')
    libraryCards.forEach( function(card)
        {card.remove()});
    displayLibrary();
}

//items related to the modal dialog for adding a new book
const showButton = document.getElementById("showAddBookDialog");
const addDialog = document.getElementById("addBookDialog");
const confirmBtn = addDialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
  addDialog.showModal();
});
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    const formBook = document.getElementById('addBookForm');
    const beenReadValue =
        formBook.elements['beenRead'].checked ===true
        ? 1: 0;

    addBookToLibrary(
        formBook.elements['title'].value,
        formBook.elements['author'].value,
        formBook.elements['pages'].value,
        beenReadValue
    );
    addDialog.close();
    refreshLibrary();
    formBook.reset();
});

//Page initialization
const myLibrary = [];

addBookToLibrary("The Tommyknockers", "Stephen King", 747, 1);
addBookToLibrary("Wielding A Red Sword", "Piers Anthony", 392, 1);
addBookToLibrary("The Complete Works of H.P. Lovecraft", "H.P. Lovecraft", 1098, 1);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 1);

displayLibrary();
