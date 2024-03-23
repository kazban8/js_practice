// Створити 3 об'єкти через {}, кожен об'єкт повинен мати як мінімум 3 властивості і 2 методи.

// Приклади об'єктів: person, car, book, phone, city, building etc...

const person = {
    name: "Viktor",
    age: 32,
    city: "NY",
    greet: function() {
       console.log("my name is", this.name);
    },
    introduce: function() {
        console.log(`I live in ${this.city}`);
    }
};

const car = {
    make: "Audi",
    model: "Q8",
    year: 2022,
    mark: function() {
        console.log("The car is audi");
    },
    models: function() {
        console.log("The car model Q8");
    }
};

const book = {
    title: "Duna",
    author: "Rubikon",
    pages: 180,
    open: function() {
        console.log("The book is opened.");
    },
    close: function() {
        console.log("The book is closed.");
    }
};

person.greet();
person.introduce();

car.mark();
car.models();

book.open();
book.close();
