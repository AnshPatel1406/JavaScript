// for of LOOP

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// for (const element of object) {
    
// }

for (const num of arr) {
    console.log(num);
    
}
// Print String Characters One By One

const greetings = "Hellowo"

for(let greet of greetings)
{
    console.log(greet);   
}

// MAPS - DataTypes - Unique values

const map = new Map()

// Holds Key Value Pairs // Holds Information of Order the values are inserted

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('IN',"India") // Will not Duplicate it as it Has Unique Values

console.log(map);


for (const [key,balue] of map) {
    console.log(key, ':-',balue);
}

const myObj = {
    "game1" : "NFS",
    'game2' : 'Spiderman'
}

// OBJECTS ARE NOT ITERABLES LIKE MAPS 
/*
for (const element of myObj) {
    console.log(element);
    
}
*/


// FOR IN Loop

for (const key in myObj) {
    // console.log(key);
    
    console.log(`${key}'s value is ${myObj[key]}`);   
}

const programing = ["JS","ruby","CPP","Python"]

for(const xyz in programing)
{
    console.log(xyz); // for in will get keys
    
}

for(const xyz of programing)
{
    console.log(xyz); // for of will get values
    
}

// to get values in for in loop we use this...

for(const [xyz,yz] in programing)
{
    console.log(xyz,programing[xyz])
}



// FOR IN :- for Objects 
// FOR OF :- for Arrays

