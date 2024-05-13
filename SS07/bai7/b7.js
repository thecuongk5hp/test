"use strict";
let danhSachSinhVien = [
    { id: 1, ten: "cuong", tuoi: 17 },
    { id: 2, ten: "ha", tuoi: 20 },
    { id: 3, ten: "tuyet", tuoi: 20 },
    { id: 4, ten: "anh", tuoi: 10 },
    { id: 5, ten: "cường", tuoi: 20 },
];
function locSinhVienTheoTuoi(mangSinhVien, tuoiMucTieu) {
    return mangSinhVien.filter((sinhVien) => sinhVien.tuoi === tuoiMucTieu);
}
let sinhVienTheoTuoi20 = locSinhVienTheoTuoi(danhSachSinhVien, 20);
console.log(sinhVienTheoTuoi20);
