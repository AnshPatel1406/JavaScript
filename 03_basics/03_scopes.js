// let a = 10
// const b = 20
// var c = 30 

// {} = Scope

// var c = 300

let a =300
if(true)
{
    let a = 10
    const b = 20
    var c = 30 

    console.log("Inner:",a);
    

}

// console.log(a); // will not able to access
// console.log(b); // will not able to access
console.log(c); // will be Accessed

// var Has Gloobal Scope 
// so not good in large projects , but usefull for defining a specific value to a variable

// c= 30 is default var , whethere if we write var or not

console.log(a);



