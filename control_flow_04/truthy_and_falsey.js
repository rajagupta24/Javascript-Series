// const userEmail = [ ];
// if(userEmail) {
//     console.log("User Email was found.");
// }
// else {
//     console.log("User Email doesn't found.");
// }


//falsey Value  :-
// false, 0, -0, BigInt 0n, "", undefined, NaN,  null

//Truthy Value :-
// "0", 'false', " ", [], {}, function() {};

// console.log(typeof userEmail);  //-> object

// if(userEmail.length === 0) {
//     console.log("Array is empty.");
// }


// const emptyObj = {};
// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty.");
// }


// Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 20;
// val1 = undefined ?? 50 ?? 20;

// console.log(val1);

// Ternary Operator
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log('less than 80.') : console.log("more than 80.");