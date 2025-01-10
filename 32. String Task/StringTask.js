// *************************************** 1. write a function that takes a string and return in reversed.************************************************************
function reverseString(str) {
  return str.split("").reverse().join("");
}
const originalString = "Qweeze";
const reversedString = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);

/* function reverseString(str) {
  let reverse = "";
  for (i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverseString("AJIT")); */

/* Explanation:
split(''): Converts the string into an array of characters.
reverse(): Reverses the array.
join(''): Joins the array back into a string. */

// ******************************************2.Check if a string is palindrome or not.*******************************************************************************

function isPalindrome(str1) {
  // Normalize the string: remove spaces and convert to lowercase
  const normalizedStr = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(normalizedStr);

  // Reverse the normalized string
  const reversedStr = normalizedStr.split("").reverse().join("");

  // Compare the original normalized string with the reversed string
  return normalizedStr === reversedStr;
}

const testString = "A man a plan a canal Panama"; // Example with spaces and capitalization
if (isPalindrome(testString)) {
  console.log(`"${testString}" is a palindrome.`);
} else {
  console.log(`"${testString}" is not a palindrome.`);
}

// ******************************************3.Find the longest word in a string *******************************************************************************

function findLongestWord(str) {
  const words = str.split(" "); // Split the string by spaces
  let longestWord = "";
  console.log(words);

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const text = "Hello Good Morning, I am from Qweez Technology";
const longestWord = findLongestWord(text);
console.log(`The longest word in the string is: "${longestWord}"`);

// ******************************************4.Find the length of a string *******************************************************************************

function getStringLength(str) {
  return str.length;
}

const sampleText = "Hello Good Morning, I am from Qweez Technology";
const textLength = getStringLength(sampleText);
console.log(`The length of the string is: ${textLength}`);

// ******************************************5. Convert a string to uppercase and lowercase. *******************************************************************************

function convertCase(str) {
  const upperCase = str.toUpperCase();
  const lowerCase = str.toLowerCase();
  return { upperCase, lowerCase };
}
const text1 = "Hello Good Morning!";
const result = convertCase(text1);
console.log(`Original String : ${text1}`);
console.log(`Upper Case : ${result.upperCase}`);
console.log(`Lower Case : ${result.lowerCase}`);




