/*
Atributos e metodos estaticos são definidos em uma classe, e não dependem de uma instancia para serem utilizados. Ou seja, ela pode ser acessada diretamente pela classe
ao inves da instancia
São usados quando precisamos definir um atributo que seja global, e que não terá o seu valor alterado
*/

/*Atributos estaticos: Apenas colocar o static + o nome do atributo (tem q ser fora do constructor)*/

class obj {
    constructor(){
    }
    static baseFee = 150
}
