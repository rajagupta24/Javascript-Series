// Constructor Object -> Singletion
// const tinderUser = new Object();

const tinderUser = {};
tinderUser.Id = "123abc";
tinderUser.name = "Raja";
tinderUser.age = 21;
// console.log(tinderUser);

const anotherUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname:  {
            fistname: "Raja",
            lastname: "Gupta"
        }
    }
};

// console.log(anotherUser.fullname.userfullname.fistname);

const obj1 = {1 : "a", 2 : 'b'};
const obj2 = {3 : "c", 4 : "d"};
const obj4 = {5 : "e", 5 : "f"};
// const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);

// const obj3 = {...obj1, ...obj2, ...obj4}; //->Anther way to assign a sub objects into one objects.
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "rg@google.com"
    },
    {
        id: 1,
        email: "bg@google.com"
    },
    {
        id: 1,
        email: "rcc@google.com"
    },
    {
        id: 1,
        email: "aj@google.com"
    }
];

// console.log(users[1].email); // -> bg@google.com
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name')); //-> true