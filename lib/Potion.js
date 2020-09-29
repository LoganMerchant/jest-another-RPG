function Potion(name) {
    this.name = name;

    if (this.name === 'health') {
        // Math.random * `number` defines the range between the two values 
        // & the `+ `number`` is the minimum number to be returned
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    };
};

module.exports = Potion;