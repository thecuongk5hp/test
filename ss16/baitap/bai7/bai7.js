"use strict";
/*
Định nghĩa lớp Student có các thuộc tính private id và name, tạo một mảng để chứa các thực thể được tạo ra từ lớp student.
Định nghĩa lớp Classroom có thuộc tính students là mảng các học sinh trong lớp đó.
Lớp có phương thức addStudent để thêm học sinh vào trong lớp, phương thức showStudents để in ra danh sách học sinh trong lớp.
Phương thức sẽ có tham số truyền vào là id học sinh. Phương thức sẽ thêm học sinh từ trong mảng tất cả học sinh vào lớp học,
sau khi thêm thì xóa học sinh đó khỏi mảng tất cả học sinh.
Tạo 6 thực thể từ lớp Student và thêm vào mảng tất cả học sinh.
Tạo 2 thực thể từ lớp Classroom và thêm học sinh cho chúng, mỗi lớp học sẽ có 3 học sinh.
*/
class Student {
    letructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Classroom {
    letructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach((student) => {
            console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
        });
    }
}
class RegularStudent extends Student {
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [
    new RegularStudent(1, "cuong"),
    new RegularStudent(2, "ha"),
    new RegularStudent(3, "kim anh"),
    new RegularStudent(4, "nguyet anh"),
    new RegularStudent(5, "minh "),
    new RegularStudent(6, "ly"),
];
let classroom1 = new Classroom();
let classroom2 = new Classroom();
let students1 = allStudents.splice(0, 3);
students1.forEach((student) => {
    classroom1.addStudent(student);
});
let students2 = allStudents.splice(0, 3);
students2.forEach((student) => {
    classroom2.addStudent(student);
});
classroom1.showStudents();
classroom2.showStudents();
