class Account {
    id: number;
    userName: string;
    password: string;
    isLogin: boolean;
    role: string;
  
    constructor(id: number, userName: string, password: string, role: string) {
      this.id = id;
      this.userName = userName;
      this.password = password;
      this.isLogin = false;
      this.role = role;
    }
  
    login(): void {
      if (!this.isLogin) {
        this.isLogin = true;
        console.log("Đăng nhập thành công.");
      } else {
        console.log("Người dùng đã đăng nhập.");
      }
    }
  
    logout(): void {
      if (this.isLogin) {
        this.isLogin = false;
        console.log("Đăng xuất thành công.");
      } else {
        console.log("Người dùng chưa đăng nhập.");
      }
    }
  }
  
  class UserAcc extends Account {
    status: string;
  
    constructor(id: number, userName: string, password: string, role: string, status: string) {
      super(id, userName, password, role);
      this.status = status;
    }
  
    login(): void {
      if (this.status === "active") {
        super.login();
      } else if (this.status === "banned") {
        console.log("Tài khoản đã bị khóa.");
      } else {
        console.log("Tài khoản không hợp lệ.");
      }
    }
  }
  const account1 = new Account(1, "cuong", "18", "hp");
  account1.login();  
  account1.login();  
  account1.logout(); 
  account1.logout(); 
  
  const user1 = new UserAcc(2, "ha", "abcdef18", "lc", "bglc");
  user1.login(); 