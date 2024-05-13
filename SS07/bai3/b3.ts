enum WeekDays {
    Monday = "Thứ Hai",
    Tuesday = "Thứ Ba",
    Wednesday = "Thứ Tư",
    Thursday = "Thứ Năm",
    Friday = "Thứ Sáu",
    Saturday = "Thứ Bảy",
    Sunday = "Chủ Nhật",
  }
  for (let ngay in WeekDays) {
    if (isNaN(Number(ngay))) {
      console.log(WeekDays[ngay]);
    }
  }