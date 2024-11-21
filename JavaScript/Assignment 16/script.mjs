/*************************************************
Code by Adeem Amir
*************************************************/
function dispM(a, b) {
    document.getElementById(a).innerHTML = b;
    document.getElementById(a).classList.add('active');
}

function dispMx(a, b) {
    document.getElementById(a).innerHTML += b;
    document.getElementById(a).classList.add('active');
}

function generatePassword() {
    const length = parseInt(document.getElementById('passwordLength').value);
    const includeLower = document.getElementById('includeLower').checked;
    const includeUpper = document.getElementById('includeUpper').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;

    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const numberChars = '0123456789';
    let allChars = '';

    if (includeLower) allChars += lowerChars;
    if (includeUpper) allChars += upperChars;
    if (includeSymbols) allChars += symbolChars;
    if (includeNumbers) allChars += numberChars;

    if (allChars === '') {
        dispM('passwordOutput', 'Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    dispM('passwordOutput', password);
}

function passwordifyInput() {
    const input = document.getElementById('inputToPasswordify').value;
    let passwordified = '';

    // Char Mapping.
    const replacements = {
        'a': '@',
        's': '$',
        'i': '!',
        'l': '1',
        'o': '0',
        'e': '3'
    };

    for (let i = 0; i < input.length; i++) {
        const char = input[i]; //grab chara.
        // Roll a 50-50 (.5 then check for below .25 or not)
        const shouldReplace = Math.random() < 0.5;
        
        // Main Body Loop
        if (i > 0 && i % 2 === 0 && Math.random() < 0.25) {
            const symbols = ['_', '-', '^', '&', '#'];
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            passwordified += randomSymbol;
        }

        // Replace character if necessary
        passwordified += shouldReplace && replacements[char] ? replacements[char] : char;
    }

    dispM('passwordOutput', passwordified);
}

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}