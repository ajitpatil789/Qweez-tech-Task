

let a = parseInt(prompt("Enter value of a :"));
let b = parseInt(prompt("Enter value of b :"));
let c = parseInt(prompt("Enter value of c :"));

// 1. Swap the values of a, b and c

console.log("Before Swap :")
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);

a = a + b + c;
b = a - (b + c);
c = a - (b + c);
a = a - (b + c);

console.log("After Swap :")
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);

// Swapping the values using Arithmatic operation
/* 
let a = parseInt(prompt("Enter value of a :"));
let b = parseInt(prompt("Enter value of b :"));
let c = parseInt(prompt("Enter value of c :"));

console.log("Before Swap :")
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);

let temp = a;
a = b;
b = c;
c = temp;

console.log("After Swap :")
console.log("a=",a);
console.log("b=",b);
console.log("c=",c); */

// 2. calculate the average of a, b and c and store it in avg variable.

let avg = (a + b + c) / 3;
console.log("Average of A, B, C is :",avg);

// 3.calculate the average of a, b and c and double the value of avg and store in in result variable.

let result = avg * 2;
console.log("Double the average of A, B, C is :",result);

// 4.calculate the average of a, b and c and subtract it by 100.

let subtract = 100 - avg;
console.log("100 - average is :",subtract)

// 5.calculate the average of a, b and c and find the modules

let modules = (avg % 2);
console.log("Modulus (average % 2) =", modules);