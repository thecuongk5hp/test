"use strict";
class Animal {
    move() {
        console.log("Moving along!");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow! Meow!");
    }
}
function performAction(animal) {
    animal.makeSound();
    animal.move();
}
const dog = new Dog();
const cat = new Cat();
performAction(dog);
performAction(cat);
