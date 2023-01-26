import { Character } from "./Character.js";

export class Thief extends Character{
    constructor(name,lifePoints,attackPoints,defensePoints){
        super(name,lifePoints,attackPoints,defensePoints)
    }

    attack(target){
        target.lifePoints -= (this.attackPoints - target.defensePoints) * 2
    }
}