# Library Catalog

> *The Library Catalog is a simple JavaScript library that allows you to manage a collection of books and perform various operations on them. It provides an easy way to add, retrieve, and iterate through books in a catalog.*

## Table of contents
- Usage
- Methods
- Example

## Usage
1. Create an instance of LibraryCatalog to manage your book collection.
2. Use the provided methods to add books, iterate through books, and retrieve books by author.

## Methods
`addBook(title, author, genre)`
Adds a new book to the catalog.
- `title`: Title of the book.
- `author`: Author of the book.
- `genre`: Genre of the book.

`book Iterator()`
Returns a generator function that allows you to iterate over the books in the catalog.

`[Symbol.iterator]`
Returns the same generator function as `bookIterator()`, enabling the use of the same iteration protocol to iterate over the books.

`getBooksByAuthor(authorName)`
Returns an array of books written by the specified author.
- `authorName` : The name of the author.

## Example

`const myLibrary = new LibraryCatalog();`

`myLibrary.addBook("Book 1", "Author 1", "Genre 1");`

`myLibrary.addBook("Book 2", "Author 2", "Genre 2");`

`myLibrary.addBook("Book 3", "Author 1", "Genre 3");`

`console.log("All books in the catalog:");`

`for (const book of myLibrary) {`

  `console.log(book.title);`

`}`

`const authorBooks = myLibrary.getBooksByAuthor("Author 1");`

`console.log("Books by Author 1:");`

`console.log(authorBooks);`

> PS: *Thanks to KodeCamp for giving me the opportunity to learn and improve my skills*
