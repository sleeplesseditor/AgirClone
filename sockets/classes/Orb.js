class Orb {
    constructor() {
        this.colour = this.getRandomColour();
        this.locX = Math.floor(Math.random() * 500);
        this.locY = Math.floor(Math.random() * 500);
        this.radius = 5;
    }

    getRandomColour() {
        const r = Math.floor((Math.random() * 200) + 50);
        const g = Math.floor((Math.random() * 200) + 50);
        const b = Math.floor((Math.random() * 200) + 50);
        return `rgb(${r},${g},${b})`;
    }
}

module.exports = Orb;