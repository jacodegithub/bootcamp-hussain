// Implement a mixin called Logger with a method log that logs a message. The Book and Library classes should utilize this mixin to enhance their functionality. In the Book class, use the Logger mixin to log information such as the title, author, and publication date when a new book is created. In the Library class, apply the Logger mixin to log messages about book additions and borrowings, providing details like the book title and borrower's information. This demonstrates the use of mixins to incorporate reusable logging functionality into multiple classes, promoting modular and maintainable code.

const Logger = {
    log(message) {
        console.log(message);
    }
}

class Book {
    constructor(title, author, publicationDate, status) {
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
        this.status = status;

        Logger.log(`New Book created: ${this.title} by ${this.author} published on ${this.publicationDate}`)
    }
}

class Library {
    constructor() {
        this.books = [];

        if(this.books.length > 0){
            Logger.log(`Library created with ${books.length} books.`)
        }
    }

    addBook(book) {
        this.books.push(book);

        Logger.log(`Book added to library: ${book.title}`)
    }

    borrowBook(person, title) {
        const book = this.books.find((b) => b.title === title)

        if(book && book.status === 'available') {
            book.status = 'borrowed'
        }

        if(book) {
            Logger.log(`${person} - Book borrowed from the library: ${book.title} by ${book.author}`)
        }
        else {
            Logger.log(`${book.title} not found in the library!`)
        }
    }
}

// creating library object
const library = new Library();
library.addBook({
    title: 'Lord Of The Rings',
    author: 'J.R.R. Tolkien',
    publicationDate: '20-02-1985',
    status: 'available',
})
library.addBook({
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    publicationDate: '29-06-1997',
    status: 'available',
})
library.addBook({
    title: 'Subtle Art',
    author: 'Mark Manson',
    publicationDate: '20-02-2017',
    status: 'available',
})

library.borrowBook('Zakir', 'Lord Of The Rings');
console.log(library);
