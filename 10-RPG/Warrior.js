import { Character } from "./Character.js";

export class Warrior extends Character{
    constructor(name,lifePoints,attackPoints,defensePoints,shieldPoints){
        super(name,lifePoints,attackPoints,defensePoints)
        this.shieldPoints = shieldPoints
        this.attackMode = true
    }

    attack(target){
        if (this.attackMode){
            super.attack(target)
        } else {
            console.log('Personagem em modo de defense')
        }
    }

    switchMode(){
        if (this.attackMode){
            this.attackMode = false
        } else {
            this.attackMode = true
        }
        this.checkMode()
    }

    checkMode(){
        if (!this.attackMode){
            this.defensePoints += this.shieldPoints
        } else {
            this.defensePoints -= this.defensePoints
        }
        return this.defensePoints
    }
}