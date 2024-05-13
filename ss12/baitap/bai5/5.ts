abstract class Quadrangle {
    protected width: number;
    protected height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    abstract calculatePerimeter(): number;
  }
  
  class Rectangle extends Quadrangle {
    constructor(width: number, height: number) {
      super(width, height);
    }
  
    calculatePerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  
  class Square extends Quadrangle {
    constructor(side: number) {
      super(side, side);
    }
  
    calculatePerimeter(): number {
      return 4 * this.width;
    }
  }
  
  const rectangle: Quadrangle = new Rectangle(4, 6);
  const square: Quadrangle = new Square(5);
  
  console.log(11111, rectangle.calculatePerimeter());
  console.log(11111, square.calculatePerimeter());