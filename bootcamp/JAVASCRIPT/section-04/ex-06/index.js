// Introduce an Author class with properties name, birthYear, and nationality. Add an author property to the Book class, representing the author of the book. Ensure that a book can have one or more authors.

class Author {
    constructor(name, birthYear, nationality) {
        this.name = name;
        this.birthYear = birthYear;
        this.nationality = nationality
    }
}

class Book {
    constructor(title, author = [], pages) {
        if(author.length < 1) {
            throw new Error("Require atleast one author for the book!")
        }
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

// creating author's object
const author1 = new Author('J.K. Rowling', 1965, 'British');
const author2 = new Author('George R.R. Martin', 1948, 'American');

// creating book's object
const book = new Book('Harry Potter', [author1, author2], 400);

console.log(book);