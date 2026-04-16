let marvel_heros = ["Thor","Iron Man","Spiderman"]
const dc = ["Superman","Flash","Batman"]

// marvel_heros.push(dc) // Pushes Array into an Array

//  console.log(marvel_heros);
//  console.log(marvel_heros[3][1]);


// let all_heros = marvel_heros.concat(dc)

// console.log(all_heros);
 

// concat using Spread Function [...xyz,...abc]

 const all_new_heros = [... marvel_heros,...dc]
 console.log(all_new_heros);


// Convert Nested Arrays to Simple Arrays
const another_array = [ 1, 2, 3, [4,5,6],7,[6,7,[7,8]]]

const usable_array = another_array.flat(Infinity)

console.log(usable_array);


console.log(Array.isArray("Ansh")) // Checks if its an Array or Not
console.log(Array.from("Ansh"))  // Makes an Array from a String


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))