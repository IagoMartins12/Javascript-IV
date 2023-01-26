const Post = require("./Post")

class Author {
    constructor(name){
        this.name = name
        this.posts = []
    }

    createPosts(namePost){
        let newPost = new Post(this.name,namePost)
        this.posts.push(newPost)
        return newPost
    }
}

module.exports = Author