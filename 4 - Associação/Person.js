class Person {
    constructor(name, address) {
      this.name = name
      this.address = address
    }
}

//Para exportar essa classe, precisamos usar o module exports e depois puxar ela no outro arquivo
module.exports = Person