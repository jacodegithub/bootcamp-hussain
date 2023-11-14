// Implement a method in the Library class called borrowBook that takes a book title and returns the book if available. Update the book's status to "borrowed."

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    borrowBook(title) {
        const book = this.books.find((book) => book.title === title);
        console.log('book ', book);
        if(book && book.status === 'available') {
            book.status = 'borrowed';
            return book;
        }
        return null;
    }
}

class Book {
    constructor(title, author, status) {
        this.title = title;
        this.author = author;
        this.status = status;
    }
}

const library = new Library();
library.addBook({title: 'Lord Of The Rings', author: 'J.R.R. Tolkien', status: 'available'});
library.addBook({title: 'Harry Potter', author: 'J.K. Rowling', status: 'available'});
library.addBook({title: 'Politics', author: 'Aristotle', status: 'available'});

library.borrowBook('Lord Of The Rings')

console.log(library);