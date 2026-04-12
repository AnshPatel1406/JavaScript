// Concate String

let name = "Ansh"
name = name +" Patel"

console.log(name);


console.log(`Hello My name is ${name} `);

const gameName = new String('Super Mario') // Making String Object 

console.log(name[2]); // slicing of String

console.log(gameName.__proto__);
console.log(gameName.length); // Other Functions also liek toUpper,toLower,chatAt,indexOf etc...


// Slicing of String

let Sliced = gameName.substring(0,4) // 4 is Exclusive so 0,1,2 and 3 only 
console.log(Sliced);
console.log(gameName);


const anotherString = gameName.slice(-8,4)
console.log(anotherString);


let str = "        Ansh Patel      "

const newStringOne = str.trim()
console.log(newStringOne);


let url = "https://avadh%20hotel.com" // %20 for space otherwise URL is Cutted at Space

url = url.replace("%20","-")

console.log(url);


console.log(url.includes('avadh')) // To Check if Something is Present in String or not

let sentence = "Hello This is A simple Sentence for String Splliter"

console.log(sentence.split(" ")); // (Spliiter,Limit)




