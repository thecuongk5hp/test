abstract class Person {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
    abstract displayInfo(): void;
}
  class Student extends Person {
    private id: number;
    constructor(name: string, id: number) {
      super(name);
      this.id = id;
    }
    displayInfo(): void {
      console.log(`ID: ${this.id}`);
      console.log(`Tên sv: ${this.name}`);
    }
}
  class Teacher extends Person {
    private subject: string;
    constructor(name: string, subject: string) {
      super(name);
      this.subject = subject;
    }
    displayInfo(): void {
      console.log(`Tên gv: ${this.name}`);
      console.log(`Môn học: ${this.subject}`);
    }
}
  let check = new Student("Nguyễn Thế Cường", 18);
  check.displayInfo();
  let check1 = new Teacher("Nguyễn Ngọc Hà", "Văn");
  check1.displayInfo();