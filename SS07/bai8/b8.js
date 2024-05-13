"use strict";
class Sach {
    constructor(tieuDe, tacGia, gia) {
        this.tieuDe = tieuDe;
        this.tacGia = tacGia;
        this.gia = gia;
    }
    inThongTinSach() {
        console.log(`Tiêu đề: ${this.tieuDe}`);
        console.log(`Tác giả: ${this.tacGia}`);
        console.log(`Giá: ${this.gia}`);
    }
    capNhatSach(tieuDe, tacGia, gia) {
        this.tieuDe = tieuDe;
        this.tacGia = tacGia;
        this.gia = gia;
    }
}
let sach = new Sach("doraemon", "cuong", 100000);
sach.inThongTinSach();
sach.capNhatSach("naruto", "ha", 99000);
sach.inThongTinSach();
