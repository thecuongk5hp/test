"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(newRadius) {
        this.radius = newRadius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
let circle = new Circle(4);
console.log("Bán kính:", circle.getRadius());
console.log("Chu vi:", circle.calculateCircumference());
console.log("Diện tích:", circle.calculateArea());
circle.setRadius(6);
console.log("Bán kính mới:", circle.getRadius());
console.log("Chu vi mới:", circle.calculateCircumference());
console.log("Diện tích mới:", circle.calculateArea());
