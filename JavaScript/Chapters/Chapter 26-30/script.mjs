/*************************************************
Code by Adeem Amir
*************************************************/
function dispM(a, b) {
    document.getElementById(a).innerText = b;
    document.getElementById(a).classList.add('active');
}

function dispMx(a, b) {
    document.getElementById(a).innerHTML += b;
    document.getElementById(a).classList.add('active');
}

function processPositiveInteger() {
    const num = parseFloat(document.getElementById("posInt").value);
    if (num > 0) {
        const roundValue = Math.round(num);
        const floorValue = Math.floor(num);
        const ceilValue = Math.ceil(num);
        const output = `
            Number: ${num} <br>
            Round Off: ${roundValue} <br>
            Floor: ${floorValue} <br>
            Ceil: ${ceilValue}
        `;
        dispM("posIntOutput", output);
    } else {
        alert("Please enter a positive integer.");
    }
}

function processNegativeFloat() {
    const num = parseFloat(document.getElementById("negFloat").value);
    if (num < 0) {
        const roundValue = Math.round(num);
        const floorValue = Math.floor(num);
        const ceilValue = Math.ceil(num);
        const output = `
            Number: ${num} <br>
            Round Off: ${roundValue} <br>
            Floor: ${floorValue} <br>
            Ceil: ${ceilValue}
        `;
        dispM("negFloatOutput", output);
    } else {
        alert("Please enter a negative floating point number.");
    }
}

function displayAbsoluteValue() {
    const num = parseFloat(document.getElementById("absValueInput").value);
    const absValue = Math.abs(num);
    dispM("absValueOutput", `Absolute value of ${num} is ${absValue}`);
}

function simulateDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    dispM("diceOutput", `You rolled a ${diceValue}`);
}

function tossCoin() {
    const coinValue = Math.random() < 0.5 ? "Heads" : "Tails";
    dispM("coinOutput", `You tossed: ${coinValue}`);
}

function showRandomNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    dispM("randomNumOutput", `Random number between 1 and 100 is: ${randomNum}`);
}

function parseWeight() {
    const input = document.getElementById("weightInput").value;
    const weight = parseFloat(input);
    if (!isNaN(weight)) {
        dispM("weightOutput", `Your weight is: ${weight} kg`);
    } else {
        alert("Please enter a valid weight.");
    }
}

let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    if (userGuess === secretNumber) {
        dispM("secretNumberOutput", "Congratulations! You guessed the correct number!");
    } else {
        dispM("secretNumberOutput", "Sorry, try again!");
    }
}

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}