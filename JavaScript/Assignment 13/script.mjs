/*************************************************
Code by Adeem Amir
*************************************************/
function dispM(id, message) {
        const outputElement = document.getElementById(id);
        outputElement.innerText += message;
        outputElement.classList.add('active');
}

    let arrT1 = [];

function addColorToStart() {
        const colorInput = document.getElementById("colorInput").value;
        if (colorInput) {
            arrT1.unshift(colorInput);
            dispM("t1Output", `\nAdded "${colorInput}" to the start at index 0.`);
            updateColorDisplay();
        }
}

function addColorToEnd() {
        const colorInput = document.getElementById("colorInput").value;
        if (colorInput) {
            arrT1.push(colorInput);
            dispM("t1Output", `\nAdded "${colorInput}" to the end at index ${arrT1.length - 1}.`);
            updateColorDisplay();
        }
}

function addColorAtIndex() {
        const index = parseInt(document.getElementById("indexInput").value);
        const colorInput = document.getElementById("colorInput").value;
        if (!isNaN(index) && colorInput) {
            arrT1.splice(index, 0, colorInput);
            dispM("t1Output", `\nAdded "${colorInput}" at index ${index}.`);
            updateColorDisplay();
        }
}

function deleteFirstColor() {
        if (arrT1.length > 0) {
            const removedColor = arrT1.shift();
            dispM("t1Output", `\nRemoved "${removedColor}" from the start.`);
            updateColorDisplay();
        } else {
            dispM("t1Output", "\nNo colors to remove from the start.");
        }
}

function deleteLastColor() {
        if (arrT1.length > 0) {
            const removedColor = arrT1.pop();
            dispM("t1Output", `\nRemoved "${removedColor}" from the end.`);
            updateColorDisplay();
        } else {
            dispM("t1Output", "\nNo colors to remove from the end.");
        }
}

function deleteColorsAtIndex() {
        const index = parseInt(document.getElementById("indexInput").value);
        const countToDelete = parseInt(document.getElementById("countInput").value);
        if (!isNaN(index) && !isNaN(countToDelete) && index < arrT1.length) {
            const removedColors = arrT1.splice(index, countToDelete);
            dispM("t1Output", `\nRemoved ${removedColors.join(", ")} from index ${index}.`);
            updateColorDisplay();
        } else {
            dispM("t1Output", "\nInvalid index or count for deletion.");
            updateColorDisplay();
        }
}

function fullCap() {
    arrT1 = arrT1.map(color => color.toUpperCase());
    dispM("t1Output", "\nConverted all colors to uppercase.");
    updateColorDisplay();
}

function fullLower() {
    arrT1 = arrT1.map(color => color.toLowerCase());
    dispM("t1Output", "\nConverted all colors to lowercase.");
    updateColorDisplay();
}

function clearColors() {
        arrT1 = [];
        dispM("t1Output", "\nCleared all colors.");
        updateColorDisplay();
}

    function updateColorDisplay() {
        const t1Output = document.getElementById("t1Output");
        dispM("t1Output", "\n\nArray: " + arrT1.join(", "));
        t1Output.scrollTop = t1Output.scrollHeight;
}

/*---------------------------TASK 2 CAP UNCAP--------------------------------*/

var outputElement = document.getElementById('cOutp1');

function flipCase(str) {
        let flippedStr = '';
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            flippedStr += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
        }
        return flippedStr;
}

function capUncap() {
        const input = document.getElementById('wordInput').value;
        
        let result = '';

        if (input.trim()) {
            if (input.includes(' ')) {
                let words = input.split(/\s+/);
                result = words.map(word => flipCase(word)).join(' ');
            } else {
                result = flipCase(input);
            }
        } else {
            result = "Please enter some text.";
        }

        outputElement.textContent = result;
}

function capAll() {
    const input = document.getElementById('wordInput').value.trim();

    outputElement.textContent = input ? input.toUpperCase() : "Please enter some text.";
}

function uncapAll() {
    const input = document.getElementById('wordInput').value.trim();

    outputElement.textContent = input ? input.toLowerCase() : "Please enter some text.";
}

function arrayToInput() {
    const inputElement = document.getElementById('wordInput');
    inputElement.value = arrT1.join(', ');
}

//PROCESSES ARRAY. SHOWS AS ARRAY-LIKE STRING.
function arrayGrabber() {
    if (arrT1.length > 0) {
        const result = arrT1.map(color => flipCase(color));
        outputElement.textContent = `Array Grabber: [${result.map(item => `"${item}"`).join(', ')}]`;
        dispM("t1Output", "\nProcessed array for capitalization/uncapitalization.");
    } else {
        outputElement.textContent = "No colors in \"Array Runner\" to process.";
    }
}



//PROCESSES A STRING NOT ARRAY.
/*    function arrayGrabber() {
        //const outputElement = document.getElementById('cOutp1');
        if (arrT1.length > 0) {
            const result = arrT1.map(color => flipCase(color)).join(', ');
            outputElement.textContent = `Array Grabber: ${JSON.stringify(result)}`;
            dispM("t1Output", "\nProcessed array for capitalization/uncapitalization.");
        } else {
            outputElement.textContent = "No colors in \"Array Runner\" to process.";
        }
    }*/

/*
//MORE COMPLEX CODE
function flipCase(str) {
    return [...str].map(char => 
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
}

function capUncap() {
    const input = document.getElementById('wordInput').value.trim();
    const outputElement = document.getElementById('cOutp1');

    if (input) {
        const result = input.includes(' ')
            ? input.split(/\s+/).map(flipCase).join(' ')
            : flipCase(input);
        outputElement.textContent = result;
    } else {
        outputElement.textContent = "Please enter some text.";
    }
}
*/

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}

/*-------------------------------------------------------------------------------
function dispM(a, b) {
    document.getElementById(a).innerHTML = b;
    document.getElementById(a).classList.add('active');
}

// Function to flip the case of a single word
function flipCase(str) {
    let flippedStr = '';

    // Loop through each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            flippedStr += char.toLowerCase();
        } else {
            flippedStr += char.toUpperCase();
        }
    }

    return flippedStr;
}

// Array Runner
function ArrayRunner() {
    const input = document.getElementById('wordInput').value; // Get the input value
    const outputElement = document.getElementById('cOutp1'); // Get the output element

    let result = '';

    if (input.trim()) {
        // If input is a single word (not an array), process it directly
        if (input.includes(' ')) {
            // Split the input into words if it's a sentence or multiple words
            let words = input.split(/\s+/);
            result = '';

            // Iterate through the array of words and flip the case of each one
            for (let i = 0; i < words.length; i++) {
                if (i !== 0) result += ' '; // Add a space between words
                result += flipCase(words[i]);
            }
        } else {
            // If it's a single word, flip its case
            result = flipCase(input);
        }
    } else {
        result = "Please enter some text.";
    }

    // Display the result in the output section
    outputElement.textContent = result;
}
--------------------------------------------------------------------------------------------------*/



/*function nulled() {
dispM("cOutp1","Blank STMNT");
}*/

/*----------------------------------------------------------------------------------------------
damien="damien";
console.log(damien);
dam = damien.slice(0,3);
console.log(dam);

        // Function to swap case of each character in a string
        function swapCase(str) {
            let result = '';
            for (let i = 0; i < str.length; i++) {
                let char = str[i];
                if (char === char.toUpperCase()) {
                    result += char.toLowerCase();
                } else {
                    result += char.toUpperCase();
                }
            }
            return result;
        }

        // Function to get the phone length and also swap case
        function getPhoneLength() {
            const phoneInput = document.getElementById('phoneInput').value; // Get input value
            const outputDiv = document.getElementById('cOutp2'); // Output div

            if (phoneInput.trim() === '') {
                outputDiv.innerHTML = 'Please enter a phone model.';
                return;
            }

            // Get the length of the phone model (count spaces too for multiple words)
            const phoneLength = phoneInput.length;

            // Swap case of the phone model
            const swappedPhoneModel = swapCase(phoneInput);

            // Display the length and swapped case
            outputDiv.innerHTML = `Phone Model: ${swappedPhoneModel} <br> Length: ${phoneLength} characters`;
        }
--------------------------------------------------------------------------------------------------------------------------------*/



/*-----------------------------------------------------------------------------------------------------------------------------
city_arr=["Test"]
console.log(city_arr);
document.getElementById("cOutp2").innerText = "Content : " +city_arr.join(", "); 

function citcheck() {

    x = prompt("Enter City Name: ");
    flag=false;

for (i=0; i<city_arr.length;i++) {

res="";

    if (city_arr[0]==x) {
        flag=true;
        res = "City A found.";
    }

    else if (city_arr[1]==x) {
        flag=true;
        res = "City C found.";
    }

    else if (city_arr[2]==x) {
        flag=true;
        res = "City C found.";
    }

    else if (city_arr[3]==x) {
        flag=true;
        res = "City D found.";
    }

    dispM("cOutp1",res);

}

if (!flag) {
    dispM("cOutp1","FLAG RAISED! \nCOMPLETE LOOP RUN. CITY NOT FOUND IN ARRAY : " +JSON.stringify(city_arr));
}


}
--------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------------
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // For Rand Index
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let arr = [1, 2, 3, 4, 5];
let shuffledArr = shuffleArray([...arr]); // Use "..." spread operator to keep original array intact

console.log("Original Array:", arr);        // Output: [1, 2, 3, 4, 5]
console.log("Shuffled Array:", shuffledArr); // Output: [random]
--------------------------------------------------------------------------------------------------------------------------------*/


