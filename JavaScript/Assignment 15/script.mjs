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

function flipCase(str) {
    let flipped = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            flipped += char.toLowerCase();
        } else {
            flipped += char.toUpperCase();
        }
    }

    return flipped;
}

function flipcase21() {
	//port flipCase to this proj :)
	dispM("cOutp21","Flipped Case: "+flipCase(document.getElementById("stringInp").value));
}

function lengthAndExtract() {
    const inputString = document.getElementById('inputString').value;
    const fromIndex = Number(document.getElementById('fromIndex').value);
    const toIndex = Number(document.getElementById('toIndex').value);
    const length = inputString.length;
    let extractedPart = "";

    if (fromIndex >= 0 && toIndex <= length && fromIndex < toIndex) {
        extractedPart = inputString.substring(fromIndex, toIndex);
    } else {
        extractedPart = "Invalid indices.";
    }

    console.log(`Length of input: ${length}`);
    console.log(`Extracted part: ${extractedPart}`);
    dispM("cOutp22", `Length of input = ${length}\nExtracted part from index ${fromIndex} to ${toIndex} = ${extractedPart}`);
}

function segmentFinderAndReplace() {
    const inputString = document.getElementById('replaceString').value;
    const segmentToFind = document.getElementById('segmentToFind').value;
    const segmentToReplace = document.getElementById('segmentToReplace').value;

    const updatedString = inputString.replace(new RegExp(segmentToFind, 'g'), segmentToReplace);
    
    console.log(`Original String: ${inputString}`);
    console.log(`Updated String: ${updatedString}`);
    dispM("cOutp25", `Original String: ${inputString}\nUpdated String: ${updatedString}`);
}

        function dispM(a, b) {
            document.getElementById(a).innerHTML = b;
            document.getElementById(a).classList.add('active');
        }

        function findCharacter() {
            const inputString = document.getElementById('charInputString').value;
            const charToFind = document.getElementById('charToFind').value;
            const indices = [];

            for (let i = 0; i < inputString.length; i++) {
                if (inputString[i] === charToFind) {
                    indices.push(i);
                }
            }

            if (indices.length > 0) {
                dispM("cOutp24", `Character "${charToFind}" found at indices: ${indices.join(', ')}`);
            } else {
                dispM("cOutp24", `Character "${charToFind}" not found.`);
            }
        }

        function segmentFinderAndReplaceFirst() {
            const inputString = document.getElementById('replaceStringFirst').value;
            const segmentToFind = document.getElementById('segmentToFindFirst').value;
            const segmentToReplace = document.getElementById('segmentToReplaceFirst').value;

            const updatedString = inputString.replace(segmentToFind, segmentToReplace);
            dispM("cOutp23", `Original String: ${inputString}\nUpdated String: ${updatedString}`);
        }

        function roundNumber() {
            const numberToRound = parseFloat(document.getElementById('numberToRound').value);
            const method = document.getElementById('roundMethod').value;
            let result;

            switch (method) {
                case 'floor':
                    result = Math.floor(numberToRound);
                    break;
                case 'ceil':
                    result = Math.ceil(numberToRound);
                    break;
                case 'round':
                    result = Math.round(numberToRound);
                    break;
                default:
                    result = "Invalid method.";
            }

            dispM("cOutp26", `Original Number: ${numberToRound}\nRounded Result: ${result}`);
        }

        let randomNumber;

        function generateRandomNumber() {
            randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
            dispM("cOutp27", "Random number generated. Try to guess it!");
        }

        function guessNumber() {
            const userGuess = parseInt(document.getElementById('userGuess').value);

            if (userGuess === randomNumber) {
                dispM("cOutp27", `Congratulations! ${userGuess} is correct!`);
            } else if (userGuess < randomNumber) {
                dispM("cOutp27", "Too low! Try again.");
            } else {
                dispM("cOutp27", "Too high! Try again.");
            }
        }

        function wordToNumber() {
            const word = document.getElementById('wordNumber').value.toLowerCase();
            const wordMap = {
                "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4,
                "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9,
                "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13,
                "fourteen": 14, "fifteen": 15, "sixteen": 16, "seventeen": 17,
                "eighteen": 18, "nineteen": 19, "twenty": 20, "thirty": 30,
                "forty": 40, "fifty": 50, "sixty": 60, "seventy": 70,
                "eighty": 80, "ninety": 90, "hundred": 100
            };

            let result = 0;

            const parts = word.split(' ');
            for (const part of parts) {
                if (wordMap[part] !== undefined) {
                    result += wordMap[part];
                }
            }

            dispM("cOutp28", `Word Number: ${word}\nConverted Integer: ${result}`);
        }

        function stringToNumberAndBack() {
	    const inputString = document.getElementById('stringToConvert').value;
	    const number = parseFloat(inputString);
	    const multiplier = parseFloat(document.getElementById('multiplierInput').value); // Get multiplier from input

	    if (isNaN(number || multiplier)) {
	        dispM("cOutp29", "Invalid number entered.");
	        return;
	    }

	    const operationResult = number * multiplier;
	    const resultString = operationResult.toString();

	    dispM("cOutp29", `Original String: "${inputString}"\nConverted Number: ${number}\nAfter Multiplication: ${operationResult}\nBack to String: "${resultString}"`);
        }


        function addTax() {
            const baseValue = parseFloat(document.getElementById('baseValue').value);
            const taxPercentage = parseFloat(document.getElementById('taxPercentage').value);
            const decimalPlaces = parseInt(document.getElementById('decimalPlaces').value);

            const taxAmount = baseValue * (taxPercentage / 100);
            const totalValue = baseValue + taxAmount;
            const formattedValue = totalValue.toFixed(decimalPlaces);

            dispM("cOutp30", `Base Value: ${baseValue}\nTax Percentage: ${taxPercentage}%\nTotal Value (fixed to ${decimalPlaces} decimals): ${formattedValue}`);
        }

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}