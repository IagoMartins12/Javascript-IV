//Maneira normal para escrever um objeto:
const book = {
    title: "Eragon",
    pages: 468,
    published: true,
    inStock: 20,
    tags: ["fantasy", "adventure", "medieval"],
    author: {
        name: "Christopher Paolini"
    },
    addOnStock(quantity) {
        this.inStock += quantity
    },
    save: function () {
      // Save book data to database
    }
}
  
//Utilizando um metodo construtor:
function Book(title, pages, tags, author) {
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false
  this.inStock = 0
  this.addOnStock = function addOnStock(quantity) {
  this.inStock += quantity
  }
  this.save = function () {
    // Save book to database
  }
}

const eragon = new Book("Eragon", 468, ["fantasy", "adventure", "medeval"],{ name: "Christopher Paolini" })

eragon.addOnStock(20)

