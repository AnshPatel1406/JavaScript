// fetch('http://google.com').then().catch().finally()

const promiseOne = new Promise(function(resolvee,reject){
    // Do an async Task 
    // DB calls,cryptography,network
    setTimeout(function(){
        console.log("Async Task is Complete");
        resolvee() // runs promiseOne.then function 
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
}) // direct connection with resolve 

// OR
// No Variable is used so we can use direct .then here 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)}).then(function(){
        console.log("Async 2 Resolved");
    })


// how to pass value to then 
const PromiseThree = new Promise(function(resolve,reject){
        setTimeout(function(){
        // here  // as object
        resolve({username:"Ansh",email:"anshhmt2004@gmail.com"})    
    },1000)
})
// here user takes the object that is passed in promise 
PromiseThree.then(function(user){
        console.log(user)
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"Ansh",password:"12"})
        }
        else{
            reject('Error: Something Went Wrong')
        }
    },1000)
})

// const wrongWay = promiseFour.then((user)=>{
//     console.log("user");
//     return user.username;
// })
// console.log(wrongWay); // this wont work so chaining is used to resolve it 

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((returnedValue)=>{
    console.log(returnedValue)
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("The Promise is Either Solved or Rejected");
    
})


const promiseFive = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            let error = true;
            if(!error)
            {
                resolve({username:"Js",passowrd:"password"})
            }
            else{
                reject('Error: JS Went Wrong')
            }
        },1000)
})

// using async

async function consumePromiseFive(){
    try {
        const response =   await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
       
}

consumePromiseFive()


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() // parse to json // placed await because it take some time to get from link // without it no data displayed
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
    
}

getAllUsers()



// using same thing in catch thingy

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{return response.json()})
.then((data)=>{console.log(data)})
.catch((error)=>console.log(error))

// Here the Response from the url is displaying first then the other work is dont 
// understand why it happens like this 
// also understand async and await