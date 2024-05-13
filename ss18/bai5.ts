/*
    Tạo ra interface changeSpeed chứa các phương thức: speedUp, slowDown và stop.  
    Định nghĩa lớp Vehicle implement interface changeSpeed có thuộc tính private speed.
    Xây dựng các phương thức để thay đổi thuộc tính speed. Tạo ra 1 thực thể từ lớp Vehicle 
    và gọi các phương thức, sau mỗi phương thức thì in thông tin để kiểm tra kết quả.
*/ 
interface changeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}
class Vehicle implements changeSpeed {
    private speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }
        speedUp(): void {
        this.speed += 10;
        console.log(`Speed up to ${this.speed} km/h`);
    }
        slowDown(): void {
        this.speed -= 10;
        console.log(`Slow down to ${this.speed} km/h`);
    }
        stop(): void {
        this.speed = 0;
        console.log(`Stopped`);
    }
        getSpeed(): number {
        return this.speed;
    }
}
let myVehicle = new Vehicle(50);
console.log(`Initial speed: ${myVehicle.getSpeed()} km/h`);
myVehicle.speedUp();
myVehicle.speedUp();
myVehicle.slowDown();
myVehicle.stop();
console.log(`Final speed: ${myVehicle.getSpeed()} km/h`);