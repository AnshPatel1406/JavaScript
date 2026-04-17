const user = {
    username : " Ansh ",
    price : 999,
    welcomeMessage: function() { 
        console.log(`${this.username} Welcome to the  Website`);  // here this.username is necessary because only username is out of scope 
        // console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage() // Due to using this , it will change the username to sam in its context 

// console.log(this); // here Current Context is Empty 
// ****************
// function helu(){
//     let username = "Heluuu"
//     console.log(this.username); // undefined // this works in object not functions  
    
// }

// helu()


// Arrow Function 

const haha = () => {
    let username = " Ansh "
    console.log(this);   
}
haha()


// const addTwo = (num1,num2) => {return num1+num2}
const addTwo = (num1,num2) => (num1+num2) // IS VALID 
const addTwo0 = (num1,num2) => num1+num2 // IS VALID 
const addTwooo = (num1,num2) => {return num1+num2} // IS VALID 

// in () no need to write return keyword but in {} return keyword is necessary 

// using return is called as explicit return and withouth using return is called as implicit return 

// to return an object we need to put parenthesis ()

const addObject = (num1,num2) => ({username :"Ansh"}) // This wont work if we dont add () outside 

console.log(addTwo(10,20))
console.log(addObject);
