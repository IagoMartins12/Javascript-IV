class Transfer {
    constructor (user,destinataryUser,value){
        this.user = user
        this.destinataryUser = destinataryUser
        this.value = value
        this.createdDate = new Date()
    }
}

module.exports = Transfer