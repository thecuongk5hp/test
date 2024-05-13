function checl1(): void {
    console.log("Hello!");
  }
  
  const result1 = checl1();
  console.log(result1); // Kết quả: undefined



function check2(): never {
    while (true) {
      console.log("Xảy ra lỗi!");
      // Thực hiện các xử lý khác liên quan đến việc xử lý lỗi
    }
}
  const result2: never = check2();