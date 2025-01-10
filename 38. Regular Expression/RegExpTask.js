const input = "The quick brown fox jumps at angle 45 over the lazy dog. The dog barked.";

//1.Print all White Spaces from string
const whiteSpace = input.match(/\s/g);
console.log("All white Spaces:",whiteSpace);
console.log(whiteSpace.length);

//2.Print all character and their length from string
const allCharaters = input.split("");
console.log("All characters:",allCharaters);
console.log(`Lenth of all characters:${allCharaters.length}`);

//3. Print All Non-Digits from the String
const nonDigit = input.match(/\D/g);
console.log("All non-digit characters:", nonDigit.join(""));

//4. Print All Special Characters from the String
const specialChars = input.match(/[^a-zA-Z0-9\s]/g);
console.log("All special characters:", specialChars); // Array of special characters
console.log("Count of special characters:", specialChars.length);

