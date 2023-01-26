//O polimorfismo é um dos pilares do POO. nele diz que um objeto pode assumir diversas formas. 
//Por exemplo, classes que são filhas de uma super classe, podem ter seus metodos(que é originario da super classe) alterados conforme a necessidade da subclasse.

class Vehicle {
    move() {
      console.log("O veículo está se movendo.")
    }
}
  
class Car extends Vehicle {
    move() {
      console.log("O carro está se movendo.")
    }
}
  
class Ship extends Vehicle {
    move() {
      console.log("O navio está navegando.")
    }
}
  
class Aircraft extends Vehicle {
    move(speed) {
      console.log(`A aeronave está voando a ${speed} km/h.`)
    }
}
  
const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()
  
delorean.move()
blackPearl.move()
epoch.move(80)


//Outra maneira de fazer isso: 
function start(vehicle) {
    console.log("Iniciando um veículo...")
    vehicle.move() // pode ser qualquer subclass de Vehicle
}
  
start(delorean)
start(blackPearl)
start(epoch)