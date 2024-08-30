const mysymb = Symbol("Key") 
const User={
    name: "salman",
    age: "20",
    [mysymb]: "mykey", //my symbol is also access by []
    mail: "salman@gmail.com" 
}

// Access method

console.log(User.name);
console.log(User["mail"])

User.mail = "bilal@gmail.com"
// Object.freeze(User) //->freeze() is used to make constant object or after not anyone change the value of objects

User.greetings = function()
{
    console.log(`Asalaam O Alaikum, ${this.name}`)
}

User.greetings()