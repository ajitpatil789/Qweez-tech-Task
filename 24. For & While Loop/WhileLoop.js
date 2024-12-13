//*************************************************************************WHILE LOOP************************************************************************************** */
//1. Write a program to print the numbers from 1 to 10 using a while loop.
let i = 1;
console.log("Numbers from 1 to 10");
while (i <= 10) {
  console.log(i);
  i++;
}

// 2. Write a program to calculate the sum of numbers from 1 to 100.
let sum = 0;
let a = 1;
console.log("Sum of numbers from 1 to 100 ");
while (a <= 100) {
  sum = sum + a;
  a++;
}
console.log("Sum is", sum);

// 3. Create a for loop to print all even numbers between 1 and 20.

let b = 1;
console.log("even numbers between 1 and 20");
while (b <= 20) {
  if (b % 2 == 0) {
    console.log("Even Numbers :", b);
  }
  b++;
}

// 4. Use a for loop to print all odd numbers between 1 and 50.
console.log("Odd numbers between 1 and 50");
let c = 1;
while (c <= 50) {
  if (c % 2 != 0) {
    console.log("Odd Number :", c);
  }
  c++;
}

// 5. Write a program to display the multiplication table of 5 using a for loop.
let index = 1;
let n =1;
console.log("Multiplication table of 5");
while (n <= 10) {
    let multiplication = 5 * n;

    console.log(`5 * ${index} = ${multiplication}`);
    index++;
    n++;
}

//3. Print prime number from 0 to 100.

 let num = 2;
 console.log("Prime numbers from 0 to 100");
 while(num <= 100){
    let isPrime = true;
    let i = 2;
    while(i < num){
        if(num % i === 0){
            isPrime = false;
            break;
        }
        i++;
    }
    if(isPrime){
        console.log(num);
    }
    num++;
 }
