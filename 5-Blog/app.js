//Faça uma simulação de um blog, onde terá 3 classes: Comment, Post e Author. Um author pode ter varios posts
//E um post pode ter varios comentarios

const Author = require('./Author')

const iagoAutor = new Author ('Iago martins')
const post = iagoAutor.createPosts("Assistindo anime")
post.addComents("Boku no hero mt foda")

const post2 = iagoAutor.createPosts("Estudando")
post2.addComents("POO é dhr")
post2.addComents("Vontade de aprender REACT")

const sophiaAutora = new Author("Sophia")
const post3 = sophiaAutora.createPosts("Ir pra festas")
post3.addComents("So sabe ir pra festas")

console.log(iagoAutor)
console.log(sophiaAutora) 