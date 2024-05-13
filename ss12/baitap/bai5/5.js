"use strict";
class Quadrangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class Rectangle extends Quadrangle {
    constructor(width, height) {
        super(width, height);
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Square extends Quadrangle {
    constructor(side) {
        super(side, side);
    }
    calculatePerimeter() {
        return 4 * this.width;
    }
}
const rectangle = new Rectangle(4, 6);
const square = new Square(5);
console.log(11111, rectangle.calculatePerimeter());
console.log(11111, square.calculatePerimeter());
