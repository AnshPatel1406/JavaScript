function sayMyName() {
    console.log("A")
    console.log("n")
    console.log("s")
    console.log("h")
}

// sayMyName()


// function addTwoNumbers(num1,num2) {
//     console.log(num1+num2)

// }

// // addTwoNumbers(4,"a")
// // addTwoNumbers(3,4.5)
// const result = addTwoNumbers(3,null)

// console.log("Result:",result);
// Will not Work Cause Need to Return 

function addTwoNumbers(num1,num2) {
    let result = num1+num2
    return result  // Keep return always at last of function
}

// addTwoNumbers(4,"a")
// addTwoNumbers(3,4.5)
const result = addTwoNumbers(3,null)

console.log("Result:",result);



function loginUserMessage(username){
//default parameters can also be used   username="xyz"
    if(username === undefined) // also can use if(!username) // undefined is taken as false so ! is given // if (!undefined) also works 
    {
        console.log("Please Enter a username:");
        return 
    }


    return `${username} Just Logged IN`
}

// console.log(loginUserMessage("anshpatel")) // ansh logged in 
console.log(loginUserMessage()) // undefined logged in
console.log(loginUserMessage("")) // logged in 



