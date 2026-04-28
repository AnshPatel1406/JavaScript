// every thins in javascript 
// array , string everyting is an object if we see in console in browser
// all have prototypes , some are usable some are not , inheritance is done but are not usable thats diffrent story 

function multiplyBy5(num){
    return num * 5
}

multiplyBy5.power = 1
console.log(multiplyBy5(5));
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype) // it is that method ka this // which is empty // {}

// here a function is behaving like an object 
// proves that everything in javascript is an object 



// Importance of "new" Keyword

function createUser (username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function (){
    this.score++  // jisne bulaya uska value increase karega // this maltab checks jis // jis ne bulaya 
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
    
}

const chai = new createUser("chai",25)
const tea = new createUser('tea',250)
chai.increment()
chai.printMe() // gives error withouth new keyword



/* 

Here's what happens behind the scenes when the new keyword is used:  

A new object is created: The new keyword initiates the creation of a new JavaScript object.  

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.  

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.  

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.),
the newly created object is returned.

*/