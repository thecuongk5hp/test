"use strict";
class Animal {
    constructor(name, age) {
        this.name5 = name;
        this.age5 = age;
    }
    introduce() {
        console.log(`Tôi là ${this.name5} và tôi ${this.age5} tuổi.`);
    }
}
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed5 = breed;
    }
    displayInfo() {
        console.log(`${this.name5} là ${this.breed5} và nó ${this.age5} tuổi.`);
    }
    changeName(newName) {
        this.name5 = newName;
    }
}
const dog = new Dog("GG", 5, "Labrador");
dog.introduce();
dog.displayInfo();
console.log(dog.name5);
console.log(dog.age5);
