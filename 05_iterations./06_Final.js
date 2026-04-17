// Reduce Method 

const array = [1,2,3,4]

const intial = 0 

const sum = array.reduce((accumulator,value)=> accumulator+value,5)

console.log(sum);


const myTotal = array.reduce( function (acc,currentval) { return acc+currentval },10 )
console.log(myTotal);


const shoppingCart = [
    {
        item :"js Course",
        price :2999
    },
    {
        item:'Python Course',
        price :1999
    },
    {
        item:"Data Science Course",
        price : 299
    }
]
 
// Recuce syntax = // Accumulator,item always // and give intial value by , 
let priceToPay = shoppingCart.reduce( (accumulator,xyz)=> accumulator+ xyz.price,0)

console.log(priceToPay);
