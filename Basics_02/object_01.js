// singletion
// Object.create ->constructor method

const mySym = Symbol("Key1");
console.log(typeof mySym);

// objects literals
const JsUser = {
    name: "Raja", 
    "full name": "Raja Gupta",
    // mySym : "Key1", //-> This key pair shows output as a string.
    [mySym]: "Key1",
    age: 21, 
    location: "kolkata",
    email: "rajaggupta5@gmail.com",
    isLoggedIN: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email); // -> 1st way to access object
// console.log(JsUser["email"]); // ->2nd way to access object
console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym); //-> Output :- string
// console.log(JsUser[mySym]);

JsUser.email = "rajalockdown576@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "raja123@google.com";
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Javascript developer.");
}

JsUser.greetingTwo =  function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo()); 


