/*A herança é uma forma de fazer com que uma classe herde os atributos e metodos de outra.
Superclass(ou classe mãe): É a classe que é herdade
Subclass(Classe filha): É a classe que irá herdar os atributos/metodos da classe mae

Uma classe filha irá possuir todos os atributos e metodos da classe mae, mas tambem ira possuir os seus
proprios. 
Para fazer com que uma classe herde as caracteristicas de outra, usamos o extend: */

class Property {
    constructor(area, price) {
      this.area = area
      this.price = price
    }
} 
class House extends Property { }
  
/*construtor super: Quando precisamos adicionar atributos a mais em uma classe que possui herança,precisamos 
usar o metodo construtor 'super'. Ele irá pegar os atributos do construtor pai automaticamente, assim 
a gente nao precisa escrever nomavamente*/


class Property {
    constructor(area, price) {
      this.area = area
      this.price = price
    }
} 

class House extends Property { 
    constructor(number, area,price){
        super(area,price)
        this.number = number
    }
}
