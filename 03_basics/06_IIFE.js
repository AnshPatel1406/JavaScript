// Immediatly Invoked Function Expressions (IIFE)

// Funnctions that are Invoked Immediatly When the System is Started , for ex , DataBase 

//Named IIFE
(function dataBase (){console.log("DB Connected")} )(); // <-- Semi Colon ; is Very Necessary OtherWise IIFE other Functions wont work

// (Function Declaration)(Fnction Execution)

// using arrow function with it 


//unnammed IIFE
( () => { console.log("DB Connected 2")} )();

// PAssing Argument to it 

( (name) => { console.log(`${name} DB Connected 3`)} )("Ansh"); // Same as Function


