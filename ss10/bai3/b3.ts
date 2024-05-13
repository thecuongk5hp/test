class Employee {
    tenCongTy: string;
    tenNhanVien: string;
    soDienThoai: string;
  
constructor(tenNV: string, tenCT: string, soDT: string) {
    this.tenCongTy = tenCT;
    this.tenNhanVien = tenNV;
    this.soDienThoai = soDT;
}
inThongTin(): void {
    console.log("Tên công ty:", this.tenCongTy);
    console.log("Tên nhân viên:", this.tenNhanVien);
    console.log("Số điện thoại:", this.soDienThoai);
    }
}
let nhanVien = new Employee("NTC", "Thế Cường", "0966");
nhanVien.inThongTin();