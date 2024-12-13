/* 5.Write a program to check if a person is eligible to vote. The minimum voting age is 18, but people over 70 are considered seniors. Output their eligibility and whether they are a senior. */

let age = prompt("Enter Your age :");

if(age >=18 && age > 70){
    console.log("You Are eligible for Vote");
    console.log("Citizenship : Senior");
}
else if(age >=18 && age < 70){
    console.log("You Are eligible for Vote");
    console.log("Citizenship : Not Senior");
}