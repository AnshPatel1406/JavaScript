// ES6

class User{
    constructor(username,email,pass){
        this.username = username
        this.email = email
        this.pass = pass
    }

    encryptPassword(){
        return `${this.pass}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}

const chai = new User("Ansh","ansh@google.com","Patel")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());



// Behind the Scene

function Userr(username,email,password)
{
     this.username = username
     this.email = email
     this.password = password
}

Userr.prototype.encryptPassword = function(){
    // same functions and all 
}

const tea = new Userr("ansh","ansh@gmail.com",'12345')


// this is what is done behind the scene in javascript
// but in newer versions it gave class keyword functionality to do that simple as we did 