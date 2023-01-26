import { Character } from "./Character.js";

export class Mage extends Character{
    constructor(name,lifePoints,attackPoints,defensePoints,magicPoints){
        super(name,lifePoints,attackPoints,defensePoints)
        this.magicPoints = magicPoints
    }

    attack(target){
        target.lifePoints -= (this.attackPoints + this.magicPoints) - target.defensePoints
    }

    recupereLifePoints(target) {
        target.lifePoints += this.magicPoints * 2
    }
}