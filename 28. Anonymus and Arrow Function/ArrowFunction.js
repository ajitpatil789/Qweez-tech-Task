// Arrow Function

// Print number is positive or negative

const checkNumber = (num) =>
  num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";

console.log(checkNumber(10)); // Output: Positive
console.log(checkNumber(-5)); // Output: Negative
console.log(checkNumber(0)); // Output: Zero

//Print odd number from 52 to 64 and skip number 59 and 61.
const oddNumber = () => {
  for (let i = 52; i <= 64; i++) {
    if (i % 2 != 0) {
      if (i === 59 || i === 61) continue; // Skip 59 and 61
      console.log(i);
    }
  }
};
oddNumber(); // Output : 53 55 57 63

// 3.Print percentage of 5 subject.
 const percentage = (m1,m2,m3,m4,m5) =>{
    let total = m1+m2+m3+m4+m5;
    let per = (total/500)*100;
    return per;
 }
 console.log("Percentage of 5 Subject is ",percentage(80,70,65,75,60)); // Output : 70
 