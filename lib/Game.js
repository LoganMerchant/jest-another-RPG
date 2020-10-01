const inquirer = require('inquirer');
const Player = require('./Player.js');
const Enemy = require('./Enemy.js');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;

    Game.prototype.initializeGame = function() {
        this.enemies.push(new Enemy('goblin', 'sword'));
        this.enemies.push(new Enemy('orc', 'baseball bat'));
        this.enemies.push(new Enemy('skeleton', 'axe'));

        this.currentEnemy = this.enemies[0];

        inquirer 
            .prompt({
                type: 'text',
                name: 'name',
                message: 'What is your name?',
            })
            // destructure name from the prompt object
            .then(({ name }) => {
                this.player = new Player(name);

                // test the object creation
                this.startNewBattle();
            });
    };

    Game.prototype.startNewBattle = function() {
        if (this.player.agility > this.currentEnemy.agility) {
            this.isPlayerTurn = true;
        } else {
            this.isPlayerTurn = false;
        };

        console.log('Your stats are as follows:');
        console.table(this.player.getStats());

        console.log(this.currentEnemy.getDescription());

        this.battle();
    };

    Game.prototype.battle = function() {
        if (this.isPlayerTurn === true) {
            inquirer
                .prompt({
                    type: 'list',
                    message: 'What would you like to do?',
                    name: 'action',
                    choices: ['Attack', 'Use a potion']
                })
                .then(({ action }) => {
                    if (action === 'Use a potion') {
                        if (!this.player.getInventory()) {
                            console.log("You don't have any potions!"); 
                            return;
                        };

                        inquirer
                            .prompt({
                                type: 'list',
                                message: 'Which potion would you like to use?',
                                name: 'action',
                                // Gets the inventory of potions, creates a new index with `map`...
                                // `item` parameter is the potion type, `index` is it's index in the array...
                                // The callback function itself displays a list of potions.
                                choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`),
                            })
                            .then(({ action }) => {
                                const potionDetails = action.split(': ');

                                this.player.usePotion(potionDetails[0] - 1);
                                console.log(`You used a(n) ${potionDetails[1]} potion!`);
                            });
                    } else {
                        const damage = this.player.getAttackValue();
                        this.currentEnemy.reduceHealth(damage);

                        console.log(`You attacked the ${this.currentEnemy.name}!`);
                        console.log(this.currentEnemy.getHealth());
                    };
                });
        } else {
            const damage = this.currentEnemy.getAttackValue();
            this.player.reduceHealth(damage);

            console.log(`You were atacked by the ${this.currentEnemy.name}!`);
            console.log(this.player.getHealth());
        };
    };
};

module.exports = Game;