function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}
function areaOfReactangle(length, width) {
  return length * width;
}

function areaOfCylinder(radius, height) {
  return 2 * Math.PI * radius * (height + radius);
}
function areaOfTriangle(base, height) {
  return 0.5 * base * height;
}

let radius = 5;
let height = 10;
let base = 5;
let length = 10;
let width = 5;

console.log(areaOfCircle(radius));
console.log(areaOfReactangle(length, width));
console.log(areaOfCylinder(radius, height));
console.log(areaOfTriangle(base, height));
