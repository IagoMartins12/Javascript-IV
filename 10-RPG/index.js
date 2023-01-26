import { Character } from "./Character.js"
import { Mage } from "./Mage.js"
import { Thief } from "./Thief.js"
import { Warrior } from "./Warrior.js"

const arthur = new Mage('Arthur', 90, 4, 2, 14)
const beatrice = new Thief('Beatrice', 140, 22, 8)
const cain = new Warrior('Cain',200,14,12,4)

console.table({ arthur, beatrice, cain })

cain.switchMode()
arthur.attack(cain)
beatrice.attack(arthur)

console.table({ arthur, beatrice, cain })

cain.attack(arthur)
arthur.recupereLifePoints(arthur)
beatrice.attack(cain)

console.table({ arthur, beatrice, cain })