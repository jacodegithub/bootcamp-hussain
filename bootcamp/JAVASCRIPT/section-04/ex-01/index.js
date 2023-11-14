// Define a class called Book with properties title, author, and pages. Implement a constructor that initializes these properties. Ensure that the title and author are mandatory, but pages is optional, defaulting to 0 if not provided.


class Book {
    constructor(title, author, pages = 0) {

        if(!title || !author) {
            throw new Error('Title and author are mandatory..')
        }

        this. title = title;
        this.author = author;
        this.pages = pages;
    }
}

const bookWithPages = new Book('Sherlock Holmes', 'Sir Aruthur Conan Doyle', 250);
const bookWithoutPages = new Book('To Kill a Mocking Bird', 'Harper Lee');

console.log(bookWithPages);
console.log(bookWithoutPages);