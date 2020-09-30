const Potion = require('./Potion');

// This `name = ''` parameter sets a default if no value is passed when it is called
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 +7);

    this.inventory = [new Potion('health'), new Potion()];
};

module.exports = Player;