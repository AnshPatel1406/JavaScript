class User{
    constructor(email,password){
        this.email =  email
        this.password = password
    }

    get password(){ // name is same as property
        // return this.password.toUpperCase()
        return this._password.toUpperCase()
    } // get | getter wont work withouth a setter 

    set password(value){
        // this.password = value.toUpperCase()
        this._password = value // add _ to prevent race condition with constructor // that will overload call stack 
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
}

const ansh = new User("a@gmail.com",'abc')
console.log(ansh.password)
console.log(ansh.email)