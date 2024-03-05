const accountId = 144553
let accountEmail = "rajaggupta5@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// Examples of Single Line Comment
// accountId = 2;
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);

// Example of Multi Line Comment
/*
Prefer not to use var
because of issue in block scope and functional scope.
*/

accountEmail = "rajalockdown576@gmail.com";
accountPasword = "54321";
accountCity = "Kolkata"


//Better way to console multiple value
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);