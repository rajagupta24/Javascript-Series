// if
// let userLoggedIn = true;

// if(userLoggedIn) {
//     console.log("Login Successfully.");
// }

// > < >= <= == === != !==  // -> These are used for comparision.

// let temperature = 50;
// if(temperature ===  41) {
//    console.log("Less than 40"); 
// } else {
//     console.log("Temperature is greater than 40.");
// }


// const score = 200;

// if(score >= 200) {
//     let power = 'fly';
//     console.log(`Userpower : ${power}`);
// }

// console.log(`Userpower : ${power}`); //-> It will show an error due to its scope as it does not able to access power.

const userLoggedIn =  true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;
if(userLoggedIn && debitCard) {
    console.log("Allow to buy a course.");
}
else if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("You are still allowed to buy a course.");
}
else {
    console.log("Not allow to buy a course");
}