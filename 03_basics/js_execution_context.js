/*
    JavaScript Execution Context

    1) Global Execution Context

    {} -> Global EC -> this keyword

    2) Function Execution Context

    3) Eval Exection Context(optional)


    *) Exection Steps

    i) Global Execution Phase
        -> this -> Defines local scope

    ii) Memory Execution Phase
        -> Variables Set to underfined and Function set as definition  and function calls as undefined


    iii) Execution Phase 
        -> Gives Values that are given to Variables
        -> New Exection Context is Created When a Function is Called(New Variable Enviroment + Execution Thread)
        -> the steps 2 and 3 are repeated for each function
        -> When Function returns it goes to Global Execution Context
        -> The Local Function Execution  Context is automatically Deleted after it is exit
    
/*
    CALL STACK

    --> When Function is Called it goes to stack and Pops when execution is done
    --> so when fucntion withing function is called the inner function exits the call stack first and then the outer function 
    --> At bottom is always Global Executon Context
*/



