class Classroom {
    private students: Student[];
    constructor() {
      this.students = [];
    }
    addStudent(student: Student): void {
      this.students.push(student);
    }
    removeStudent(student: Student): void {
      const index = this.students.indexOf(student);
      if (index !== -1) {
        const removedStudent = this.students.splice(index, 1)[0];
        allStudents.push(removedStudent);
      }
    }
    editStudent(student: Student, newId: number, newName: string): void {
      student.id = newId;
      student.name = newName;
    }
    showStudents(): void {
      console.log("Danh sách học sinh trong lớp:");
      this.students.forEach((student) => {
        console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
      });
    }
  }