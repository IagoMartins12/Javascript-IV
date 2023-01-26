const Account = require("./Account")

class User {
    constructor(name,email,password){
        this.name  = name
        this.email = email
        this.password = password
        this.account = new Account(this)
    }
}

module.exports = User 