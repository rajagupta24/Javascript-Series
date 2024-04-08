// -> reduce 

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce( function(acc, currVal) {
//     console.log(`acc: ${acc} and currVal:${currVal}`);
//     return acc + currVal;
// }, 0) //->Here 0 is an initial value of accumulator.


const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
// console.log(myTotal);


// Adding Total Cart Value 
const shoppingCart =  [
    {
       itemName: 'JS Course',
       price: 4999 
    },
    {
       itemName: 'Java Course',
       price: 3999 
    },
    {
       itemName: 'Python Course',
       price: 2000 
    },
    {
       itemName: 'Git Course',
       price: 499
    }
];

const PriceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(PriceToPay);