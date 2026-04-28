// Object Literal
// const user = {
//     username :"Ansh",
//     loginCount : 10,
//     signedIn : true,
//     getUserDetails: function (){
//         console.log("Got User Details from Database");
//         // console.log(`Username:${this.username}`);
//         console.log(this); // prints Current Instance object 
                
//     },

// }

// console.log(user.getUserDetails())
// console.log(this); // {} // because in globbal context this is nothing 
// if we do this in console in browser we get window object 


// Constructor Function 

// const promiseOne = new Promise() // constructor function // new  creates new context
// withouth disturbing existing contexts

function user(username,loginCount,isLoggedIn) {
    // this.username = varuble // username = passed parameter 
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this 
}

let userOne = user("Ansh",12,true)
let userTwo = user("Patel","6",false) // overWrites userOne Values
console.log(userOne) // prints userTwo overwritten values

// to Overcome This Problem we use new keyword

userOne = new user("Ansh",12,true)
userTwo = new user("Patel","6",false) 
console.log(userOne) 
console.log(userTwo) 


// when we use new keyword an empty object is created which is called as instance 
// a constructor function is called when we use new keyword
// and the aruments are injected to the instance variabls when the function is called












