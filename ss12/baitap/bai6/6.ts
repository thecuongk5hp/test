class Employee {
    protected name: string;
    protected role: string;
  
    constructor(name: string, role: string) {
      this.name = name;
      this.role = role;
    }
  
    calculateSalary(): number {
      return 0;
    }
  }
  
  class InternEmployee extends Employee {
    private workHour: number;
  
    constructor(name: string, workHour: number) {
      super(name, "...");
      this.workHour = workHour;
    }
  
    calculateSalary(): number {
      return 100 * this.workHour;
    }
  }
  
  class OfficialEmployee extends Employee {
    private overtimeWage: number;
  
    constructor(name: string, overtimeWage: number) {
      super(name, "18");
      this.overtimeWage = overtimeWage;
    }
  
    calculateSalary(): number {
      return 200 + this.overtimeWage;
    }
  }
  
  const intern: Employee = new InternEmployee("Thế Cường", 180);
  const official: Employee = new OfficialEmployee("Ngọc Hà", 170);
  
  console.log(11111, intern.calculateSalary());
  console.log(11111, official.calculateSalary());