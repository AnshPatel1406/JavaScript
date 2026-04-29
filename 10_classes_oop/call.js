function setUserName(username) {
    // complex DB calls
    this.username = username; // here this is for functon setUserName not of createuser
    console.log("this executed");
    
}

function createUser(username,email,password) {
    //setUserName(username) // wont work
    // setUserName.call(username) // wont work
    // setUserName(this,username) // wont work

    
    setUserName.call(this,username) // will work
    this.email = email
    this.password = password
    
}

const chai = new createUser("chai","chai@google.com","123")

console.log(chai); // wont display username 

