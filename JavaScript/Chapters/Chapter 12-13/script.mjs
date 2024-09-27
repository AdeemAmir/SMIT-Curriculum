/*************************************************
Code by Adeem Amir
*************************************************/
function dispM(a, b) {
    document.getElementById(a).innerText = b;
    document.getElementById(a).classList.add('active');
}

// 1. Check Character Type
function checkCharacterType() {
    const char = prompt("Enter a character (number or string):");
    const ascii = char.charCodeAt(0);

    if (ascii >= 65 && ascii <= 90) {
        dispM("cOutp1", `${char} is an uppercase letter.`);
    } else if (ascii >= 97 && ascii <= 122) {
        dispM("cOutp1", `${char} is a lowercase letter.`);
    } else if (ascii >= 48 && ascii <= 57) {
        dispM("cOutp1", `${char} is a number.`);
    } else {
        dispM("cOutp1", `${char} is not a number or a letter.`);
    }
}

// 2. Display Larger Integer
function compareIntegers() {
    const num1 = parseInt(prompt("Enter the first integer:"));
    const num2 = parseInt(prompt("Enter the second integer:"));

    if (num1 > num2) {
        dispM("cOutp2", `${num1} is larger.`);
    } else if (num2 > num1) {
        dispM("cOutp2", `${num2} is larger.`);
    } else {
        dispM("cOutp2", "Both integers are equal.");
    }
}

// 3. Check Number Sign
function checkNumber() {
    const number = parseFloat(prompt("Enter a number:"));

    if (number > 0) {
        dispM("cOutp3", "The number is positive.");
    } else if (number < 0) {
        dispM("cOutp3", "The number is negative.");
    } else {
        dispM("cOutp3", "The number is zero.");
    }
}

// 4. Check for Vowel
function isVowel() {
    const char = prompt("Enter a character:").toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(char) && char.length === 1) {
        dispM("cOutp4", true);
    } else {
        dispM("cOutp4", false);
    }
}

// 5. Password Validation
function validatePassword() {
    const correctPassword = "yourPassword"; // Replace with the correct password
    // correctPassword = xcorrectPassword.toLowerCase();
    const userPassword = prompt("Enter your password:");

    if (!userPassword) {
        dispM("cOutp5", "Please enter your password.");
    } else if (userPassword === correctPassword) {
        dispM("cOutp5", "Correct! The password you entered matches the original password.");
    } else {
        dispM("cOutp5", "Incorrect password.");
    }
}

// 6. Fix Greeting Logic
function fixGreeting() {
    var greeting;
    var hour = 13;

    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    dispM("cOutp6", greeting);
}

// 7. Time Input Validation
function checkTime() {
    const tm = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");
    const hr = parseInt(tm.slice(0, 2));

    if (hr < 0 || hr > 23) {
        dispM("cOutp7", "Invalid time input. Please enter a valid hour (0-23).");
    } else if (hr < 12) {
        dispM("cOutp7", "Good Morning");
    } else if (hr < 18) {
        dispM("cOutp7", "Good Afternoon");
    } else if (hr<23) {
        dispM("cOutp7", "Good Evening");
    }else {
        dispM("cOutp7", "Invalid Input.");
    }
}