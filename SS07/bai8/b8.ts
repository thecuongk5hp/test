class Sach {
    constructor(public tieuDe: string, public tacGia: string, public gia: number) {}
    inThongTinSach(): void {
      console.log(`Tiêu đề: ${this.tieuDe}`);
      console.log(`Tác giả: ${this.tacGia}`);
      console.log(`Giá: ${this.gia}`);
    }
    capNhatSach(tieuDe: string, tacGia: string, gia: number): void {
      this.tieuDe = tieuDe;
      this.tacGia = tacGia;
      this.gia = gia;
    }
}
let sach: Sach = new Sach("doraemon", "cuong", 100000);
sach.inThongTinSach();
sach.capNhatSach("naruto", "ha", 99000);
sach.inThongTinSach();