type Square = {
    type: 'square';
    sideLength: number
};
type Circle = {
    type: 'circle';
    radius: number 
};
let calculateArea = function(hinh: Square | Circle): number {
  if (hinh.type === 'square') {
    return hinh.sideLength * hinh.sideLength;
  } else if (hinh.type === 'circle') {
    return Math.PI * hinh.radius * hinh.radius;
  }
  return 0;
};
let square: Square = {
    type: 'square',
    sideLength: 4 
};
let circle: Circle = {
    type: 'circle',
    radius: 5 
};
console.log(calculateArea(square));
console.log(calculateArea(circle));