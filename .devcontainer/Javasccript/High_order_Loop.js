const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const TagLine = "I am a professional Programmer"
for (const words of TagLine) {
    if (words === " ") {
        continue
    }
    // console.log(words);
    
}

const map = new Map()
map.set( 1 , 'Salman')
map.set( 2 , 'Ali')
map.set( 3 , 'Faiz')
map.set( 4 , 'Ammar')
map.set( 1 , 'Salman')

for (const [key, value] of map) {
   // console.log(key, "->", value);
    
}

// =======================For in Loop======================================================

const country = {
    PK: "Pakistan",
    IN: 'India',
    FR: 'Frane',
    GR: 'Germany',
    Usa: 'United States of America'
}

for (const key in country) {
    //console.log(`${key} stands for ${country[key]}`);    
    }

const Programming = ['css','js', 'py', 'rb','swift']
for (const key in Programming) {
    //console.log(Programming[key]);
    
}

for (const key in map) {
   //console.log(map[key]);
}

// =================== For Each Loop ===============================

Programming.forEach( function (val){  //it's a call back funstion so call function has no name
 //   console.log(val);
    
})

Programming.forEach( (items) => {
    //console.log(items);
    
})

function printMe(items){
    console.log(items);
    
}

//Programming.forEach(printMe)

Programming.forEach( (items, index, arr) => {
   // console.log(items, index, arr);
    
})

const Language = [
    {
        LanguageName: "Javascript",
        FileName: "js"
    },
    {
        LanguageName: "Python",
        FileName: "py"
    },
    {
        LanguageName: "Ruby",
        FileName: "rb"
    }
]

Language.forEach( (items) => {
    console.log(items.LanguageName);
    
})