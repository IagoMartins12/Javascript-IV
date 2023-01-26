const App = require('./entities/App.js')

App.createUser("Iago", "Iago@martins", '123456')
App.createUser("Ale", "ale@teste", 'teste1234')
App.createUser("Bella", "bella@martins", 'bella123456')

console.log (App.findUser('Iago@martinss'))
console.log(App.getUser())