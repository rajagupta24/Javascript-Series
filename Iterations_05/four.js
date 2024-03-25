const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
};

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const myArr = [1, 2, 3, 4, 5];
for (const key in myArr) {
    console.log(myArr[key]);
}

const map = new Map();

map.set('IN', 'India');
map.set('USA', 'United States of America.');
map.set('Fr', 'France');
map.set('IN', 'India');

for (const i in map) {
    console.log(i);
}