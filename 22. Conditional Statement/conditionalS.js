// if statement

let a = parseInt(prompt("Enter your Value"));

if (a <= 50) {
  console.log("Number is below 50");
  document.getElementById("demo").innerHTML = "Number is :" + a;
} else if(a > 50) {
  console.log("Number is above 50");
}
else
console.log("entered no is wrong");