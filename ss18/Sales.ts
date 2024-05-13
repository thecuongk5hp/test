/*
    interface : giao diện
    trong interface gồm có thuộc tính và phương thức
    đối với phương thức thì không có phần thân---> nó chỉ định nghĩa thôi
    đối với interface thì không thể dùng kiểu kết hợp union và intersession được như đối với thằng type
    có thể khởi tạo đối tượng từ interface được không=>> không thể khởi tạo từ interfcae đươc
    interface sinh ra nhằm mục đích gì-->interface là một cais khuôn cho các class khác kế thừa phải tuân theo
    các class con khi kế thừa  interface bắt buộc phải triên khai tất cả các thuộc tính và phương thức của interface(implement)
    1 class có thể triển khai nhiều interface được không ? ---> có thể
    interface có kế thừa interface được không?
    ---> interface có thể kế thừa interface
    trong interface thì không thể đặt access modifine được
*/
interface Sales {
    name: string;
    sale(): string;
    sale1(): string;
}
interface Sales1 {
    name: string;
    address: number;
}
class Person implements Sales {
    name: string;
    address: number;
    constructor(name: string, address: number) {
        // không cần để super
        this.name = name;
        this.address = address;
    }
    //bắt buộc phải triển khai phương thức sale trong interface
    sale(): string {
        return "sale 5%";
    }
    sale1(): string {
        return "sale 15%";
    }
}
