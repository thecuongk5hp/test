"use strict";
class Student1 {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
// Khai báo mảng để chứa các sinh viên
let students = [];
// Tạo các thực thể sinh viên và thêm vào mảng
let student1 = new Student1(1, 18, "cuong@gmail.com");
let student2 = new Student1(2, 18, "ha@gmail.com");
let student3 = new Student1(3, 10, "anh@gmail.com");
let student4 = new Student1(3, 15, "ly@gmail.com");
students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);
console.log("Thông tin sinh viên:");
for (let student of students) {
    console.log("ID:", student.id);
    console.log("Tuổi:", student.age);
    console.log("Email:", student.email);
    console.log();
}
