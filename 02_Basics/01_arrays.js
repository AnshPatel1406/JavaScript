
const myArr = [0,1,2,3,4,5,6,7,8,9,true,"Ansh"] // Square Braces 
const myArr2 = new Array(1,2,3,4,5,6) // No Square Braces Here
console.log(myArr);
console.log(myArr2);


// Arrays in JS are Resizable
// Can be Mix of DataTypes
// Accessed by Indexing not by Value
// 0 Based Indexing
// Array Copy Operations Creates Shallow Copies  // Shallow = Same Reference Point // Deep = Diffrent Reference Point

// =============== Array Methods =======================

myArr.push("Heluu")
console.log(myArr);

myArr.pop() // pop last element
console.log(myArr);

myArr.unshift("Start") // Shifts all the Elements of Array // Not Optimized way 
console.log(myArr);

myArr.shift() // remove the First Element of The Array 
console.log(myArr)

// unshift means push but at Begining and Shift is pop from beggining

console.log(myArr.includes("Ansh")); // return true or false 

console.log(myArr.indexOf("Ansh")); // return index after searching 

// Convert an Arry to String

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);



// Slice and Splice

// SLice

console.log("A", myArr);
 
const Arr2 =  myArr.slice(1,3) // index 1 and 2 , 3 is exclusive

console.log(Arr2);

// Splice ==> used to include the last given parameter 

const Arr3 = myArr.splice(1,3) // Includes index 1,2 and 3 
console.log(Arr3);

// Here Splice will Remove all the Index that are given from the Original Array
console.log(myArr);


