const score = 100
console.log(score);

const balance = new Number(100)

console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // ToFixed to Set Precesion upto 2,3,4... decimal places

const otherNum = 3.999

console.log(otherNum.toPrecision(3))



const zeros = 100000000000000

console.log(zeros.toLocaleString('en-IN')); // to give , in large digits 
// en-IN for indian standards 



// =================== MATHS ========================



//inbuilt in JS

console.log(Math); // its an Object 
// do it in browser consoleto list all functions of Math library 

// abs = absolute value = Negetive to Positive
// round = roundoff
// ceil celing 
// min 
// max
// random() give Value 0 to 1
// Math.random()*10 
// Math.random()+1 to avoid 0

// To Generate Numbers Between a R

const min = 10
const max = 20


console.log(Math.floor(Math.random() * ( max - min + 1))+ min );




