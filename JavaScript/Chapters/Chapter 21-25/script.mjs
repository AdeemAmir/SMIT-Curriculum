function dispM(a, b) {
    document.getElementById(a).innerText = b;
    document.getElementById(a).classList.add('active');
}

function dispMx(a, b) {
    document.getElementById(a).innerHTML += b;
    document.getElementById(a).classList.add('active');
}


// Q1: Greet the user with their full name
function greetUser() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const fullName = firstName + " " + lastName;
    dispM("cOutp1", `Hello, ${fullName}!`);
}

// Q2: Get the length of the favorite mobile phone model
function getPhoneLength() {
    const phoneModel = document.getElementById("phoneInput").value;
    const length = phoneModel.length;
    dispM("cOutp2", `My Favorite Phone is: ${phoneModel}\nLength of String: ${length}`);
}

// Q3: Find the index of letter "n" in "Pakistani"
function findIndexN() {
    //dispM("cOutp3", ); //For whatever reason, this doesn't throw error.
    //can be used as blank stmnt.
    const word = "Pakistani";
    const counts = {};
    const indices = [];
    let match;

    const regex = /n/g;

    while ((match = regex.exec(word)) !== null) {
        indices.push(match.index);
    }

        //Count for all.
    for (let x of word) {
        counts[x] = (counts[x] || 0) + 1;
    }
    
    // Prepare the output
    let output = "";
    for (const [char, count] of Object.entries(counts)) {
        output += `${char}: ${count}\n`;
    }
    
    // Display the results
    dispM("cOutp3", `Indices of 'n': ${indices.join(', ')}\n\n${output}\n`);
}

/*-----------------------------------------------------------------------

// Q4: Find the last index of letter "l" in "Hello World"
function findLastIndexL() {
    const word = "Hello World";
    const index = word.lastIndexOf("l");
    dispM("cOutp4", `Last index of 'l': ${index}`);
}

// Q5: Find the character at the 3rd index in "Pakistani"
function findCharAtIndex() {
    const word = "Pakistani";
    const char = word.charAt(3);
    dispM("cOutp5", `Character at index 3: ${char}`);
}

// Q6: Greet the user using string concat() method
function greetUserConcat() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const fullName = firstName.concat(" ", lastName);
    dispM("cOutp6", `Hello, ${fullName}!`);
}

// Q7: Replace "Hyder" with "Islam" in "Hyderabad"
function replaceHyder() {
    const city = "Hyderabad";
    const newCity = city.replace("Hyder", "Islam");
    dispM("cOutp7", `Updated city: ${newCity}`);
}

// Q8: Replace all occurrences of "and" with "&"
function replaceAnd() {
    const message = "Ali and Sami are best friends. They play cricket and football together.";
    const updatedMessage = message.replace(/and/g, "&");
    dispM("cOutp8", `Updated message: ${updatedMessage}`);
}

// Q9: Convert string "472" to number 472
function convertStringToNumber() {
    const str = "472";
    const num = Number(str);
    dispM("cOutp9", `Value: ${num}, Type: ${typeof num}`);
}

// Q10: Convert user input to uppercase
function convertToUpper() {
    const userInput = prompt("Enter some text:");
    const upperCaseInput = userInput.toUpperCase();
    dispM("cOutp10", `Uppercase: ${upperCaseInput}`);
}

// Q11: Convert user input to title case
function convertToTitleCase() {
    const userInput = prompt("Enter some text:");
    const titleCaseInput = userInput.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    dispM("cOutp11", `Title Case: ${titleCaseInput}`);
}

// Q12: Convert num to string and remove dot
function removeDot() {
    var num = 35.36;
    var str = num.toString().replace('.', '');
    dispM("cOutp12", `String without dot: ${str}`);
}

// Q13: Validate username for special symbols
function validateUsername() {
    const username = prompt("Enter your username:");
    const specialChars = /[!.,@]/;
    if (specialChars.test(username)) {
        dispM("cOutp13", "Please enter a valid username without special characters.");
    } else {
        dispM("cOutp13", "Username is valid.");
    }
}

// Q14: Search for an item in the array
function searchItem() {
    const A = ["cake", "apple pie", "cookie", "chips", "patties"];
    const itemToSearch = prompt("What do you want to order?");
    const foundItem = A.find(item => item.toLowerCase() === itemToSearch.toLowerCase());
    if (foundItem) {
        dispM("cOutp14", `${foundItem} is available in our bakery.`);
    } else {
        dispM("cOutp14", `${itemToSearch} is not available in our bakery.`);
    }
}

// Q15: Validate password input
function validatePassword() {
    const password = prompt("Enter your password:");
    const valid = /^[a-zA-Z](?=.*\d)(?=.*[a-zA-Z]).{6,}$/.test(password);
    if (valid) {
        dispM("cOutp15", "Password is valid.");
    } else {
        dispM("cOutp15", "Please enter a valid password.");
    }
}

// Q16: Convert string to array using split method
function splitString() {
    const university = "University of Karachi";
    const array = university.split(' ');
    dispM("cOutp16", `Array: ${array.join(', ')}`);
}

// Q17: Display last character of user input
function displayLastCharacter() {
    const userInput = prompt("Enter some text:");
    const lastChar = userInput.charAt(userInput.length - 1);
    dispM("cOutp17", `Last character: ${lastChar}`);
}

// Q18: Count occurrences of "the" in a string
function countOccurrences() {
    const str = "The quick brown fox jumps over the lazy dog";
    const count = (str.match(/the/gi) || []).length;
    dispM("cOutp18", `Occurrences of "the": ${count}`);
}

-----------------------------------------------------------------------*/

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}