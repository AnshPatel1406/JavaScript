const desc = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(desc);

// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);


// factory function to define object 

// const myNewObj = Object.create(null)

//regular

const chai = {
    name :"Ginger Tea",
    price : 249,
    isAvailable : true,
    orderchai : function(){
        console.log("Chai nahi bani")
    }
}


console.log(Object.getOwnPropertyDescriptor(chai)); // undefined // it gives description of propery so we need to give it
console.log(Object.getOwnPropertyDescriptor(chai,'name')); // works 

Object.defineProperty(chai,'name',{
    writable:false,
    // enumerable : false
})


console.log(Object.getOwnPropertyDescriptor(chai,'name')); // works 

// Objects are not Iteratable
// for (const [key,value] of chai) {
//     console.log(`${key}:${value}`);
//     }

for (const [key,value] of Object.entries(chai)) {
    console.log(`${key}:${value}`) // also return whole function 
}

// we can write 
// if(typeof value !== ' function'){
// console.log(asfsdfg);
// }


// go to console in browser and research the functions and prototypes in the dropdown for and 
// reasearch them for indepth knowledge