// Display good day message by using function with no parameters and no value returns
function day() {
  console.log("Good Day...!");
}
day();

// Display addition of two numbers by using  function with no para and no value retun

function add() {
  let x = 10;
  let y = 10;
  console.log("Addition", x + y);
}
add();

// Display good day message by using function with parameters and no value returns

function day(str) {
  console.log(str);
}
day("Good Day...");

// // Display addition of two numbers by using  function with parameter and no value retun

function add(a, b) {
  console.log(`Addition is ${a + b}`);
}
add(10, 50);

// substract two numbers by using function with no parameters and value return

function substract() {
  let x = 50;
  let y = 25;
  return x - y;
}
console.log(substract());

// //4.Substraction using function with  parameters and values return

function substract(a, b) {
  return a - b;
}
console.log(substract(50, 10));

// display Happy new year message by using function with parameter and value return

function Gretting(str){
    return str;
}
console.log(Gretting("Happy New Year"));


// cube 

function findCube(n){
    return n * n * n;
}
console.log(findCube(10));
