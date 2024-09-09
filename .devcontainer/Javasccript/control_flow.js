// ++++++++++++++++++ Conditional Operator++++++++++++
// <, >, <=, >=, !=, ===, !==, ==

// +++++++++++++++++++ If Statement +++++++++++++++++++++++++++++++

const UserLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

// if (UserLoggedIn && debitCard) {
//     console.log("Allow to Purchase course");
    
// }

// if (LoggedInFromGoogle || LoggedInFromEmail) {
//     console.log("User Log In");
    
// }

// ++++++++++++++++++ Switch Statement ++++++++++++++++++++
const month = 4
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;

    default:
        console.log("Not Match");
        break;
}
//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const useremail = "salman@tech.com"

if (useremail) {
    console.log(`Got user email ${useremail}`);
} else {
    console.log("Not get any value");
}

// Falsy Value 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy Value 
// "0", 'function', " ", [], {}, function(){}

const Emptyarray = []

if (Emptyarray.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty");
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nullish coallescing Operator (??): null undefined

let value;
value = null ?? 21  //these operator use in real time when we extract data from database or firebase and it return 2 value so if any value is null or undefined this operator handle all situation
// basically this operator check the safety check

// value = null ?? 10 ?? 20   -> 10
console.log(value);

// Terniary Opretor
// condition ? true : false

let Number = 150
Number >= 80 ? console.log("Greater than 80") : console.log("Less than 80");

