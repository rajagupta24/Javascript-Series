const coding = ['js', 'java', 'python', 'c++', 'c'];

// ForEach Example with Function
// coding.forEach(function (val) {
//     console.log(val);
// });

// ForEach Example with arrow function
// coding.forEach((val) => {
//     console.log(val);
// }) 

// function printMe(item) {
//     console.log(item);
// }

// -> Here we have given an reference of function not execution
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })



const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: 'js'
    },
    {
        languageName: "Java",
        languageFileName: 'java'
    },
    {
        languageName: "Python",
        languageFileName: 'py'
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileName)
});