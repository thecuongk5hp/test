"use strict";
class Employee {
    constructor(tenNV, tenCT, soDT) {
        this.tenCongTy = tenCT;
        this.tenNhanVien = tenNV;
        this.soDienThoai = soDT;
    }
    inThongTin() {
        console.log("Tên công ty:", this.tenCongTy);
        console.log("Tên nhân viên:", this.tenNhanVien);
        console.log("Số điện thoại:", this.soDienThoai);
    }
}
let nhanVien = new Employee("NTC", "Thế Cường", "0966");
nhanVien.inThongTin();
