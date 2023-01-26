const Comment = require('./Comment')

class Post {
    constructor(author,namePost){
        this.author = author
        this.namePost = namePost
        this.coments = []
    }

    addComents(coments){
        this.coments.push(new Comment(coments))
    }
}

module.exports = Post