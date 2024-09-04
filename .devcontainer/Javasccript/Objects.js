//Object Literals

const mysymb = Symbol("Key") 
const User={
    name: "salman",
    age: "20",
    [mysymb]: "mykey", //my symbol is also access by []
    mail: "salman@gmail.com" 
}

// Access method

// console.log(User.name);
// console.log(User["mail"])

User.mail = "bilal@gmail.com"
// Object.freeze(User) //->freeze() is used to make constant object or after not anyone change the value of objects

User.greetings = function()
{
    console.log(`Asalaam O Alaikum, ${this.name}`)
}

// User.greetings()

// Singleton Objects

const Studentprotal = new Object()

Studentprotal.id = "F202234512"
Studentprotal.name = "Ahmad"
Studentprotal.email = "F202234512@gmail.com"

// Object with nested objects

const FBUser = {
    Id: "123432",
    Fullname:{
        Userfullname:{
            firstname: "Ahmad",
            lastname: "Imran" 
        }
    }
}

// console.log(FBUser.Fullname.Userfullname.firstname);

const obj1 ={1: "ab", 2: "cd"}
const obj2={3: "ra", 4: "fg"}

// const obj3 = Object.assign({}, obj1, obj2) //assigning object

const obj3 ={...obj1,...obj2} //spread method
// console.log(obj3);

const User1 = [
    {
        id: 123,
        email: "sa@gmail.com"
    },
    {
        id: 123,
        email: "sa@gmail.com"
    },
    {
        id: 123,
        email: "sa@gmail.com"
    }
]

User1[1].id;

console.log(Object.keys(Studentprotal));
console.log(Object.values(Studentprotal))
console.log(Object.entries(Studentprotal));

console.log(Studentprotal.hasOwnProperty('name'))