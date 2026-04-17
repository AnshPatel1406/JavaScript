// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
let x = 0
for (let i =0; i<=10; i++)
{
    x = i
    // console.log(i);
    
}
// console.log(x); // Increment is Dont After the Block is Executed and then Condition is Checked


// for (let i=0; i<6; i++)
// {
//     for(let j=0; j<=10; j++)
//     {
//         console.log(`${i} x ${j} = ${i*j}`);
        
//     }
// }


// let myArray = ["Flash","BatMan","Superman"]

// for (let index = 0;index <= myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
//     // also gives undefined due to <= , not a problem if only < is used
// }


// END LOOP ON A SPECIFIC POINT

// BREAK AND CONTINUE

// Break => Exits Loop
// Continue => Skip Current Iteration

for (let index = 0; index <= 20; index++) {
    if(index ===6)
        break
    console.log(`Value of i is ${index}`);
}



