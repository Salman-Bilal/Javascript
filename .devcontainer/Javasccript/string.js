let name = "Salman"
let likes = 320

//String Interpulation
// console.log(`${name} got ${likes} likes on his post`);

//Anohter way to declear string 
let myName = new String('Salman');

// console.log(myName.toLocaleUpperCase());
console.log(myName.charAt(3));
console.log(myName.indexOf('S'));

const newString = myName.substring(0, 3)
console.log(newString)

const newString2 = myName.slice(0, 2)
console.log(newString2);