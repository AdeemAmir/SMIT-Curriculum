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

// Q4: Find the last index of letter "l" in "Hello World"
function findLastIndexL() {
    const word = "Hello World";
    const index = word.lastIndexOf("l");
    //console.log(word.indexOf("l"));
    //console.log(word.lastIndexOf("l"));
    dispM("cOutp4", `String: ${word}\nLast index of 'l': ${index}`);
}

/*
Another Method idea:
find index of, splice string by index of,
find again, until no more found.
Test Time for both ^ and below.
*/

/*
let str = "Hello World";
let indices = [];

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'l') {
        indices.push(i);
    }
}
console.log(indices);
*/

// Q5: Find the character at the 3rd index in "Pakistani"
function findCharAtIndex() {
    const word = "Pakistani";
    const char = word.charAt(3);
    console.log('At 3: '+word[3]);
    dispM("cOutp5", `String: ${word}\nCharacter at index 3: ${char}`);
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
    dispM("cOutp7", `City: ${city}\nAfter replacement: ${newCity}`);
}

// Q8: Replace all occurrences of "and" with "&"
function replaceAnd() {
    const message = "Ali and Sami are best friends. They play cricket and football together.";
    const updMsg = message.replace(/and/g, "&"); //g  here means global, i.e; replace all
    dispM("cOutp8", `Updated message: ${updMsg}`);
}

//-----------------------------------------------------------------------------------------------

// Q9: Convert string "472" to number 472
function convertStringToNumber() {
    const str = "472";
    const num = Number(str);
    dispM("cOutp9", `Value: ${str}\nType: ${typeof str}\nValue: ${num}\nType: ${typeof num}`);
}

// Q10: Convert user input to uppercase
function convertToUpper() {
    const inp = prompt("Enter Text to Capitalize:");
    const inpUpper = inp.toUpperCase();
    dispM("cOutp10", `User Text: ${inp}\nUppercase: ${inpUpper}`);
}

// Q11: Convert user input to title case
function convertToTitleCase() {
    const a = prompt("Enter some text:");
    const out = a.split(' ').map(a => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()).join(' ');
    //const out = a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()
    dispM("cOutp11", `User Text: ${a}\nTitle Case: ${out}`);
}

// Q12: Convert num to string and remove dot
function removeDot() {
    var num = 35.36;
    var str = num.toString().replace('.', '');
    dispM("cOutp12", `Number: ${num}\nString: ${str}`);
}

// Q13: Validate username for special symbols
function validateUsername() {
    const username = prompt("Enter your username:");
    let invFlag = true; //flag

    for (let i = 0; i < username.length; i++) {
        const charCode = username.charCodeAt(i); // Such a costly method.
	//running through each chara and checking where it's valid or not.
	//It's value scaling; O(n) ; where n = username.length
        if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
            invFlag = false;
            break;
        }
    }

    if (invFlag) {
        dispM("cOutp13", "Username is valid.");
    } else {
        dispM("cOutp13", "Please enter a valid username.");
    }
}

/* REGular EXpression Method
function validateUsername() {
    const username = prompt("Enter your username:");
    const specialChars = /[!.,@]/;
    if (specialChars.test(username)) {
        dispM("cOutp13", "Please enter a valid username without special characters.");
    } else {
        dispM("cOutp13", "Username is valid.");
    }
}
*/

// Q14: Search for an item in the array
function searchItem() {
    const A = ["cake", "apple pie", "cookie", "chips", "patties"];
    const itemToSearch = prompt("Welcome to Demon Bakery. What do you want to order sir/ma'am?");
    const index = A.findIndex(item => item.toLowerCase() === itemToSearch.toLowerCase());
    if (index !== -1) {
        dispMx("cOutp14", `${A[index]} is <span style='font-weight:bold;'>available</span> at index ${index} in our bakery.\n`);
    } else {
        dispMx("cOutp14", `${itemToSearch} is <span style='font-weight:bold;'>not available</span> in our bakery.\n`);
    }
}


// Q15: Validate password input
function validatePassword() {
    const password = prompt("Enter your password:");
    const c1 = /.{6,}/.test(password);
    const c2 = /^[a-zA-Z]/.test(password);
    const c3 = /^(?=.*[a-zA-Z])(?=.*\d)/.test(password);
    
    if (!c1) {
        dispM("cOutp15", `Entered Password: ${password}\nPassword must be at least 6 characters long.`);
    } else if (!c2) {
        dispM("cOutp15", `Entered Password: ${password}\nPassword can not begin with a number.`);
    } else if (!c3) {
        dispM("cOutp15", `Entered Password: ${password}\nPassword must contain both alphabets and numbers.`);
    } else {
        dispM("cOutp15", "Password is valid.");
    }
}


// Q16: Convert string to array using split method
function splitString() {
    const university = "University of Karachi";
    const array = university.split('');
    dispM("cOutp16", `Text:${university}\n${array.join('\n')}`);
}

// Q17: Display last character of user input
function displayLastCharacter() {
    const userInput = prompt("Enter some text:");
    const lastChar = userInput.charAt(userInput.length - 1);
    dispM("cOutp17", `User Input: ${userInput}\nLast character: ${lastChar}`);
}

// Q18: Count occurrences of "the" in a string
function countOccurrences() {
    const str = "The quick brown fox jumps over the lazy dog";
    const count = (str.match(/the/gi) || []).length;
    dispM("cOutp18", `Text: ${str}\nOccurrences of "the": ${count}`);
}

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}