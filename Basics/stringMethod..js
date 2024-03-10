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

// 6. String.prototype.includes() -> The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
/*
const sentence = "I am a good boy.";
const word = "good";
console.log(`The word ${word} ${sentence.includes(word)? 'is' : 'is not'} in the sentences.`);
*/

// 7. String.prototype.indexOf() -> The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring.
// Syntax :- indexOf(searchString) or indexOf(searchString, position) 
/*
const para = "I think Ruth's dog is cuter than your dog.";
const searchTerm = "dog";
const indexOfFirst = para.indexOf(searchTerm);
console.log(`The index of the first ${searchTerm} is ${indexOfFirst}`);

console.log(`The index of the second ${searchTerm} is ${para.indexOf(searchTerm, indexOfFirst+1)}`); 
*/

// 8. String.prototype.lastIndexOf() -> The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. 
// Syntax :- indexOf(searchString) or indexOf(searchString, position)
/*
const para = "I think Ruth's dog is cuter than your dog.";
const searchTerm = 'dog';
console.log(`The last index of ${searchTerm} is ${para.lastIndexOf(searchTerm)}.`)
*/

// 9. String.prototype.repeat()-> The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
/*
const mood = 'Happy!';
console.log(`I feel${mood.repeat(5)}.`)
*/

//10. String.prototype.trim() -> The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
// Note:- To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd()
/*
const greeting = '    Hello World    ';
console.log(greeting);
console.log(greeting.trim());
console.log(greeting);
*/

// 11. String.prototype.toUpperCase -> The toUpperCase() method of String values returns this string converted to uppercase.
/*
const sentences = 'You can do it.';
console.log(sentences.toUpperCase());
*/

// 12. String.prototype.toLowerCase() -> The toLowerCase() method of String values returns this string converted to lower case.
/*
const sentences = "YOU CAN DO IT!";
console.log(sentences.toLowerCase());
*/