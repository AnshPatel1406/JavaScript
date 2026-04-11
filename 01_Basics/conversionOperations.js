let score = "50" 

console.log(typeof score);
console.log(typeof(score));


let ValueInNumber = Number(score)
console.log("After Conversion");

console.log(typeof(ValueInNumber));


//Converting a string to Number that is not Exactly Number

let string = "abc123"

let xyz = Number(string)
console.log(typeof xyz)

console.log(xyz) // prints NaN => Not a Number

// This will Convert null to 0 when converted to Number
// Undefined to NaN
// Boolean to 1 or 0
// String to NaN


let isLogged = 1
console.log(typeof isLogged)
let hehe = Boolean(isLogged)
console.log(typeof hehe)
console.log(hehe)

// Boolean will convert Empty String to 0 and Any String to 1
