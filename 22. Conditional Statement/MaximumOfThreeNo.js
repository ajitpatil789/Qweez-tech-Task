/* let num1 = 20;
let num2 = 30;
let num3 = 10; */

let num1 = prompt("Enter the number :");
let num2 = prompt("Enter the number :");
let num3 = prompt("Enter the number :");


if(num1 > num2 && num1 > num3){
    console.log("Num1 is maximum");
}
else if(num2 > num1 && num2 > num3){
    console.log("Num2 is maximum");
}
else if(num3 > num1 && num3 > num2){
    console.log("Num2 is maximum");
}