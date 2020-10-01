const Potion = require('./Potion.js');
const Character = require('./Character.js');

// Defines `Character` as the parent of `Player`.
class Player extends Character {
    // This `name = ''` parameter sets a default if no value is passed when it is called
    constructor(name = '') {
        // Calls the parent constructor...i.e. `Character`
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    };

    // ============ THIS IS OPTION ONE OF TWO ==============

    // // returns an object with various player properties
    // this.getStats = function() {
    //     return {
    //         potions: this.inventory.length,
    //         health: this.health,
    //         strength: this.strength,
    //         agility: this.agility,
    //     };
    // };

    // // returns the inventory array or `false` if empty
    // this.getInventory = function() {
    //     if (this.inventory.length) {
    //         return this.inventory;
    //     }

    //     return false;
    // };



// ============ THIS IS OPTION TWO OF TWO ================
// This option defines the method in the constructor, but not individual objects...INHERITANCE!
// This is similar to calling `toString()` even though it is not explicitly defined by us.

// Take all of the prototype methods from `Character` and...
// copies them into a new object that allows `Player.prototype` to use them.

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility,
        };
    };

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }

        return false;
    };

    addPotion(potion) {
        this.inventory.push(potion);
    };

    usePotion(index) {
        // This splices the inventory at the given index, removes that potion...
        // the removed potion is put into a new array at the index of 0...
        // then that potion is set as the `const` value.
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        };
    };
};

module.exports = Player;