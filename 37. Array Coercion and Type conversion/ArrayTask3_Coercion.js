// [using function]
//1.Implicit Type conversion: Take 2 argument , a string and number and print the sum
function implicitConversion(x, y) {
  console.log(x + y, typeof (x + y));
}
implicitConversion(10, "20");

// 2.Explicit conversion: Takes a string containing number ('63476878'); converts it into a number, display result

function explicitConversion(str) {
  let result = Number(str);
  console.log(result, typeof result);
}
explicitConversion("100");

// 3. Accepts an array of number.converts the array into a string

function convertArrayToString(arr) {
  let output = arr.toString();
  console.log(output, typeof output);
}
let arr = [123, 564, 125, 850];
convertArrayToString(arr);

// 4 Convert Date to string

// function convertDateToString(date) {
//   console.log(date);
// }
// let todayDate = new Date();
// convertDateToString(todayDate.toISOString().split("T")[0]);

function convertDateToString(date) {
  return date.toString();
}
let date = new Date();
let dateString = convertDateToString(date);
console.log(dateString);
