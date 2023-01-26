class Account {
    //Declarando os valores que serão encapsulados
    #password
    #balance
  
    //Construindo um usuario
    constructor(user) {
      this.email = user.email
      this.#password = user.password
      this.#balance = 0
    }
  
    getBalance(email, password) {
      if (this.#authenticate(email, password)) {
        return this.#balance
      } else {
        return null
      }
    }
  
    //Abstração, fazendo um metodo complicado ser encapsulado para o usuario não ver
    #authenticate(email, password) {
      return this.email === email && this.#password === password
    }
}

//Criando um usuario
const user = {
    email: "user@email.com",
    password: "123456"
  }
  
const userAccount = new Account(user)
  
//Utilizando o metodo que consegue acessar o atributo encapsulado dentro da classe
console.log(userAccount.getBalance("user@email.com", "123456"))
console.log(userAccount.getBalance("user@email.com", "000000"))