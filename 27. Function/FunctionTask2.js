// 1. Write a function named greet that prints "Hello, World!" and call it.
function greet(){
    return "Hello, World!"
}
console.log(greet()); // Output : Hello, World!

//2. Function with Parameters: Create a function add_numbers that takes two numbers as parameters and returns their sum.

function add_numbers(a,b){
    return a + b;
}
console.log("Sum is",add_numbers(10,20)); // Output : Sum is 30

// 3. Display Prime number by using function.

function findPrimeNumber (){
        // const number = parseInt(prompt("Enter Number")); // Get user Input
        const number =10;

if (number <= 1){
    console.log(number, "is not Prime number");
    
}
else{
    let isPrime = true;
    for(let i =2; i < number; i++){
        if(number % i === 0){
            isPrime = false;
            console.log(number, "is not Prime number");
            break;
        }
    }
    if(isPrime){
        console.log(number, "is Prime number");
        
    }
}
}
findPrimeNumber(); // Output : 10 is not Prime numbe

//4. Function Returning a Value: Implement a function multiply that accepts two integers, multiplies them, and returns the result.
 function multiply(){
    let x = 10;
    let y = 20;
    return x * y;
 }
 console.log("Multiplication is", multiply()); // Output : Multiplication is 200
 

 // 5. Square a Number: Create a function square that takes a number and returns its square
 function square(sqr){
        return sqr * sqr;
 }
 console.log("Square of Number is: ",square(5)); // Output : Square of Number is:  25
 
 // 6.Check Even or Odd: Write a function is_even that takes an integer and returns True if it is even, and False otherwise.
 function is_even(num){
    if(num % 2 === 0){
        return true;
    }
    else return false;
 }
console.log( is_even(19)); // Output : false
