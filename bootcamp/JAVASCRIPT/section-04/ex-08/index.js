// Introduce different types of books, such as FictionBook and NonFictionBook, that inherit from the Book class. Add specialized properties or methods for each type.

class Book {
    constructor(title, author, pages = 0) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class FictionBook extends Book {
    constructor(title, author, genre, subgenre) {
        super(title, author);
        this.genre = genre;
        this.subgenre = subgenre;
    }

    getGnere() {
        return this.genre;
    }

    getSubGenre() {
        return this.subgenre;
    }
}

class NonFictionBook extends Book {
    constructor(title, author, pages, topic, authorExpertise) {
        super(title, author, pages);
        this.topic = topic;
        this.authorExpertise = authorExpertise;
    }

    getTopic() {
        return this.topic;
    }

    getAuthorExpertise() {
        return this.authorExpertise;
    }
}

// creating Book object
const fiction_book = new FictionBook('The Lord Of The Rings', 'J.R.R. Tolkien', 'Fantasy', 'Epic High Fantasy');
const non_fiction_book = new NonFictionBook('A Brief History Time', 'Stephen Hawking', 200, 'Science', 'Cosmolory');


console.log(fiction_book.getGnere(), fiction_book.getSubGenre());
console.log(non_fiction_book.getTopic(), non_fiction_book.getAuthorExpertise());