
/* 4.Write a program to calculate the grade based on the marks obtained in an exam:
Marks >= 90: Grade A
Marks >= 80 and < 90: Grade B
Marks >= 70 and < 80: Grade C
Marks >= 60 and < 70: Grade D
Marks < 60: Grade F */

let marks = prompt("Enter the Marks");

if( marks >= 90){
    console.log("Grade A");
}
else if(marks >= 80 && marks < 90){
    console.log("Grade B");
}
else if(marks >= 70 && marks < 80){
    console.log("Grade C");
}
else if(marks >= 60 && marks < 70){
    console.log("Grade D");
}
else if(marks < 60){
    console.log("Grade E");
}
