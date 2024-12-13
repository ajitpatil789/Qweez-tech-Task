//1.Write a program to check whether a given number is even or odd.

let number = prompt("Enter the number :");

if(number % 2 ==0){
    console.log("The Number is Even");
}

else
console.log("The Number is Odd");

//2.Write a program to determine if a number is positive, negative, or zero.
//console.log(number > 0 ? "Number is positive." : number < 0 ? "Number is negative." : "Number is zero.");

if(number > 0){
    console.log("Number is positive.")
}
else if(number < 0){
    console.log("Number is Negative.")
}
else
console.log("Number is Zeor.")