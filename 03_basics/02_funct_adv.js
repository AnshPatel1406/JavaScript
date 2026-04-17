// function calculateCartPrice (num1){
//     return num1
// }

// console.log(calculateCartPrice(2,3,4,5)); // only uses First Argument 


// To pass Undefined Values to a Function 
// ... = Rest Operator 

function calculateCartPrice (...num1){ // val1,val2,...num1 // can also be used with defined parameters and rest not defined
    return num1
}

console.log(calculateCartPrice(200,300,400,500))

const user = {
    username : "Ansh",
    price : 899
}

function handleObject(anyObject){
      console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
      
} 

// handleObject(user)

// passing Directly Object
handleObject(
    {
        username : "hehe",
        price : "199"
    }
)


const myNewArray = [200,400,600,700]

function returnSecondValue(getArray){
    return getArray[1]

}

console.log(returnSecondValue(myNewArray));


 