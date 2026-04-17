// const userEmail = "a@ansh.com" // ASSUMED AS TRUE
const userEmail = ""           // Assumed as FALSE

if(userEmail)
{
    console.log("Got User Email");    
}
else {
    console.log("User Dont Have Email")
}

// falsy values 

/*
    false, 0 , -0 , BigInt 0n , "" , null , undefined , NaN
*/

// truthy values 

// "0" , 'false' , " " , [] , {} , function(){} , 


const array = []

if (array.length === 0)
{
    console.log("Areyy array is Empty!!");
    
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) // Object.keys(obj) return an Array so we have used array function with it 
{
    console.log("Object is Empty");    
}

/*
    false == 0 // TRUE
    false == '' // TRUE
    0 == '' // TRUE
*/



// Nullish Coalescing Operator (??) : null undefined

// USED FOR null and undefined

let val1;

val1 = 5 ?? 10

val1 = null ?? 10 // assigns 10
val1 = undefined ?? 7 // assigns 7
val1 = null ?? undefined?? 20

console.log(val1);


// Ternary Operator 

// has only ? but Nullish thingy has ??

5>10 ? console.log("True") : console.log("False");
