class DiceRoller {
  constructor() {
    this.buttonContainer = document.getElementById("dice-button-container");
    this.diceContainer = document.getElementById("dice-container");
    this.setupDiceContainer();
  }

  rollDice(num) {
    return Math.floor(Math.random() * num) + 1;
  }

  createDice(num) {
    const dice = document.createElement("div");
    dice.classList.add("myClass-dice");

    const numLabel = document.createElement("div");
    numLabel.classList.add("num-label");
    numLabel.textContent = num;

    const resultLabel = document.createElement("div");
    resultLabel.classList.add("result-label");
    resultLabel.textContent = ".";

    dice.appendChild(numLabel);
    dice.appendChild(resultLabel);

    dice.addEventListener("click", () => {
      const result = this.rollDice(num);
      resultLabel.textContent = result;
    });

    this.diceContainer.appendChild(dice);
  }

  createAddDiceButton(num) {
    const addDiceButton = document.createElement("button");
    addDiceButton.textContent = "Add " + String(num) + " sided dice";

    addDiceButton.addEventListener("click", () => {
      this.createDice(num);
    });

    this.buttonContainer.appendChild(addDiceButton);
  }

  createCleanDicesButton() {
    const cleanDicesButton = document.createElement("button");
    cleanDicesButton.textContent = "Clean Dices";

    cleanDicesButton.addEventListener("click", () => {
      this.setupDiceContainer();
    });

    this.buttonContainer.appendChild(cleanDicesButton);
  }

  setupDiceContainer() {
    //configure here
    this.diceContainer.innerHTML = "";
    this.createCleanDicesButton();
    this.createAddDiceButton(6);
    this.createAddDiceButton(20);
    this.createAddDiceButton(100);
  }
}

// Usage
const diceRoller = new DiceRoller();
