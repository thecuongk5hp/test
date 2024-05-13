"use strict";
class Person {
    constructor(name, address) {
        // không cần để super
        this.name = name;
        this.address = address;
    }
    //bắt buộc phải triển khai phương thức sale trong interface
    sale() {
        return "sale 5%";
    }
    sale1() {
        return "sale 15%";
    }
}
