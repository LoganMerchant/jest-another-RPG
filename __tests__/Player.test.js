const Player = require('../lib/Player.js');
const Potion = require('../lib/Potion.js');

// Makes sure to use the mock data in `./lib/__mocks__/Potion.js` for testing purposes
// rather than the data in `Potion.js`
jest.mock('../lib/Potion.js');

console.log(new Potion());

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});