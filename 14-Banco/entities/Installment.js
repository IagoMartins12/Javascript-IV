class Installment {
    constructor(portionValue, portionNumber){
        this.portionValue = portionValue
        this.portionNumber = portionNumber
        this.status = 'pending'
    }
}

module.exports = Installment