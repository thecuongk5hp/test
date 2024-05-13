class Department {
    private id: number;
    private name: string;
    private employees: string[];
    constructor(id: number, name: string, employees: string[]) {
      this.id = id;
      this.name = name;
      this.employees = employees;
    }
    public describe(): void {
      console.log("Số Phòng :", this.id);
      console.log("Tên Phòng :", this.name);
    }
    public addEmployee(employee: string): void {
      this.employees.push(employee);
    }
    public listEmployees(): void {
      console.log("Danh sách người trong phòng:");
      for (let employee of this.employees) {
        console.log(employee);
      }
    }
  }
  let department = new Department(403, "Phòng trọ", ["Thế Cường", "Minh Hiển"]);
  department.describe();
  department.addEmployee("Tuổi : 18");
  department.listEmployees();