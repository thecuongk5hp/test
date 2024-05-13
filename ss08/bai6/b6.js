"use strict";
function inDuLieu(duLieu) {
    if (typeof duLieu === "string") {
        console.log(duLieu);
    }
    else if (Array.isArray(duLieu)) {
        duLieu.forEach((phantu) => {
            console.log(phantu);
        });
    }
    else {
        console.log("Dữ liệu không hợp lệ");
    }
}
inDuLieu("Xin chào");
inDuLieu(["hp", "hn", "hcm"]);
inDuLieu(123);
