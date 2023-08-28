// Create the Book constructor
function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
}
  
// Create the LibraryCatalog constructor
function LibraryCatalog() {
    this.books = [];
}

// Add the addBook method to LibraryCatalog prototype
LibraryCatalog.prototype.addBook = function(title, author, genre) {
    const newBook = new Book(title, author, genre);
    this.books.push(newBook);
};

// Add the bookIterator method to LibraryCatalog prototype
LibraryCatalog.prototype.bookIterator = function* () {
    for (const book of this.books) {
        return book;
    }
};

// Add the Symbol.iterator method to LibraryCatalog prototype
LibraryCatalog.prototype[Symbol.iterator] = function() {
    return this.bookIterator();
};

// Add the getBooksByAuthor method to LibraryCatalog prototype
LibraryCatalog.prototype.getBooksByAuthor = function(authorName) {
    return this.books.filter(book => book.author === authorName);
};

// Example usage
const myLibrary = new LibraryCatalog();

myLibrary.addBook("Book 1", "Author 1", "Genre 1");
myLibrary.addBook("Book 2", "Author 2", "Genre 2");
myLibrary.addBook("Book 3", "Author 1", "Genre 3");

console.log("All books in the catalog:");
for (const book of myLibrary) {
    console.log(book.title);
}

const authorBooks = myLibrary.getBooksByAuthor("Author 1");
console.log("Books by Author 1:");
console.log(authorBooks);
