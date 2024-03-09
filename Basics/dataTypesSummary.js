// Javascript is a case-sensitive programming language.

// Primitive

// 7 types :- String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 101.5; //Remember there is no concept of float number in js so it considered as number only.

const isLoggedIn = true;
const outsideTemp = null;
let userEmail; //Default value is undefined.

const id = Symbol("123");
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 3454353463634n; //Exampe of bigint
console.log(typeof bigNumber);

// References(Non-primitive) :-

// Array, Objects, Functions

 //Examples of array
const heros = ["shaktiman", "naagraj", "doga"]; 

// Objects Examples
let myObj = {
    name: "Raja", 
    age : "21"
}

// Function Examples
const myFunction = function() {
    // console.log("Hello world.");
}

// console.log(typeof null)

/* Q. Is Javascript is static or dynamic language ? -> Do your Research
   Q. Read about 'null' value.
   Q. Read about 'NaN' value.
   https://262.ecma-international.org/5.1/#sec-11.4.3 -> Read the documentation
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heaps(Non-Primitive)

// Examples of Stack(Primitive)
let myYoutubeName = "Raja Gupta"

let anotherName = myYoutubeName
anotherName = "Chai aur Code"

console.log(myYoutubeName)
console.log(anotherName)

// Examples of Heaps(Non-Primitive)
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rajaggupta5@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)