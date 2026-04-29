class User {
    constructor(user,pass){
        this.user = user
        this.pass = pass
    }

    logMe(){
        console.log(`Username is:${this.user}`);
        console.log(`Password is:${this.pass}`);
         
        
    }
}

class Teacher extends User{
    constructor(user,pass,email){
        super(user) // takes "this" behind the scene // function.call(this,parameter) // <-- not needed
        this.email = email
    }

    addCourse(){
        console.log("New Course Was Added by Teacher By "+ this.user);
        
    }
}

const chai = new Teacher ("chai","chai@teacher.com","123")

chai.addCourse()

const masalaChai = new User("Tea","Password")

// masalaChai.addCourse() // No Access
masalaChai.logMe() // allowed 

// parent cannot access child // child can access parent 


console.log(chai instanceof Teacher)
console.log(masalaChai instanceof User)