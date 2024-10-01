const domain = ["js", "python", "HTML", "css", "ruby", "swift", "flask", "Django"]

const name = domain.forEach( (val) => { //foreach loop dose not retrn atimatically any value
    //console.log(val);
    
} )

//console.log(name);
// ============================= Fliter ==================================

const num = [1,2,3,4,5,6]

const newnm = num.filter( (no) => {return no > 2} )     // filter reterns automatically values
//console.log(newnm);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNum = myNum.map( (num) => {return num + 10})

const newNum = myNum.map( (num) => num * 4).map( (num) => num + 1).filter( (num) => num >=10)

//console.log(newNum);

// =================================== Reduce ====================================

const numbers = [11, 21, 31, 41, 51]

// const total = numbers.reduce( function(accumulator, currentValue) {
//     return accumulator + currentValue
// }, 0)

const total = numbers.reduce( (acc, currVal) => acc + currVal , 0)
//console.log(total);

const fruits = [
    {
        name: "Mango",
        price: 299
    },
    {
        name: "Dragon Fruit",
        price: 2999
    },
    {
        name: "Peach",
        price: 499
    },
    {
        name: "Avacado",
        price: 5999
    },
]

const price = fruits.reduce( (acc, item) => acc + item.price , 0)

console.log(`Total Bill: ${price}`);
