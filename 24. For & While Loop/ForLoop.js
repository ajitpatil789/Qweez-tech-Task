//*************************************************************************FOR LOOP************************************************************************************** */
//1. Write a program to print the numbers from 1 to 10 using a for loop.


let a = 1;
console.log("Numbers from 1 to 10 ");
for(a = 1; a <= 10; a++){
    
    console.log(a);
}

 //2. Write a program to calculate the sum of numbers from 1 to 100.
let sum = 0;
console.log("Sum of numbers from 1 to 100 ");
for(let i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log("Sum is",sum);

// 3. Create a for loop to print all even numbers between 1 and 20.

let i = 1;
console.log("even numbers between 1 and 20");
 for(i = 1; i <= 20; i++){
    if(i % 2 ==0){
        console.log("Even Numbers :",i);
    }
 }

 // 4. Use a for loop to print all odd numbers between 1 and 50.
 console.log("Odd numbers between 1 and 50");
for(let i = 1; i<=50; i++){
    if(i % 2 !=0){
        console.log("Odd Number :",i);
    }
}

 // 5. Write a program to display the multiplication table of 5 using a for loop.
let index = 1;
console.log("Multiplication table of 5");
for (i = 1; i <= 10; i++) {
    let multiplication = 5 * i;

    console.log(`5 * ${index} = ${multiplication}`);
    index++;
}

//6. Print prime number from 0 to 100.

console.log("Prime number from 0 to 100");
for(let num = 2; num <=100; num++){
    let isPrime = true;

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(num);
    }
} 




