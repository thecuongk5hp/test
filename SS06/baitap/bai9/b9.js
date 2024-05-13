"use strict";
let c1 = "banana";
let c2 = "";
for (let i = 0; i < c1.length; i++) {
    let check = c1[i];
    if (c2.indexOf(check) === -1) {
        c2 += check;
    }
}
console.log(c2);
let d1 = "hello world";
let d2 = "";
for (let i = 0; i < d1.length; i++) {
    let check = d1[i];
    if (d2.indexOf(check) === -1) {
        d2 += check;
    }
}
console.log(d2);
