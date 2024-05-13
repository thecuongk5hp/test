class Circle {
    private radius: number;
constructor(radius: number) {
    this.radius = radius;
}
public getRadius(): number {
    return this.radius;
}
public setRadius(newRadius: number): void {
    this.radius = newRadius;
}
public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
}
public calculateCircumference(): number {
    return 2 * Math.PI * this.radius;
}
}
  let circle = new Circle(4);
  console.log("Bán kính:", circle.getRadius());
  console.log("Chu vi:", circle.calculateCircumference());
  console.log("Diện tích:", circle.calculateArea());
  circle.setRadius(6);
  console.log("Bán kính mới:", circle.getRadius());
  console.log("Chu vi mới:", circle.calculateCircumference());
  console.log("Diện tích mới:", circle.calculateArea());