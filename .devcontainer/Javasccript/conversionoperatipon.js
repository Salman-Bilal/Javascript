let variable = 33

// string to number
//string -> NaN

let stringNumber = String(variable)
console.log(stringNumber);
console.log(typeof stringNumber);

// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "2") // 32
// console.log(+true); // 1
// console.log(+""); // 0

// console.log("2" > 1) // true

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

console.log("2" == 2);//true // because == and === are work differently. In == it convert datatype and in === do not change datatype.  
console.log("2" == 2);//false