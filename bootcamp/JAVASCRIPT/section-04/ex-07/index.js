// Modify the Library class to have a catalog that maps topics to arrays of books. Use composition to include a Catalog class within the Library.


// Catalog class
class Catalog {
    constructor() {
        this.topics = new Map();
    }

    addBook(book, topic = 'General') {
        const books = this.topics.get(topic) || [];
        books.push(book);
        this.topics.set(topic, books);
    }

    getBooks(topic) {
        return this.topics.get(topic) || [];
    }
}

// Library class
class Library {
    constructor() {
        this.catalog = new Catalog(); // composition 
    }

    addBook(book, topic = 'General') {
        this.catalog.addBook(book, topic);
    }

    getBooks(topic) {
        return this.catalog.getBooks(topic);
    }
}

// creating library class here
const library = new Library();
library.addBook({
    title: "Harry Potter",
    author: "J.K. Rowling",
}, 'Fictional Books')
library.addBook({
    title: 'Rich Dad, Poor Dad',
    author: "Robert Kiyosaki"
}, 'Finance')

// fetching books as per topics
const fictional_books = library.getBooks('Fictional Books');
const finance_books = library.getBooks('Finance');

console.log('Fictional Books ',fictional_books);
console.log('Finance Books ',finance_books);
