// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getMilliseconds());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 0, 13);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 13, 5, 3);
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate);

let myTimesStamp = Date.now();
// console.log(myTimesStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
// console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `{newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})