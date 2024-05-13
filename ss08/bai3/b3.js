"use strict";
let calculateArea = function (hinh) {
    if (hinh.type === 'square') {
        return hinh.sideLength * hinh.sideLength;
    }
    else if (hinh.type === 'circle') {
        return Math.PI * hinh.radius * hinh.radius;
    }
    return 0;
};
let square = {
    type: 'square',
    sideLength: 4
};
let circle = {
    type: 'circle',
    radius: 5
};
console.log(calculateArea(square));
console.log(calculateArea(circle));
