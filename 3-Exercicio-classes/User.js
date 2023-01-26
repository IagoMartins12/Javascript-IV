class User {
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email,password){
        if (this.email != email || this.password != password){
            console.log ('Email ou senha incorreta!')
        } else {
            console.log ("Logado com sucesso!")
        }
    }
}

const Iago = new User("Iago martins", "martins@gmail.com", "Bella123456")

Iago.login('teste',123)
Iago.login("martins@gmail.com","Bella123456")