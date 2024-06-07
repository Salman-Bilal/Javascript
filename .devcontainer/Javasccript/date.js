let myDate = new Date()
// console.log(myDate);   //typeof: myDate -> Object

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// let Date2 = new Date(2004, 11,28)
// let Date2 = new Date(2004, 11,28, 3, 15)
// let Date2 = new Date("2004, 12,28")
let Date2 = new Date("12, 28, 2004")
// console.log(Date2.toLocaleString());

let timestamp = Date.now()
// console.log(timestamp);
// console.log(Date2.getTime());
// console.log(Math.floor(timestamp/1000)); // to convert millisecond into second

let newDate = new Date()
// console.log(newDate.toDateString())
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
})