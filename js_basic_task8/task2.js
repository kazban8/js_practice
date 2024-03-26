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

    run() {
        super.run();
    }
}

const animal = new Animal("blond", "Puma", "cat");
animal.sayHello();
animal.run();
console.log("---------");
const myDog = new Dog("blond", "Dante", "dog", 5, "Akitainy", "shoes");
myDog.sayHello1();
myDog.sayAge();
myDog.run();

