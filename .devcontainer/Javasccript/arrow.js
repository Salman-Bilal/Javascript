const user ={
    username: "Salman",
    Rollno: 123,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to program`);
        console.log(this);   
    }
    
}


// user.welcomeMessage()
// user.username="Bilal"
// user.welcomeMessage()

function empty()
{
    console.log(this)
}

empty()



// +++++++++++Arrow Function++++++++++++++++++++++++++++++++

// const not = (num1, num2) => {
//      return num1+num2      Explicit Return
// }

// const not = (num1, num2) =>  num1 + num2   Implicit Return

// const not = () =>  (num1 + num2)

const not = () => console.log({username: "Salman Bilal" })

not()