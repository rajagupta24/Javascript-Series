// var  c = 300; ->Avoid using this because it can leads to confusion due to it scope.
let a = 100;
if(true) {
    let a = 10; 
    const b = 20;
    var c = 30;
    // console.log("Inner Value =  " + a);
    // console.log("Inner Value = ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// Example of nested function 
function one() {
    const username = "Raja";

    function two() {
        const website = 'youtube';
        console.log(username);
    }
    // console.log(website);
    two();
}

// one();


if(true) {
    const username = "Raja";
    if(username === "Raja") {
        const website = "Youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

console.log(addOne(5)); //-> Executing the function before initialization.

function addOne(num) {
    return num + 1;
}


// console.log(addTwo(5)); -> It will shown an error  i.e "cannot access before initialization."" 

const addTwo = function(num) {
    return num + 2;
}


