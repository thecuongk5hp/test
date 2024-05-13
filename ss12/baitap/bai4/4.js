"use strict";
class Product {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    printInfo() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Product ID: ${this.id}`);
    }
}
class Electronic extends Product {
    constructor(name, id, brand) {
        super(name, id);
        this.brand = brand;
    }
    printInfo() {
        super.printInfo();
        console.log(`Brand: ${this.brand}`);
    }
}
class Book extends Product {
    constructor(name, id, author) {
        super(name, id);
        this.author = author;
    }
    printInfo() {
        super.printInfo();
        console.log(`Author: ${this.author}`);
    }
}
const electronicProduct = new Electronic("ĐIện thoại", 1, "Redme");
const bookProduct = new Book("Doraemon", 2, "Fukuoki");
electronicProduct.printInfo();
console.log("...");
bookProduct.printInfo();
