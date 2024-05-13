"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getAge() {
        return this.age;
    }
    setAge(newAge) {
        this.age = newAge;
    }
    describe() {
        console.log("Tên:", this.name);
        console.log("Tuổi:", this.age);
    }
}
let person = new Person("Nguyễn Thế Cường", 18);
person.describe();
person.setName("Nguyễn Kim Anh");
person.setAge(10);
console.log("Cập nhật:");
person.describe();
