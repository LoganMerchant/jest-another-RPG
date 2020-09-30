const Potion = require('./Potion');

// This `name = ''` parameter sets a default if no value is passed when it is called
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 +7);

    this.inventory = [new Potion('health'), new Potion()];

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

    Player.prototype.getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility,
        };
    };

    Player.prototype.getInventory = function() {
        if (this.inventory.length) {
            return this.inventory;
        }

        return false;
    };
};

module.exports = Player;