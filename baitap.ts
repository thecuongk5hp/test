class Student {
    id: number;
    name: string;
    enrolledCourses: Course[];
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course: Course): void {
        this.enrolledCourses.push(course);
    }
}
class Instructor {
    id: number;
    name: string;
    constructor(id: number, name: string) {             
        this.id = id;
        this.name = name;
    }
    createCourse(title: string): Course {
        return new Course(title, this);
    }
    createLesson(title: string, course: Course): Lesson {
        return new Lesson(title, course);
    }
    createAssignment(lesson: Lesson): string {
        return "Assignment for " + lesson.title;
    }
    createAssessment(course: Course): string {
        return "Assessment for " + course.title;
    }
}
class Course {
    title: string;
    instructor: Instructor;
    lessons: Lesson[];
    assessments: string[];
    constructor(title: string, instructor: Instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}
class Lesson {
    title: string;
    course: Course;
    assignments: string[];

    constructor(title: string, course: Course) {
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