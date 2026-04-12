// Memory in JavaScript

// Stack(Primitive Types| all Simple Data Types) , Heap(non Primitive Types| Array,Object,Function) 

let myName = "Ansh"
let anothername = myName

anothername = "Patel"



// Heap

let user = {
    email:"usergmail.com",
    upi:"user@oksbi"
}

let userTwo = user

userTwo.email = "userTwo@gmail.com" // Changes Made to the Original user object  

console.log(user);
