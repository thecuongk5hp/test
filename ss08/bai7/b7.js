"use strict";
function inLoaiDuLieu(data) {
    if (typeof data === "number") {
        console.log("Số");
    }
    else if (Array.isArray(data)) {
        console.log("Mảng");
    }
    else if (typeof data === "object") {
        console.log("Đối tượng");
    }
    else {
        console.log("Không xác định");
    }
}
inLoaiDuLieu(10);
inLoaiDuLieu(["hp", "hcm", "hn"]);
inLoaiDuLieu({ name: "The Cuong", age: 18 });
inLoaiDuLieu("Hello");
