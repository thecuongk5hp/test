"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course) {
        this.enrolledCourses.push(course);
    }
}
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(title) {
        return new Course(title, this);
    }
    createLesson(title, course) {
        return new Lesson(title, course);
    }
    createAssignment(lesson) {
        return "Assignment for " + lesson.title;
    }
    createAssessment(course) {
        return "Assessment for " + course.title;
    }
}
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}
class Lesson {
    constructor(title, course) {
        this.title = title;
        this.course = course;
        this.assignments = [];
    }
}
let instructor = new Instructor(1, "Thế Cường");
let course = instructor.createCourse("...");
let lesson = instructor.createLesson("...", course);
let assignment = instructor.createAssignment(lesson);
let assessment = instructor.createAssessment(course);
const student = new Student(1, "Ngọc Hà");
student.enroll(course);
console.log("...:");
student.enrolledCourses.forEach((course) => {
    console.log(course.title);
});
