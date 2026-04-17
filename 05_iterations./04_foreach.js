const coding = ["JS","Python","Ruby","CPP","Java"]


// forEach takes Call back function as the parameter 

// call back function syntax // function (args) {code here}
// call back function does not have its name

// coding.forEach( function (item) {console.log(item);
// }  )


// Using Arrow Functions 

// coding.forEach( (item) => {console.log(item);
// } )



// By giving function reference // reference = function name // functuoname() is wrong // () are not included // we are not calling the function here
function printMe(item)
{
    console.log(item)
}
coding.forEach(printMe)

// forEach has 2 parameters by default // the index and the array itself

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})


// useful in array of strings and array of objects 
// ["","",""]
// [{},{},{},{}]

const myCoding = [
    {
        languageName : "JavaScript",
        languageFile :"js"  
    },
    {
        languageName : "Java",
        languageFile :"Java"  
    },
    {
        languageName : "C Plus Plus",
         languageFile :"CPP"  
    }
]

myCoding.forEach( (item)=> {console.log(item.languageName);
 })