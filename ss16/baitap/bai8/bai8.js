"use strict";
class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            allStudents.push(removedStudent);
        }
    }
    editStudent(student, newId, newName) {
        student.id = newId;
        student.name = newName;
    }
    showStudents() {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach((student) => {
            console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
        });
    }
}
