//1. find a number is positive or negative

let number = parseInt(prompt("Enter the Number:"));

console.log(number > 0 ? "Number Is Positive" : "Number is Negative");

//2. Find a number is even and odd.

console.log(number % 2 === 0 ? "Number is Even" : "Number is Odd");

// find the temp [temp>50=Too Hot,
// temp>30=warm otherwise cold]

let temp = parseInt(prompt("Enter Temprature"));
console.log(temp > 50 ? "Too Hot" : temp > 30 ? "Warm" : "Cold");

// 4. find leap year
let year = parseInt(prompt("Enter Year:"));

console.log(
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "Leap Year"
    : "Not Leap Year"
);

// 5. Print number which is divisible by 3 from 23 to 71.

let i = 23;
let result;
for (i = 23; i <= 71; i++) {
  result =
    i % 3 === 0 ? `${i} is Divisible by 3` : `${i} is not Divisible by 3`;
  console.log(result);
}
