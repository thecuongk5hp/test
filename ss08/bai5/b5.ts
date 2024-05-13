// Union Types
type KetQua = number | string | boolean;

function hienThiKetQua(ketQua: KetQua): void {
  if (typeof ketQua === "number") {
    console.log("Kết quả là một số: " + ketQua);
  } else if (typeof ketQua === "string") {
    console.log("Kết quả là một chuỗi: " + ketQua);
  } else {
    console.log("Kết quả không hợp lệ");
  }
}
hienThiKetQua(10); // Kết quả: "Kết quả là một số: 10"
hienThiKetQua("Xin chào"); // Kết quả: "Kết quả là một chuỗi: Xin chào"
hienThiKetQua(true); // Kết quả: "Kết quả không hợp lệ"

// Intersection Types
type CoTheChao = { chao: () => void };
type CoTheGhiLog = { ghiLog: () => void };

function chaoVaGhiLog(obj: CoTheChao & CoTheGhiLog): void {
  obj.chao();
  obj.ghiLog();
}

const nguoiChao: CoTheChao & CoTheGhiLog = {
    chao: () => {
    console.log("Xin chào, thế cường!");
},
    ghiLog: () => {
    console.log("Ghi log...");
  },
};

chaoVaGhiLog(nguoiChao); // Kết quả: "Xin chào, thế cường!" và "Ghi log..."