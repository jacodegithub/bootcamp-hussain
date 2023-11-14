// Modify the SpecializedBook class constructor to initialize the topic property. If the topic is not provided, set it to "General."

class Book {
    constructor(title, author, pages = 0) {
        if(!title || !author) {
            throw new Error('Require title and author name!')
        }
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class SpecializedBook extends Book {
    constructor(title, author, pages = 0, topic = 'General.') {
        super(title, author, pages)
        this.topic = topic;
    }
}

// creating object of Book and SpecializedBook
let special_book = new SpecializedBook('Subtle Art', 'Mark Manson', 150);

console.log(special_book);