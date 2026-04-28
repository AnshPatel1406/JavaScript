let myName = "Ansh    "
let myLove = "Mum"

console.log(myName.length);
console.log(myName.trim().length);
// console.log(myName.truelength);


let myHeros = ["Thor", "Spider-Man"]

let heroPower = {
    thor : "Hammer",
    spiderman :"sling",
    getSpiderPower : function (){
        console.log(`Spidey Power is ${this.spiderman}`)
    }
}

Object.prototype.Ansh = function (){
    console.log("Ansh is present in all objects");
}

heroPower.Ansh() // every object gets the function we added 
myHeros.Ansh() // the list also get object function which we added // everything in the end is an object // thats why 



// inserting into array then checking if object gets it or not 

Array.prototype.heyAnsh = function(){
    console.log("Ansh says Hello")
}

myHeros.heyAnsh()
// heroPower.heyAnsh() // gives error 

// when changes made to objects , everyone gets it , when made at local level ,its just for its type 
// if given to a list then all list gets it not the other things 




// Inheritance 


const User = {
    name :"Ansh",
    mail :"ansh@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport  = {
    isAvailable : false
}

const TASupport = {
    makeAssignments : 'JS assignments',
    fullTime : true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User


// Morden syntax 

Object.setPrototypeOf(TeachingSupport,Teacher) // left inherits properties of right





// back to work // top thing

let anotherUsername = "LoveYouMum    "

String.prototype.trueLength = function(){
    console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
