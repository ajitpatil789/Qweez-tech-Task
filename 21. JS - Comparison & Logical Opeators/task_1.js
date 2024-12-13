// Task 1

let a = parseInt(prompt("Enter value of a :"));
let b = parseInt(prompt("Enter value of b :"));
let c = parseInt(prompt("Enter value of c :"));

console.log("a =",a);
console.log("b =",b);
console.log("c =",c);

// Qs1. check if a is largest among a, b and c.


let checkAiSLarger = (a>b || a>c);
console.log("A is Larger than a, b, and c :",checkAiSLarger);

// Qs2. verify all three numbers are equal and store the result in a variable

let checkNumbersIsEqual = (a==b && a==c && b==c);
console.log("All Numbers are Equal: ",checkNumbersIsEqual);

// Qs3. check  the number is positive , negative and zero among this three variables.

// Check 'a'
console.log(a > 0 ? "a is positive." : a < 0 ? "a is negative." : "a is zero.");

// Check 'b'
console.log(b > 0 ? "b is positive." : b < 0 ? "b is negative." : "b is zero.");

// Check 'c'
console.log(c > 0 ? "c is positive." : c < 0 ? "c is negative." : "c is zero.");


// Qs3. Find the cube of three variables.

 a = a * a * a;
 b = b * b * b;
 c = c * c * c;

console.log("Cube of a is :",a);
console.log("Cube of b is :",b);
console.log("Cube of c is :",c);