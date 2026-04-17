const tinderUser = new Object() // Singelton Object
// const tinderUser = {}  // Non Singleton Object

console.log(tinderUser);

tinderUser.id = 19
tinderUser.name = "Ansh Patel"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"xyz@gmail.com",
    fullname:{
        firstname:"Ansh",
        lastname:"Patel"
    }
}

console.log(regularUser.fullname.firstname);

// Combining 2 Objects

const obj1 = {
    1:"A",2:"B"
}
const obj2 = {
    3:'a',4:'b'}

// const obj3 = {obj1,obj2} // Same Problem as in Arrays , Object Withing Object 

// const obj3 = Object.assign(obj1,obj2)
const obj3 = Object.assign({},obj1,obj2) // {} Suggest Due to Some Reasons , Good to DO
// {} = Target , obj1 and obj2 are source , Source Will Be Put into The Target
// if {} Not given Then Values from Obj2 Will Go to Obj1 Which is Slightly ODD

// Syntax : Object.assign(target,source)

const DiffrentMethod = {...obj1,...obj2}
console.log(DiffrentMethod);

console.log(obj3);


// If an Object has Multiple Objects
// Obj[1].key ==> to Access


// Display all the Keys of Objects

console.log(Object.keys(tinderUser)); // Returns an Array
console.log(Object.values(tinderUser)); // Returns an Array
console.log(Object.entries(tinderUser)); // Makes Array Withing Array of Keys and Values

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // To check if an Object has Certain Property



// Rename Key name , because we use it very frequently 
// Known as // Destructuring 
let object = {
    "abcdefghijklmnop" : "HHEHEEHE"
}

const {abcdefghijklmnop: renamed} = object

// console.log(abcdefghijklmnop);
console.log(renamed);





