class Book {
    //Construtor da classe 
    constructor (title) {
      this.title = title
      this.published = false
    }
  
    //Função da classe
    publish() {
      this.published = true
    }
  }
  
  const eragon = new Book("Eragon")
  const eldest = new Book("Eldest")
  
  eragon.publish()
  
  console.log(eragon)
  console.log(eldest)
  //O instanceof serve para verificar se a instancia realmente é da classe mencionada
  console.log(eragon instanceof Book)