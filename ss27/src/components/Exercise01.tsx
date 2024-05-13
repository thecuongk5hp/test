import React from 'react'
interface Product{
  name:string,
  price:number,
  id:number
}
interface Student{
  name:string,
  age:number,
  address:string
}
export default function Exercise01() {
  // render dữ liệu đối với function component
  let fullName: string ="minh thu";
  let age: number=25;
  let student={
    name: "hoa",
    age: 20,
    address:"hà nội",
  }
  let number: number[]=[1,4,2,5];
  let student1:string[]=["thu","ngọc","lan","phương"]
  let products:Product[]=[
  {
    name:"iphone5",
    price:5000,
    id:1
  },
  {
    name:"iphone6",
    price:6000,
    id:2
  },
  {
    name:"iphone7",
    price:7000,
    id:3
  }];
  return (
    <div>
      <p> Bài tập 1</p>
      <p>Nội dung bài tập</p>
      <p> Hiển thị fullName : {fullName}</p>
      <p>{fullName} năm nay {age} tuổi</p>
      <p> Tên {student.name}</p>
      <p> Tuổi {student.age}</p>
      <p>Chuyển sang dạng JSON để hiển thị</p>
      <p>{JSON.stringify(student)}</p>
      <p>Hiển thị mảng array</p>
    <ul>
      {number.map((item,index,arr)=>{
        return < li key= {index}>{item}</li>
      })}
    </ul>
    <ul>
      {student1.map((item,index,arr)=>{
        return <li key= {index}>{item}</li>
      })}
    </ul>
    <ul>
      <p>STT Name Price 10</p>
      {products.map((item,index,arr)=>{
        return <li key ={index}> {item.name} {item.price} {item.id}</li>
        
      })}
    </ul>
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Id</th>
      </tr>
      {products.map((item,index,arr)=>{
        return <tr key ={index}> 
                  <td>{item.name}</td> 
                  <td>{item.price}</td> 
                  <td>{item.id}</td>
                </tr>
      })}
    </table>
    <table>
      <thead>
        <tr>
          <th>Stt</th>
          <th>Tên</th>
          <th>Giá</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item,index,arr)=>{
          return <tr>
            <td> {index +1} </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.id}</td>
          </tr>
        })}
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>

  // khi return các element thì phải có thẻ fragment bọc ngoài

  )
}

