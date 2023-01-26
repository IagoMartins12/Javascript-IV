const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")

class Account {
    #balance
    constructor(user){
        this.user = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance (){
        return this.#balance
    }

    addDeposit(deposit){
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    addLoan(loan){
        this.#balance += loan.value
        this.loans.push(loan)
    }

    addTransfer(transfer){
        if (transfer.destinataryUser.email === this.user.email){
            this.#balance += value
        } else if (transfer.user.email === this.user.email){
            this.#balance -= value
        }
        this.transfers.push(transfer)
    }
}

module.exports = Account