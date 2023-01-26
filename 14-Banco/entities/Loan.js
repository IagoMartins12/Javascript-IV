const Installment = require("./Installment")

class Loan {
    static #interestRate = 1.05

    constructor(loanValue,installments){
        this.loanValue = loanValue
        this.installments = []
        for (let i = 1; i <= this.installments;i++){
            this.installments.push(new Installment(loanValue * Loan.#interestRate) / installments,1)
        }
        this.createdDate = new Date()
    }

    static get interestRate(){
        return Loan.#interestRate
    }

    static set interestRate(percentual){
        Loan.#interestRate = 1 + (percentual / 100)
    }


}

module.exports = Loan