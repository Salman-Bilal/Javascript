// IIFE -> which function execute immediatly and sometime there some problem form Global scope pollutions, So we use IIFE for reduce global scope pollution. 

// IIFE -> Imediately Invoked Function Expression

(function User() {
    // named IIFE 
    console.log("Salman")
})();

((name) => {
    // Unamed or Simple IIFE
    console.log(`${name}, where are you?`)
})("Bilal")

