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



// ================ OPERATIONS ======================

let value = 19
let neg = -value
console.log(neg);

// + , - , * , **(power 2**3=8) , / , %

let str1 = "Ansh"
let str2 = "Patel"

let str3 = str1+str2

console.log(str3);


console.log("1"+2);
console.log(1+"2");

console.log("1" + 2 + 2);
console.log(1+2+"3")


let x = 1

console.log(++x);

console.log(true); // prints true
console.log(+true); // prints 1
console.log(+"")


let num1,num2,num3

num1 = num2 = num3 = 1 + 1

let gameCounter = 100
gameCounter++
console.log(gameCounter);

