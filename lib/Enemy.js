const Potion = require('./Potion.js');
const Character = require('./Character.js');

class Enemy extends Character {
    constructor(name, weapon) {
        // Calls the parent constructor...i.e. `Character`
        super(name);
        
        this.weapon = weapon;
        this.potion = new Potion();
    };

    getDescription(name, weapon) {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
};

module.exports = Enemy;