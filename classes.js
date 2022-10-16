class Player {
    constructor(name, type) {
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Myself, ${this.name}, and I am ${this.name}`);
    }
}
class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log("wizard", this);
    }
    play() {
        console.log(`WEEEEEEEEEE! I ${this.name}, have power of ${this.name}`);
    }
}

const wiz1 = new Wizard("Shelly", "Healer");
const wiz2 = new Wizard("Shawn", "Magician");
