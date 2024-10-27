const PromiseFirst = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("First Promise task completed");
        resolve()
    }, 1000);
})

PromiseFirst.then(() => {
    console.log("Successfully Compeleted");
})

const promiseSecond = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Second Promise Completed");
        resolve()         //Always call resolve in any case if you consume promise sperately or with the function 
    }, 1000);
}).then(() => {
    console.log("Task 2 consumed");
    
})

const promiseThird = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({Name:"Salman", ID:"F2022065156"})             //resolve always object value
        }else{
            reject("Error: Something went wrong")
        }
    }, 1000);
})

promiseThird.then((Myself) => {
    console.log(Myself);
    return Myself.Name
})
.then((myName) => {
    console.log(myName);
})
.catch((error) => {
    console.log(error);
    
})
.finally(() => console.log("Your Coding is Awesome"))


const fourthPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({userName:"Salman Bilal", email:"F2022065156@umt.edu.pk"})             //resolve always object value
        }else{
            reject("Error: Wrong Information")
        }
    }, 1000);
})

async function promiseFourConsumed() {
    try {
        const result = await fourthPromise
        return(result)
    } catch (error) {
        console.log(error);
        
    }
}
promiseFourConsumed();


// async function fetchingData() {
//      try {
//         const result = await fetch('https://jsonplaceholder.typicode.com/users')
//         const users = await result.json();
//         console.log(users);
//      } catch (error) {
//         console.log("E:", error);
        
//      }
// }

// fetchingData();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((result) => {
    return result.json();
})
.then((data) => console.log(data))
.catch((error) => console.log(error))