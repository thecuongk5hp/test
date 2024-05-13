"use strict";
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    calculateSalary() {
        return 0;
    }
}
class InternEmployee extends Employee {
    constructor(name, workHour) {
        super(name, "...");
        this.workHour = workHour;
    }
    calculateSalary() {
        return 100 * this.workHour;
    }
}
class OfficialEmployee extends Employee {
    constructor(name, overtimeWage) {
        super(name, "18");
        this.overtimeWage = overtimeWage;
    }
    calculateSalary() {
        return 200 + this.overtimeWage;
    }
}
const intern = new InternEmployee("Thế Cường", 180);
const official = new OfficialEmployee("Ngọc Hà", 170);
console.log(11111, intern.calculateSalary());
console.log(11111, official.calculateSalary());
