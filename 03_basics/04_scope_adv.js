// Nested Scope

function one(){
    const username = "Ansh"
    function two(){
        const website = "Youtube"
        console.log(username);       
    }

    // console.log(website);
    two()
    
}

one()


if(true){
    const username = "Ansh"
    if (username === "Ansh")
    {
        const website = "youtube.com"
        console.log(username + " " + website);
        
    }
    // console.log(website);
    
}
// console.log(username);



// ===================********88888888888+++++++++++++++++++++++++


console.log(addOne(5)) // This is Valid  // Declaration Down and Calling UP

function addOne(num){
    return ++num
}



const addTwo = function(num) {
    return num + 2
}
addTwo(5) // If we Write this Upside like ^ , It Wont Work That way 

console.log(addTwo);


