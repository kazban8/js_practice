
// Створити об'єкт Library, який має:

// Масив books [] - масив, де містяться  об'єкти.
// Метод addBook - метод, який приймає параметри bookName, bookAuthor, bookYear та bookId та додає новий об'єкт і
// з цими параметрами до масиву books
// Метод printBookInfo - метод, який приймає параметр bookId та виводить всю інформацію(ім'я, автор, рік) книжки з таким айді
// Метод printAllBooks - метод, який виводить інформацію про всі книжки в наявності(їх ім'я, авторів, роки та айді)
// Потренуватись додавати нові книжки та викликати інші методи об'єкта Library

const Library = {
    books: [],
    addBook(bookName, bookAuthor, bookYear, bookId) {
        this.books.push({bookName, bookAuthor, bookYear, bookId});
    },
    printBookInfo(bookId) {
        console.log(`Books with id ${bookId}`)
        console.log(this.books.filter(book => book.bookId === bookId))
    },
    printAllBooks() {
        console.log("all books:")
        console.log(this.books);
}
}

Library.addBook("Duna", "Rubikon", 2022, 1);
Library.addBook("Duna 2", "Rubikon", 2023, 5);

console.log(Library.books)
Library.printBookInfo(1)
Library.printAllBooks();
