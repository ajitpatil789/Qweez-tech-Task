//3. Find out the year is leap year or not.
// let year = 2025;
let year = prompt("Enter Year:");

if((year % 4 === 0 && year % 100 !==0) || year % 400 ===0){
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}