// Prime Number
const number = parseInt(prompt("Enter Number")); // Get user Input

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

// 1: use for loop to find Factorial of a number.

if(number < 0){
    console.log("Factorial is not defined for negative numbers");
    
}
else{
    let Factorial = 1;
    for(i = 1; i <= number; i++){
        Factorial *= i;
    }
    console.log(`For Loop-Factorial of "${number}" is ${Factorial}`);
    
}

// 2. Uses a while loop to calculate the factorial of that number.
if(number < 0){
    console.log("Factorial is not defined for negative numbers");
    
}
else {
    let Factorial = 1; // Initialize the result
    let i =1; // Start the counter
    while(i <= number){
        Factorial *= i; // Multiply the result by the current number
        i++; // Increment the counter
    }
    console.log(`While loop-For Loop-Factorial of "${number}" is ${Factorial}`);
}

/* 3: FizzBuzz : Loops through numbers from 1 to 100.
Prints:
Fizz if the number is divisible by 3.
Buzz if the number is divisible by 5.
FizzBuzz if the number is divisible by both 3 and 5. */

for (let n = 1; n <= 100; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log(`${n} is divisible by both 3 and 5 = "FizzBuzz"`);
    } else if (n % 3 === 0) {
        console.log(`${n} is divisible by 3 = "Fizz"`);
    } else if (n % 5 === 0) {
        console.log(`${n} is divisible by 5 = "Buzz"`);
    } else {
        console.log(n);
    }
}

// 4: Print Numbers Divisible by 3 and 5

console.log("Numbers Divisible by 3 and 5");

for (let n = 1; n <= 100; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log(n);
    }
}





























