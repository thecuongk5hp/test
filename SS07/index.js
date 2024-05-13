"use strict";
/*
    1.array
*/
let numbers = [1, 2, 3, 4];
//khai báo một mảng numbers các phần tử trong mảng number phải là number
let students = ["hoa", "hồng", "tuệ"];
/*
    2.object
*/
let obj = {
    name: "minh thu",
    address: "hà nội",
    id: 1,
};
let obj1 = {
    name: "minh thu",
    address: "hà nội",
    id: 1,
};
/*
    3.enum
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
let person = {
    name: "ngọc",
    address: "hn",
    role: 0
};
/*
    4.void : áp dụng với function
    khi hamf không trả về kết quả gì
    khi hàm trả về kết quả thì phải gán khai baos kiểu dữ liệu trả về của hàm
*/
function sayHello() {
    console.log("hello"); //không có dữ liệu trả về dùng void
}
sayHello();
function sum(a, b) {
    return a + b; //có dữ liệu trả về dùng string hoặc number
}
console.log(sum(3, 4));
/*
    5.unknown
    tương tự kiểu dữ liệu any  nhưng chặt hơn
    khi dùng any thì kiểu dữ liệu truyền vào là gì cũng được
*/
function test1(a) {
    //bắt buộc kiểm tra kiểu dữ liệu trước khi đi thực hiện phép tính
    console.log(11111, typeof (a));
    if (typeof a === "string") {
        console.log(a.toUpperCase());
    }
}
test1("text");
/*
    6.type never
    thường dùng trong cá vòng lặp vô tận
    tức là các vòng lặp chạy không có điểm dừng
    để đo giấ trị:
*/
function typeNever() {
    let a = 1;
    while (true) {
        console.log("giá trị a", ++a);
    }
}
typeNever();
