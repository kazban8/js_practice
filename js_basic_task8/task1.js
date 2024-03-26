class Animal {
    constructor(color, name, type) {
        this.color = color;
        this.name = name;
        this.type = type;
    }
    sayHello() {
        console.log(`The ${this.name} says mrrrrr.`);
    };
    run() {
        console.log(`${this.name} is a very big and fast ${this.type} .`)
    };
}

const animal = new Animal("blond", "Puma", "cat")
animal.sayHello()
animal.run()
