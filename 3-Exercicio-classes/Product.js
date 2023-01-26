class Product {
    constructor (name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity){
        this.inStock += quantity
    }

    calculateDiscount(percentual){
        let percent =  Number(percentual) / 100
        let desconto = this.price * percent
        this.price = this.price + desconto
    }
}

const Celular = new Product("Iphone 8s", "Um celular pica", 1500)
Celular.addToStock(20)
Celular.calculateDiscount(30)
console.log (Celular)