class Wallet {
    #amount
    #username
  
    constructor() {
      this.#amount = 100.99 * 100 // 10099
    }
  
    //Toda vez que formos ver o dinheiro, essa regra será aplicada a ele
    get amount() {
      return this.#amount / 100
    }
  
    //Toda vez que quisermos setar o usuario, essa regra será aplicada a ele
    set username(newUsername) {
      if (typeof newUsername === 'string') {
        this.#username = newUsername
      } else {
        console.log('username must be of type string')
      }
    }
  
    get username() {
      return this.#username
    }
}
  
const myWallet = new Wallet()
  
console.log(myWallet.amount)
  
myWallet.username = "Isaac"
console.log(myWallet.username)
  
myWallet.username += " Pontes"
console.log(myWallet.username)
  
myWallet.username = 52002
console.log(myWallet.username)