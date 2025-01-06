// 1.Create an empty array
let arr = [];

// 2. add three elements to the end of the array.
arr.push(1,2,3);
console.log(arr);

// 3. Remove the two last element 

arr.pop();
console.log(arr);

// 4. Add two element to beginning of the array
arr.unshift(4,5);
console.log(arr);

// 5. Remove the first element of the array
arr.shift();
console.log(arr);

// 6. Create new array as object and merge it with first array
let arr2 = [6,7,8];
let arr3 = arr.concat(arr2);

// 7. Print the final array and its length.
console.log(arr3);
console.log(arr3.length);

// 8. create a palindrome by using array
function isPalindrome(array) {
    return array.join('') === array.reverse().join('');
}

// Example usage
console.log(isPalindrome([1, 6, 'abc', 6, 1])); // Output: true
console.log(isPalindrome([1, 2, 3, 4]));        // Output: false

//9. Add Value at even indices
  // i/p:[1,5,7,8,23,8,6,2,9,12]

  function sumEvenIndices(array1){
    let sum = 0;
    for(i = 0; i < array1.length; i += 2){
        sum += array1[i];
    }
    return sum;
  }

  const inputArray = [1,5,7,8,23,8,6,2,9,12];
  console.log(sumEvenIndices(inputArray));
  