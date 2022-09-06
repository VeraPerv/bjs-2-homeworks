class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;

    }
    fix() {
        return this.state *= 1.5;
    }



    set state(newState) {

        if (newState <= 0) {
            return this._state = 0;
        } else if (newState >= 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }
    get state() {
        return this._state;
    }

}
let ddt = new PrintEditionItem('dfdf', 1952, 205);
ddt.state = 40;
console.log(ddt.fix());


console.log(ddt);





class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        // this.author = "author";
        this.author = author;
    }


}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";

    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}
class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {

        return this.books.push(book);


    }
    /*findBookBy(type, value) {
      this.books.find (this.books[item] => {if (this.books.type === type && this.books.value === value) {
        return this.books.name;
    } else { 
        return null;
    }
});

    }*/
    /* giveBookByName(bookName) {
       return splice(indexOf(bookName),1);
    }
    
}*/
}
const library = new Library('библиотека имени ленина');

let detectiveBook = new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

library.addBook(detectiveBook);
library.findBookBy("name", "Артур Конан Дойл");