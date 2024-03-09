//1. Array.prototype.at() -> This function return the value of the index.
/*  const array1 = [5, 12, 15, 30, 40, 60];
    let index = 2;
    console.log(`An index of ${index} returns ${array1.at(index)}`);
*/

// 2. String.prototype.charAt() -> This method return the character value of the given index.
/* 
const sentences = "Let's learn how to code";
let index; //By default undefined is converted to 0.
console.log(`The character at index ${index} is ${sentences.charAt(index)}`)
*/

// 3. String.prototype.charCodeAt() -> This method return the assci value of the character.
/*
const sentences = 'The quick brown fox jumps over the lazy dog.';
const index = 2;
console.log(
    `Character code ${sentences.charCodeAt(index)} is equal to ${sentences.charAt(index)}`
)
*/

// 4. Array.prototype.concat() -> This method concat the two values into one value.
/*
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = arr1.concat(arr2);
console.log(arr3);
*/

// 5. String.prototype.endsWith() -> This method check where the particular string is endsWith 'searchString' or not. If yes then it return true otherwise false.
// endsWith(searchString)
// endsWith(searchString, endPosition)
// Note :- Here 'endPosition' mean  at which searchString is expected to be found (the index of searchString's last character plus 1). Defaults to str.length.
/*
const str1 = 'Cats are the best!';
console.log(str1.endsWith("!")); //true
console.log(str1.endsWith("!", 18)); //true
console.log(str1.endsWith("!", 10)); //false
*/