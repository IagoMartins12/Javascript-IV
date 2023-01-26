/*
Os acessadores get e set são maodificadores de acesso, eles servem para aplicar alguma regra quando vc for pegar algum atributo do objeto.
Normalmente são usados em atributos que estejam encapsulados, pois é uma maneira de mexermos com eles de uma forma segura
Get: retorna algum atributo do objeto 
Set: seta alguma caracteristica do objeto 
*/

/*get: 
Por exemplo, digamos que sempre que formos retornar o valor de um atributo, quisessemos q ele seja multiplicado por dois. Então ficaria mais ou menos assim: */

class obj {
    get retornarAtributo(){
        return this.valor * 2
    }
}

/*Set: 
Por exemplo, digamos que queremos fazer uma validação na hora de setar o valor de um atributo de um objeto, como ter certeza que o atributo será uma string*/

class obj2 {
    set setarAtributo(newUsername){
        if (typeof newUsername === 'string'){
            this.username = newUsername
        }
    }
}