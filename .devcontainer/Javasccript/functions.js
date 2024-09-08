
function Addition(number1, number2){
    //   let result = number1 + number2
    //   return result      
        return number1 + number2
}

Addition(132, 213)

function user(username){
    if(username != undefined){
    return `${username} jusst logged in`
    }
    else
    {
        console.log("Please enter our Username");
        
    }
}

console.log(user("Salman"));
 //if we are not pass any value there shows undefined

 function calculateCartPrice(...num1){      // "..."operator use as rest operator or spread operator here it used as a Rest operator 
    return num1
 }

 console.log(calculateCartPrice(1212, 4000,300,5000))

 const Anyuser = {
    username: "Faiz",
    price: 2000
 }

 function handlingObject(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);    
 }

//  handlingObject(Anyuser)
handlingObject({
    username: "Ammar",
    price: 1200
})