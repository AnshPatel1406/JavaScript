// Primitive Types



// Call by Value
// 7  types : String,Number,Boolean,Null,undefined,Symbol,BigInt

const score = 100
const scoreeValue = 101.3
const isLoggedIn = false
const Temperature = null
let userEmail; // OR  let userEmail = undefined

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id == anotherID); // Not Same 

const bigNumber = BigInt(1234567898765432345678)
// OR
const biggNumber = 12345678765431234256532n


// ===============================================================

// Reference Types | Non Primitive Types


// Call by Reference
// Array,Objects,Functions

// Array
const heros = ["Iron Man","Bat Man","Spider Man"]
console.log(heros);


// Objects
let myObj = {
    name:"Ansh",
    Roll:"19",
    age:22

}
console.log(myObj);


//Functions

const myFunction = function(){
    console.log("Heluu")
}

console.log(typeof myFunction);
