abstract class Employee {
    name:string;
    constructor(name:string){
        this.name=name
    }
    // khai báo phương thức đối với abstract
    // getFullName(){
    //     return this.name
    // }
    abstract getFullName():void;
    abstract getAge():void;
    // đối với phương thức trong abstract thì chỉ có tên phương thức, kiểu dữ liệu trả về và ko có phần body
}
// cách khởi tạo đối tượng abstracion 
// thêm từ khóa abstrac vào đầu class
// intance 
// let emp1 = new Employee("nam")
// emp1 được gọi là 1 intance của class Employee
// đối với abstract thì không  cho phép khởi taoj đối tượng(intance)
/*
     tạo 1 class con kế thừa  class Employee

*/
abstract class Employee1 extends Employee{
    address:string;
    constructor(address:string,name:string) {
        super(name)
        this.address = address
        this.name=name
    }
}
class Student extends Employee{
    private age:number;
    constructor(age:number,name:string){
        super(name)
        this.age = age
        this.name=name
    }
    getFullName(): void {
        
    }
    getAge():void{

    }
}
class Person{
    name:string;
    constructor(name:string){
        this.name=name
    }
    getFullName(){

    }
}
class Person1 extends Person{
    // nếu triển khai phương thức của class cha thì overriding (ghi đè phương thức)
}
