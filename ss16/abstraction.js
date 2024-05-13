"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
}
// cách khởi tạo đối tượng abstracion 
// thêm từ khóa abstrac vào đầu class
// intance 
// let emp1 = new Employee("nam")
// emp1 được gọi là 1 intance của class Employee
// đối với abstract thì không  cho phép khởi taoj đối tượng(intance)
/*
     tạo 1 class con kế thừa  class Employee

*/
class Employee1 extends Employee {
    constructor(address, name) {
        super(name);
        this.address = address;
        this.name = name;
    }
}
class Student extends Employee {
    constructor(age, name) {
        super(name);
        this.age = age;
        this.name = name;
    }
    getFullName() {
    }
    getAge() {
    }
}
class Person {
    constructor(name) {
        this.name = name;
    }
    getFullName() {
    }
}
class Person1 extends Person {
}
