// Створити 2 об'єкти через new Object();, до кожного об'єкту додати як мінімум 3 властивості та 1 метод.

// Приклади об'єктів: person, car, book, phone, city, building etc...


let person = new Object();
person.name = "Dante";
person.age = 32;
person.gender = "male";
person.sayHello = function () {
    console.log("Hello, my name is ", this.name);
};


let car = new Object();
car.make = "Audi";
car.model = "Q8";
car.year = 2022;
car.models = function () {
    console.log("The car model Q8.");
};


console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Gender:", person.gender);
person.sayHello();


console.log("--------------")
console.log("Make:", car.make);
console.log("Model:", car.model);
console.log("Year:", car.year);
car.models();