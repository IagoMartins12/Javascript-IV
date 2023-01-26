class Property {
    constructor(area, price) {
      this.area = area
      this.price = price
    }
  
    getPricePerSquareMeter() {
      return this.price / this.area
    }
  }
  
  
class Apartment extends Property {
    constructor(number, area, price) {
        //Quando precisamos adicionar um atributo a mais em uma classe que possui herança, precisamos usar
        //o metodo construtor 'super'. Ele irá pegar os atributos do construtor pai automaticamente
        super(area, price)
        this.number = number
    }
  
    getFloor() {
      return this.number.slice(0, -2)
    }
  }
  
const apt = new Apartment("201", 100, 160000)
  
console.log(apt)
console.log(apt.getFloor())