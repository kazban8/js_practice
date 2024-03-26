class Animal {
    constructor(color, name, type) {
        this.color = color;
        this.name = name;
        this.type = type;

    }

    sayHello() {
        console.log(`The ${this.name} says mrrrrr.`);
    }

    run() {
        console.log(`${this.name} is a very big and fast ${this.type}.`);
    }
}

class Dog extends Animal {
    constructor(color, name, type, age, breed, toy) {
        super(color, name, type);
        this.age = age;
        this.breed = breed;
        this.toy = toy;

    }

    sayHello1() {
        console.log(`The ${this.name} says woof.`);
    }

    sayAge() {
        console.log(`The ${this.name} is ${this.age} years old.`);
    }

}


class Cat extends Animal {
    constructor(color, name, type, age, breed, toy) {
        super(color, name, type);
        this.age = age;
        this.breed = breed;
        this.toy = toy;
    }

    sayMeow() {
        console.log(`The ${this.name} says meow.`);
    }

    play1() {
        console.log(`The ${this.name} is playing with ${this.toy} .`);
    }

    run1() {
        console.log(`${this.name} is a lazy cat.`);
    }
}


const animal = new Animal("blond", "Puma", "cat");
animal.age = 3;
animal.sayHello();
animal.run();
console.log("---------");
const myDog = new Dog("blond", "Dante", "dog", 5, "Akitainy");
myDog.sayHello1();
myDog.sayAge();
console.log("----------")
const myCat = new Cat("gray", "Murka", "cat", 3, "maine coon", "ball");
myCat.sayMeow();
myCat.play1();
myCat.run1();
myCat.run();
