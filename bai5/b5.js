"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log("Số Phòng :", this.id);
        console.log("Tên Phòng :", this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
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
