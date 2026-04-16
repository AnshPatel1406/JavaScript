// Singelton Object (from Constructor) // No Multiple Instances 
//Object.create

//======================================

// Object Literals

//Using Symbol as Key

const mySym = Symbol("key1")

const jsUser = {
    [mySym]:"Symbol as Key",
    name:"Ansh",
    "Full Name":"Patel Ansh Rohitkumar",
    age:21,
    location:"Ahmedabad",
    email:"anshpatel@gmail.com",
    isLoggedIn:false,
    LastLoginDays : ["Monday","Saturday" ]
} 

// How to Access

console.log(jsUser.name) // 1 
console.log(jsUser["name"]) // 2 // BEST AND SAFEST WAY TO ACCESS OBJECT VALUES // Always do This

// 2 is good way , because it can also access the Keys that are Strings

console.log(jsUser["Full Name"])  // Method 1 is not Possible Here 


// Accessing using Symbol Key

console.log(jsUser.mySym); // undefined
console.log(jsUser[mySym]); // Right Way


// Manipulating the Object

jsUser.email="patelanshgu@gmail.com"

// Freezing Object // NO FURTHUR MANIPULATION 

// Object.freeze(jsUser) 


// Passing Functions as Value to an Object

jsUser.greeting = function () {
    console.log("Namesteee JI !! :)")
}

console.log(jsUser.greeting());


jsUser.greeting2 = function ()
{
    console.log(`Hello User ${this["Full Name"]} Welcummmmmmmm`)
}

console.log(jsUser.greeting2());

