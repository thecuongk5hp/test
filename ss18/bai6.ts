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
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("Moving");
    }
}
class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}
const myDog = new Dog();
myDog.makeSound();  
myDog.move();

/*
2.Interface:
    Interface là một cấu trúc chỉ định các phương thức và thuộc tính mà một lớp phải có.
    Interface không chứa bất kỳ mã thực thi nào, nó chỉ định nghĩa các phương thức và thuộc tính mà một lớp phải có.
    Một lớp có thể implement nhiều interface, và một lớp có thể implement cùng một interface nhiều lần.
 */
interface Animal {
    makeSound1(): void;
}

interface Movable {
    move(): void;
}
class Cat implements Animal, Movable {
    makeSound1(): void {
        console.log("Woof!");
    }
    move(): void {
        console.log("Moving");
    }
}
const myCat = new Cat();
myCat.makeSound1();
myCat.move();