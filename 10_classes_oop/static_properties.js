class User{
    constructor(username)
    {
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }

    static createId(){
        return '123'
    }
}

const Ansh = new User("Ansh")
// console.log(Ansh.createId()); // not accessable

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const Shikshak = new Teacher("Bhide","bhide@gmail.com")

console.log(Shikshak.logMe());
console.log(Shikshak.createId()) // not accessable

// static is inaccessable to everyone , either parent class or child