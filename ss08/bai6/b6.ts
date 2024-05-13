function inDuLieu(duLieu: string | string[] | number): void {
    if (typeof duLieu === "string") {
      console.log(duLieu);
    } else if (Array.isArray(duLieu)) {
      duLieu.forEach((phantu: string) => {
        console.log(phantu);
      });
    } else {
      console.log("Dữ liệu không hợp lệ");
    }
  }
  
  inDuLieu("Xin chào");
  inDuLieu(["hp", "hn", "hcm"]);
  inDuLieu(123);