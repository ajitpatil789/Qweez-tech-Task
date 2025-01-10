 const great = () => {
  return "Hello, World!";
};
console.log(great());

const add_numbers = (a, b) => {
  return a + b;
};
console.log("Sum is", add_numbers(10, 20)); // Output : Sum is 30



// Anonymus function`

 const add = function(x,y){
    return x + y;
};
console.log(`Addition is ${add(20,10)}`); 

//  Arrow function
// const add = (x,y) => {
//     return x + y;
// }
// console.log(`Addition is ${add(50,100)}`);

//  display cube using anonymus function

// const cub = function(n){
//     return n * n * n;
// }
// console.log(`cube is ${cub(10)}`);

//  display cube using Arrow function
// const cubes = (p)=> {
//     return p * p * p;
// }
// console.log(`Cube is ${cubes(5)}`);
 

//***********************************ANONYMUS FUNCTION************************************* */

// 6.Check Even or Odd: Write a function is_even that takes an integer and returns True if it is even, and False otherwise.
const is_even = function(num){
  if(num % 2 === 0){
      return true;
  }
  else return false;
};
console.log( is_even(19)); // Output : false

// 2.Print number from 11 to 22

const printNumbers=function (){
      for(let i = 11; i <= 22; i++){
        console.log(i);
      }
};
printNumbers();

// Annonymus function without assigning to variable

/* (function (){
  for(let i = 11; i <= 22; i++){
    console.log(i);
  }
})();
 */














