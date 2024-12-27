//1.Count vowels in a string eg:ajhdjeibdjbdovhxshujhswiqapruue

function countVowels(str) {
  let count = 0;
  for (const i of str) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++;
    }
  }
  console.log(`Vowels Count : ${count}`);
}
countVowels("ajhdjeibdjbdovhxshujhswiqapruue");

// 2. Replace all occurrences of string.
//    [i/p:alaphant , o/p:'elephant']
const word = "alaphant";
console.log(word.replace(/ala/g,'ele'));

// 3. Count the number of words.
//    eg: Hello Good Morning, I am from Qweez Technology

function countWords(string){
    let count = 0;
    let finalString = string.split(' ');
    //console.log(finalString);
    
    for (const element of finalString) {
        count++;
    }
    console.log(`Word Count : ${count}`);
}
countWords("Hello Good Morning, I am from Qweez Technology");

// 4. Remove whitespace from a string
const whiteSpaces = "      Happy New Year         ";
console.log("With White Spaces :",whiteSpaces);

console.log(`without white spaces : ${whiteSpaces.trim()}`);
console.log("Starting White Spaces Removed : ",whiteSpaces.trimStart());
console.log("Ending White Spaces Removed : ",whiteSpaces.trimEnd());

//5. Extract initials from a string.
//   eg: Qweez Technology
//   o/p: QT
function getInitials(str) {
    let initials = '';
    for (const word of str.split(' ')) {
        initials += word[0].toUpperCase();
    }
    return initials;
}

console.log(`Initials: ${getInitials("Qweez Technology")}`);





