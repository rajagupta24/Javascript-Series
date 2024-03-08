// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


// Note:- The reason is than an equalitycheck(==) and comparison >, <, >=, <= work differently.
// Here Comparison convert null to a Number, treating it as 0.


// <!---------------------- Always try to avoid this kind of conversion.---------------------------->

// console.log(null > 0);  //false
// console.log(null == 0); //false
// console.log(null >= 0); //True

// console.log(undefined == 0); //false
// console.log(undefined >= 0); //false
// console.log(undefined <= 0); //false


// <!------------------------------------------End over here--------------------------------------->

//=== -> strict check
// console.log("2" === 2); //false