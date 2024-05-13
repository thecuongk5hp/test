"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Tên sv: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Tên gv: ${this.name}`);
        console.log(`Môn học: ${this.subject}`);
    }
}
let check = new Student("Nguyễn Thế Cường", 18);
check.displayInfo();
let check1 = new Teacher("Nguyễn Ngọc Hà", "Văn");
check1.displayInfo();
