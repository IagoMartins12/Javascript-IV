const Account = require('./Account')
const Deposit = require('./Deposit')
const Loan = require('./Loan')
const Transfer = require('./Transfer')
const User = require('./User')

class App {
    static #userList = []

    static findUser(email){
        const user = this.#userList.find (user => user.email === email)
        return user ?? null
    }

    static createUser(name,email,password){
        const emailExists = App.findUser(email)
        if (!emailExists){
            this.#userList.push(new User(name,email,password))
        } else {
            console.log('Usuario ja cadastrado')
        }
    }

    static deposit(email,value){
        const user = App.findUser(email)
        if (user){
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    static transfer(userEmail,destinataryUserEmail,value){
        const user = App.findUser(userEmail)
        const destinataryUser = App.findUser(destinataryUserEmail)

        if (user){
            const transfer = new Transfer(user,destinataryUser,value)
            destinataryUser.account.addTransfer(transfer)
            user.account.addTransfer(transfer)
        }
    }

    static loan(email,value,portion){
        const user = App.findUser(email)

        if (user){
            const newLoan = new Loan(value, portion)
            user.account.addLoan(newLoan)
        }
    }

    static changeLoanFee(newPorcentage){
        Loan.interestRate = newPorcentage
    }

    static getUser(){
        console.log (App.#userList)
    }


}

module.exports = App