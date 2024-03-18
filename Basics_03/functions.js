// function checkMyNumber() {
//     console.log("R");
//     console.log("a");
//     console.log("j");
//     console.log("a");
// }

// checkMyNumber();\

// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// Another way to write a function
function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

console.log(add(5, 3));

function logInUser(username) {
    if(username === undefined) {
        console.log("Please enter a value.");
        return;
    }
    return  `${username} just logged in!`;
}

// console.log(logInUser("Riya")); //Output:-> Riya just logged in!
console.log(logInUser(""));

console.log(typeof ""); //string