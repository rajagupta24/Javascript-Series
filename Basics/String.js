let myName = "Raja";
let repoCount = 5;

let finalValue = myName + " " + repoCount; //Old way to do string Concatenation
console.log(finalValue)

// String Interpolation(new way)
console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`) //latest way 

// Another way to declare a string
const gameName = new String("Raja-gupta-24")
// console.log(gameName)  //[String: 'Rajagupta']
// console.log(typeof gameName)  //object

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));
console.log(gameName.substring(0, 4)); //Raja
console.log(gameName.slice(-6, 4)); //a

const newString = "   Raja   "
console.log(newString)
console.log(newString.trim())

const url = "https://www.rajagupta.com/raja%20gupta";
console.log(url.replace("%20", "-"));

console.log(url.includes('sundar'))

console.log(gameName.split("-")) //Convert into an array