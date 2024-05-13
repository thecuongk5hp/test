"use strict";
/*
    cách khởi tạo class
*/
class Student {
    // mặc định nếu không điền thì sẽ là public
    // ben ngoài class student có thể truy cập được 
    // get thì có return và không có tham số
    constructor(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setName(newName) {
        this.name = newName;
    }
} // instance nghĩa là tạo đối tượng từ class
let std1 = new Student("minh thu");
let std2 = new Student("hoa");
std1.setName = "hà";
console.log(std1.getName);
// console.log(5555,std1.getName());
// std1.setName("thế cường");
// console.log(222222,std1.getName());
// console.log("std2",std1);
/*
    Access modifier: phạm vi truy cập
    3 phạm vi
    1. public: bên ngoài có thể truy cập đươc
    2. private: chỉ được truy cập bên trong đối tượng class
    3. protected: chỉ được truy cập bên trong class và subclass(class con --> kế thừa)
*/
