/* 
    Tạo ra interface Geometry chứa 2 phương thức calculateArea và calculatePerimeter. 
    Định nghĩa lớp Circle có thuộc tính private radius, lớp Rectangle có 2 thuộc tính private width, height. 
    2 lớp đều implements interface Geometry. Xây dựng 2 phương thức có trong interface cho 2 hàm đó.
*/
interface Geometry{
    calculateArea():number;
    calculatePerimeter():number;
}
class Circle implements Geometry{
    private radius:number;
    constructor(radius:number){
        this.radius = radius;
    }
    calculateArea():number{
        return Math.PI*this.radius**2;
    }
    calculatePerimeter():number{
        return 2*Math.PI*this.radius;
    }
}
let circle = new Circle(5);
class Rectangle implements Geometry{
    private width:number;
    private height:number;
    constructor(width:number, height:number){
        this.width = width;
        this.height = height;
    }
    calculateArea():number{
        return this.width * this.height;
    }
    calculatePerimeter():number{
        return 2 * (this.width + this.height);
    }
}