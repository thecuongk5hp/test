"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let check1 = new Vehicle("Truck", 2022, "Ford");
let check2 = new Vehicle("Motorbike", 2019, "Kawasaki");
console.log("Thông tin của check1:");
console.log("Tên phương tiện:", check1.name);
console.log("Năm sản xuất:", check1.year);
console.log("Hãng xe:", check1.company);
console.log();
console.log("Thông tin của check2:");
console.log("Tên phương tiện:", check2.name);
console.log("Năm sản xuất:", check2.year);
console.log("Hãng xe:", check2.company);
