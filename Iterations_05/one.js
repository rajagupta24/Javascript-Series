// for(let i = 0; i <= 10; i++) {
//     const elements = i;
//     if(i === 5) {
//         console.log("5 is best number.");
//     }
//     console.log(elements);
// }

// console.log(i); // -> Unable to access i due to it's block scope.

// for(let i = 1; i <= 10; i++) {
//     console.log(`Outer Value of : ${i}`);
//     for(let j = 1; j <= 10; j++) {
//         console.log(`Inner Value of : ${j}`);
//         console.log(i + ' * ' + j + ' = ' + (i*j));
//     }
// }


// let myArray = ['HTML', 'CSS', 'Javascript'];
// for(let index = 0; index < myArray.length; index++) {
//     const elements = myArray[index];
//     console.log(elements);
// }


// break and continue

// for(let index = 0; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`Detected 5.`);
//         break;
//     }
//     console.log(`Value of index is ${index}`);
// }

for(let index = 0; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected 5.`);
        continue;
    }
    console.log(`Value of index is ${index}`);
}