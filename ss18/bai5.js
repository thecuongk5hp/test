"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
        console.log(`Speed up to ${this.speed} km/h`);
    }
    slowDown() {
        this.speed -= 10;
        console.log(`Slow down to ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Stopped`);
    }
    getSpeed() {
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
