function getRandom(n, m) {
    // Ensure n and m are integers
    n = Math.floor(n);
    m = Math.floor(m);
    // Calculate the random integer within the specified range
    return Math.floor(Math.random() * (m - n + 1)) + n;
}
function get0Chanced(chanceOf0) {
    // Ensure chanceOf0 is a valid probability between 0 and 1
    chanceOf0 = Math.max(0, Math.min(1, chanceOf0));
    // Generate a random number between 0 and 1
    const randomNum = Math.random();
    // Return 0 if the random number is less than or equal to chanceOf0, otherwise return 1
    return randomNum <= chanceOf0 ? 0 : 1;
}

class Character {
    constructor() {
        this.hp = 100;
        this.mana = 0;
        this.stamina = 100;
        this.strength = 7;
        this.speed = 2.5;
        this.charisma = 0;
    }
    setStats(hp, mana, stamina, str, speed, charisma) {
        this.hp = hp;
        this.mana = mana;
        this.stamina = stamina;
        this.strength = str;
        this.speed = speed;
        this.charisma = charisma;
    }
    changeStats(hp, mana, stamina, str, speed, charisma) {
        this.hp += hp;
        this.mana += mana;
        this.stamina += stamina;
        this.strength += str;
        this.speed += speed;
        this.charisma += charisma;
    }
    generateRandomByClass(classname) {
        if (classname === "warrior") {
            // Implement based on specific characteristics of a warrior
            this.changeStats(getRandom(20, 80), getRandom(0, 10)*get0Chanced(0.5), getRandom(50, 100), getRandom(3, 8), getRandom(5, 15)/10, getRandom(-70, 70))
        } else if (classname === "paladin") {
            // Implement based on specific characteristics of a paladin
            this.changeStats(getRandom(20, 80), getRandom(0, 10)*get0Chanced(0.5), getRandom(50, 100), getRandom(3, 8), getRandom(5, 15)/10, getRandom(-70, 70))
        } else if (classname === "berserk") {
            // Implement based on specific characteristics of a berserk
            this.changeStats(getRandom(20, 80), getRandom(0, 10)*get0Chanced(0.5), getRandom(50, 100), getRandom(3, 8), getRandom(5, 15)/10, getRandom(-70, 70))
        } else if (classname === "knight") {
            // Implement based on specific characteristics of a knight
            this.changeStats(getRandom(20, 80), getRandom(0, 10)*get0Chanced(0.5), getRandom(50, 100), getRandom(3, 8), getRandom(5, 15)/10, getRandom(-70, 70))
        } else if (classname === "weaponeer") {
            // Implement based on specific characteristics of a weaponeer
            this.changeStats(getRandom(20, 70), getRandom(0, 10), getRandom(40, 80), getRandom(3, 7), getRandom(5, 15)/10, getRandom(-70, 70))
        } else if (classname === "mage") {
            // Implement based on specific characteristics of a mage
            this.changeStats(getRandom(-10, 30), getRandom(80, 180), getRandom(-50, +50), getRandom(-1, 5), getRandom(-30, 75)/100, getRandom(-70, 70))
        } else if (classname === "courts mage") {
            // Implement based on specific characteristics of a courts mage
            this.changeStats(getRandom(-10, 30), getRandom(80, 200), getRandom(-50, +50), getRandom(-1, 5), getRandom(-30, 75)/100, getRandom(-70, 70))
        } else if (classname === "elemental wizard") {
            // Implement based on specific characteristics of an elemental wizard
            this.changeStats(getRandom(-10, 30), getRandom(80, 180), getRandom(-50, +50), getRandom(-1, 5), getRandom(-30, 75)/100, getRandom(-70, 70))
        } else if (classname === "healer") {
            // Implement based on specific characteristics of a healer
            this.changeStats(getRandom(-10, 40), getRandom(80, 180), getRandom(-50, +50), getRandom(-1, 5), getRandom(-30, 75)/100, getRandom(-70, 70))
        } else if (classname === "necromancer") {
            // Implement based on specific characteristics of a necromancer
            this.changeStats(getRandom(-10, 20), getRandom(80, 180), getRandom(-50, +50), getRandom(-1, 5), getRandom(-30, 75)/100, getRandom(-70, 70))
        } else if (classname === "illusionist") {
            // Implement based on specific characteristics of an illusionist
            this.changeStats(getRandom(-10, 30), getRandom(80, 180), getRandom(-50, +50), getRandom(-1, 5), getRandom(-30, 75)/100, getRandom(-70, 70))
        } else if (classname === "alchemist") {
            // Implement based on specific characteristics of an alchemist
            this.changeStats(getRandom(-10, 40), getRandom(10, 40), getRandom(-50, +50), getRandom(-1, 5), getRandom(-30, 75)/100, getRandom(-70, 70))
        } else if (classname === "bard") {
            // Implement based on specific characteristics of a bard
            this.changeStats(getRandom(10, 60), getRandom(20, 50), getRandom(0, +70), getRandom(0, 6), getRandom(0, 10)/10, getRandom(0, 70))
        } else if (classname === "engineer") {
            // Implement based on specific characteristics of an engineer
            this.changeStats(getRandom(20, 50), getRandom(0, 10)*get0Chanced(0.5), getRandom(30, 70), getRandom(2, 7), getRandom(0, 10)/10, getRandom(-70, 70))
        } else if (classname === "blacksmith") {
            // Implement based on specific characteristics of a blacksmith
            this.changeStats(getRandom(10, 70), getRandom(0, 10)*get0Chanced(0.5), getRandom(50, 100), getRandom(3, 8), getRandom(25, 110)/100, getRandom(-70, 70))
        } else if (classname === "archer") {
            // Implement based on specific characteristics of an archer
            this.changeStats(getRandom(10, 70), getRandom(0, 10)*get0Chanced(0.5), getRandom(50, 100), getRandom(3, 6), getRandom(5, 15)/10, getRandom(-70, 70))
        } else if (classname === "thief") {
            // Implement based on specific characteristics of a thief
            this.changeStats(getRandom(10, 60), getRandom(20, 50), getRandom(0, +70), getRandom(0, 6), getRandom(0, 10)/10, getRandom(0, 70))
        } else if (classname === "assassin") {
            // Implement based on specific characteristics of an assassin
            this.changeStats(getRandom(10, 70), getRandom(0, 10)*get0Chanced(0.5), getRandom(50, 100), getRandom(3, 6), getRandom(5, 15)/10, getRandom(-70, 70))
        } else {
            return;
        }
    }
    presentAsText() {
        return `Character Stats:
            - HP: ${this.hp}
            - Mana: ${this.mana}
            - Stamina: ${this.stamina}
            - Strength: ${this.strength}
            - Speed: ${this.speed}
            - Charisma: ${this.charisma}`;
    }
}

// Example usage:

function usage() {
    //get class from selector
    const classSelector = document.getElementById("classSelector");
    const selectedClass = classSelector.value;
    //create the character
    const character = new Character();
    character.generateRandomByClass(selectedClass); //add here the identified class asked
    console.log(character);
    document.getElementById("main").innerText = character.presentAsText();
}

