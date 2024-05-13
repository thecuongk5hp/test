let bienAny: any = "Hello";
let bienUnknown: unknown = "World";

// Truy cập thuộc tính của biến
console.log(bienAny.length); // biến any cho phép truy cập thuộc tính
console.log(bienUnknown.length); // Lỗi: biến unknown không cho phép truy cập thuộc tính trực tiếp
console.log(bienAny.toUpperCase()); // biến any cho phép gọi phương thức toUpperCase() của chuỗi
console.log(bienUnknown.toUpperCase()); // biến unknown không cho phép gọi phương thức trực tiếp
