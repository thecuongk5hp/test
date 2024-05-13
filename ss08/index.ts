/*
    1.union: kiểu kết hợp |

    2.intersection: kiểu kết hợp &
*/

//  1.union: kiểu kết hợp |
let a:number|string|undefined=5;
a="hồng";
// tham chiếu(array);
let numbers:(number|string)[]=[1,2,3,5]
let b:number=0;
//


//  2.intersection: kiểu kết hợp &
type A={
    name:string,
    address:string,
    phone:string,
}
type B={
    email:string
}
type C=A&B;
let obj:A={
    name:"hoa",
    address:"hà nội",
    phone:"0994",
}
let obj1:C={
    name:"hồng",
    address:"hcm",
    phone:"0994123",
    email:"hong123@gmail.com",
}