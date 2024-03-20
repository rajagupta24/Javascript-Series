// function checkMyNumber() {
//     console.log("R");
//     console.log("a");
//     console.log("j");
//     console.log("a");
// }

// checkMyNumber();

// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// Another way to write a function
function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

// console.log(add(5, 3));

function logInUser(username) {
    if(username === undefined) {
        console.log("Please enter a value.");
        return;
    }
    return  `${username} just logged in!`;
}

// function checkLoginUser(username) {
//     if(!username) {
//         console.log("Please enter your username!");
//         return;
//     }
//     return `${username} just logged in!`;
// }
// console.log(checkLoginUser());

// console.log(logInUser("Riya")); //Output:-> Riya just logged in!
// console.log(logInUser(""));

// console.log(typeof ""); //string

// Example of rest & spread operator
function calculateCartPrice(num1, num2, ...num3) {
    return num3;
}

// console.log(calculateCartPrice(200, 400, 600, 2000));


// Created an object
const user =  {
    username: "hitesh",
    price: 199
};

function handleObject(anyObject)  {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);  -> Here we call the object after creation.

// -> Here we passing the value of an object directly.
// handleObject({ 
//     username : "Raja",
//     price : 499
// });

const newArray = [200, 400, 600, 800, 1000];

function getSecondValue(getArray) {
    return getArray[1];
}

// console.log(getSecondValue(newArray));
// console.log(getSecondValue([200, 400, 600, 800, 1000]));