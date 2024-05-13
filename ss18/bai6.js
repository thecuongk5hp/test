"use strict";
/**
    Phân biệt abstract class và interface, cho ví dụ minh họa.
 */
/*
1.Abstract class:
    Abstract class là một lớp có thể chứa các phương thức trừu tượng và các phương thức thông thường.
    Abstract class có thể có các thuộc tính và phương thức có thể được kế thừa bởi các lớp con.
    Một lớp con phải triển khai tất cả các phương thức trừu tượng của lớp cha abstract class.
    Một lớp con có thể có nhiều lớp cha abstract class, nhưng chỉ có thể kế thừa từ một lớp cha abstract class duy nhất.
 */
class Animal {
    move() {
        console.log("Moving");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}
const myDog = new Dog();
myDog.makeSound();
myDog.move();
class Cat {
    makeSound1() {
        console.log("Woof!");
    }
    move() {
        console.log("Moving");
    }
}
const myCat = new Cat();
myCat.makeSound1();
myCat.move();
