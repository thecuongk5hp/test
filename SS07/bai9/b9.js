"use strict";
function kiemTraSoNguyenTo(mang) {
    return mang.every(kiemTraSoNguyenTo);
}
function kiemTraSoNguyenTo(so) {
    if (so < 2) {
        return false;
    }
    if (so === 2) {
        return true;
    }
    if (so % 2 === 0) {
        return false;
    }
    let uoc = 3;
    let gioiHan = Math.sqrt(so);
    while (uoc <= gioiHan) {
        if (so % uoc === 0) {
            return false;
        }
        uoc += 2;
    }
    return true;
}
let mang1 = [1, 3, 4, 2, 7, 9, 32, 43, 12, 45];
console.log(kiemTraSoNguyenTo(mang1)); // false
let mang2 = [3, 5, 7, 11, 13];
console.log(kiemTraSoNguyenTo(mang2)); // true
