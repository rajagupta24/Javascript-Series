// var  c = 300; ->Avoid using this because it can leads to confusion due to it scope.
let a = 100;
if(true) {
    let a = 10; 
    const b = 20;
    var c = 30;
    console.log("Inner Value =  " + a);
    // console.log("Inner Value = ", a);
}

console.log(a);
// console.log(b);
// console.log(c);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}