// array

// const myArr = [0, 1, 2, 3, 4, 5];
// const frontEnd = ['HTML', 'GIT', 'CSS', 'Javascript'];
const myArr2 = new Array(1, 3, 4, 6, 8);

// console.log(myArr[0]);
// console.log(myArr[2]);
// console.log(myArr.length);

//Array Methods
// console.log(myArr.concat(myArr2));
// myArr.push(6);
// myArr.pop();
// myArr.unshift(5);
// myArr.shift();
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));
// console.log(myArr.join()); // -> This method convert array into string.
// console.log(typeof myArr.join()); //string

// slice and splice
const myArr = [0, 1, 2, 3, 4, 5];
// console.log(typeof myArr);
console.log('Original 1 ', myArr);

const newValue = myArr.slice(2, 4);
console.log(newValue);
console.log('Original 2', myArr);

const newValue2 = myArr.splice(2, 4); //->This method affect the original array by removing that element from range.
console.log(newValue2);
console.log("Original 3 ", myArr)