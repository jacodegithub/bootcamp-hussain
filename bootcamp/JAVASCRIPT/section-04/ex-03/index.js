// Add a method to the Library class called addBook that takes a Book object as an argument and adds it to the library's collection of books.

class Library {
    constructor() {
        this.books = []
    }

    addBook(book) {
        this.books.push(book);
    }
}

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

// creating object of Book
const book = new Book('Rich Dad, Poor Dad', 'Robert Kiyosaki', 240);

// creating object of Library
const library = new Library();

// calling method addBook
library.addBook(book);

console.log(library);