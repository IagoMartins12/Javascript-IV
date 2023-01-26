class Address {
    constructor(street, number, neighborhood, city, state) {
      this.street = street
      this.number = number
      this.neighborhood = neighborhood
      this.city = city
      this.state = state
    }
  
    fullAddress() {
      return `Rua ${this.street}, nº ${this.number}. ${this.neighborhood}, ${this.city}/${this.state}`
    }
}
//Para exportar essa classe, precisamos usar o module exports e depois puxar ela no outro arquivo
module.exports = Address