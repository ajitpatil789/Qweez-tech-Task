let marks = parseInt(prompt("Enter Your")) // Example marks, change this value to test
let grade;

switch (true) {
  case marks >= 90 && marks <= 100:
    grade = "Grade A";
    break;
  case marks >= 70 && marks < 90:
    grade = "Grade B";
    break;
  case marks >= 60 && marks < 70:
    grade = "Grade C";
    break;
  case marks >= 40 && marks < 60:
    grade = "Grade D";
    break;
  case marks > 30 && marks < 40:
    grade = "Grade F";
    break;
  case marks > 100:
    grade = "Please enter marks between 1 to 100";
    break;
  default:
    grade = "Fail";
    break;
}

console.log(`Marks: ${marks}, Result: ${grade}`);
