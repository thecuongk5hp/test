"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeNoise() {
        console.log("Đối tượng không phải mèo hoặc chó.");
    }
    printName() {
        console.log(`Tên của con vật: ${this.name}`);
    }
}
class Cat {
    constructor(name) {
        this.animal = new Animal(name);
    }
    makeNoise() {
        console.log("Meo meo");
    }
    printName() {
        this.animal.printName();
    }
}
class Dog {
    constructor(name) {
        this.animal = new Animal(name);
    }
    makeNoise() {
        console.log("...");
    }
    printName() {
        this.animal.printName();
    }
}
let cat = new Cat("Mèo ...");
cat.printName();
cat.makeNoise();
let dog = new Dog("Chó loli");
dog.printName();
dog.makeNoise();
