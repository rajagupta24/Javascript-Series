//for of

//["", "", "", ""] ->String

//[{}, {}, {}, {}] -> Object

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello World!";
for (const greet of greeting) {
    if(greet == ' ') {
        break;
    }
    // console.log("Each char is " + greet);
}

//Maps
const map = new Map();

map.set('IN', 'India');
map.set('USA', 'United States of America.');
map.set('Fr', 'France');
map.set('IN', 'India'); //->It will not store duplicate value.

// console.log(map);

//De-structure of array
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObject = {
    game1: 'NFS',
    game2: 'SpiderMan'
};

//-> Here object is not iterable in case for of loop.
// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);     
// }


