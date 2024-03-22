const user = {
    username: "Raja",
    website: "Youtube",
    
    welcomeMessage : function() {
        console.log(`${this.username}, welcome to the ${this.website}`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "San";
// user.website = "Chai aur Code";
// user.welcomeMessage();
// console.log(this);


// function chai() {
//     let username = "Raja";
//     console.log(this.username);   //-> undefined  //Note :- 'this' keyword is working on only objects not on functions.
// }

// chai();


// const chai = function() {
//     let username = "Raja";
//     console.log(this.username); //-> undefined
// }

// chai();

//++++++++++++++++++++++++++++++++++++++++ Arrow Function +++++++++++++++++++++++++++++++++++
// const chai = () => {
//     let usernmae = "Raja";
//     console.log(this.username); //-> undefined
// } 

// chai();

// // Type 1 -> Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Type 2 -> Implicit return
// const addTwo = (num1, num2) =>  num1 + num2; 
// ++++++++++++++ or ++++++++++++++++
// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2)  => ({username: "Raja"})

// console.log(addTwo(3, 5));



// const myArray = [2, 4, 6, 8, 10];
// myArray.forEach();

