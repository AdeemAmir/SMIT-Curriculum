/*************************************************
Code by Adeem Amir
*************************************************/
function dispM(a, b) {
    document.getElementById(a).innerText = b;
    document.getElementById(a).classList.add('active');
}

// Question 01 -----------------------------------------
function welcomeCity() {
    const city = prompt("Enter City Name:").toLowerCase();
    const message = city === "karachi" ? "Welcome to city of lights" : "City not recognized.";
    dispM("cOutp1", message);
}

// Question 02 -----------------------------------------
function greetGender() {
    const gender = prompt("Enter your gender (male/female):").toLowerCase();
    const message = gender === "male" ? "Good Morning Sir." : gender === "female" ? "Good Morning Ma’am." : "Gender not recognized.";
    dispM("cOutp2", message);
}

// Question 03 -----------------------------------------
function trafficSignal() {
    const color = prompt("Enter traffic signal color (Red, Yellow, Green):").toLowerCase();
    const messages = {
        red: "Must Stop",
        yellow: "Ready to move",
        green: "Move now"
    };
    dispM("cOutp3", messages[color] || "Color not recognized.");
}

// Question 04 -----------------------------------------
function fuelCheck() {
    const fuel = parseFloat(prompt("Enter remaining fuel in litres:"));
    const message = fuel < 0.25 ? "Please refill the fuel in your car." : "Fuel level is adequate.";
    dispM("cOutp4", message);
}

// Question 05 -----------------------------------------
function alertConditions() {
    let output = "";

    var a = 4;
    if (++a === 5) {
        output += "given condition for variable a is true\n";
    }

    var b = 82;
    if (b++ === 83) {
        output += "given condition for variable b is true\n";
    }//else{"given condition for variable b is true\n";}

    var c = 12;
    if (c++ === 13) {
        output += "condition 1 is true\n";
    }
    if (c === 13) {
        output += "condition 2 is true\n";
    }
    if (++c < 14) {
        output += "condition 3 is true\n";
    }
    if (c === 14) {
        output += "condition 4 is true\n";
    }

    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        output += "The cost equals\n";
    }

    if (true) {
        output += "True\n";
    }
    if (false) {
        output += "False\n";
    }

    if ("car" < "cat") {
        output += "car is smaller than cat\n";
    }

    dispM("cOutp5", output || "No alerts triggered.");
}

// Question 06 -----------------------------------------
function calculatePercentage() {
    const marksObtained = [];
    for (let i = 0; i < 3; i++) {
        marksObtained.push(parseFloat(prompt(`Enter marks obtained in subject ${i + 1}:`)));
    }
    const totalMarks = parseFloat(prompt("Enter total marks:"));
    const totalObtained = marksObtained.reduce((a, b) => a + b, 0);
    const percentage = (totalObtained / totalMarks) * 100;

    let grade, remarks;
    if (percentage >= 90) {
        grade = "A+";
        remarks = "Excellent!";
    } else if (percentage >= 80) {
        grade = "A";
        remarks = "Very Good!";
    } else if (percentage >= 70) {
        grade = "B";
        remarks = "You need to improve";
    } else if (percentage >= 60) {
        grade = "C";
        remarks = "Satisfactory!";
    } else if (percentage >= 50) {
        grade = "D";
        remarks = "Pass!";
    } else {
        grade = "F";
        remarks = "Fail!";
    }

    dispM("cOutp6", `Total Marks: ${totalMarks}\nMarks Obtained: ${totalObtained}\nPercentage: ${percentage.toFixed(2)}%\nGrade: ${grade}\nRemarks: ${remarks}`);
}

// Question 07 -----------------------------------------
function guessGame() {
    const secretNumber = Math.floor(Math.random() * 10) + 1; //rand 0,1, *10, floor and + 1; rem 0 | boost 10.
    //console.log(secretNumber);
    const userGuess = parseInt(prompt("Guess the secret number (1-10):"));

    let message;
    if (userGuess === secretNumber) {
        message = "Bingo! Correct answer";
    } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
        message = "Unlucky but close.";
    } else {
        message = "Try again!";
    }

    dispM("cOutp7", message);
}

// Question 08 -----------------------------------------
function checkDivisibility() {
    const number = parseInt(prompt("Enter a number:"));
    const message = number % 3 === 0 ? `${number} is divisible by 3` : `${number} is not divisible by 3`;
    dispM("cOutp8", message);
}

// Question 09 -----------------------------------------
function checkEvenOdd() {
    const number = parseInt(prompt("Enter a number:"));
    const message = number % 2 === 0 ? `${number} is an even number` : `${number} is an odd number`;
    dispM("cOutp9", message);
}

// Question 10 -----------------------------------------
function weatherReport() {
    const temp = parseFloat(prompt("Enter the temperature:"));
    let message;
    if (temp > 40) {
        message = "It is too hot outside.";
    } else if (temp > 30) {
        message = "The Weather today is Normal.";
    } else if (temp > 20) {
        message = "Today’s Weather is cool.";
    } else if (temp > 10) {
        message = "OMG! Today’s weather is so Cool.";
    } else {
        message = "Temp 10 or <10.";
    }
    dispM("cOutp10", message);
}

// Question 11 -----------------------------------------
function calculator() {
    const firstNum = parseFloat(prompt("Enter the first number:"));
    const secondNum = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Enter operation (+, -, *, /, %):");

    let result;
    switch (operation) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        case '%':
            result = firstNum % secondNum;
            break;
        default:
            result = "Invalid operation.";
    }

    dispM("cOutp11", `Result: ${result}`);
}
