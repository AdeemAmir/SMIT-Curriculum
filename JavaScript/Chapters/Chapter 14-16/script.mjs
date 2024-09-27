/*************************************************
Code by Adeem Amir
*************************************************/
function dispM(id, message) {
    const outputElement = document.getElementById(id);
    outputElement.innerText = message;
    outputElement.classList.add('active');
}

/* 
Struct, Dict similars
//Object | DICT
cosnt a = {
    z: 'asd';
    x: 123;
    c: false;
}; //priny by a.z , a.x etc.

//Classes
class Person {
    constructor (a,b,c) {
        this.a=a;
        this.b=b;
        this.c=c;
    }
}
const Person = new Person("asd",20,false);
console.log(person.a);

//Map


*/

// Question 01
function declareEmptyStudentArray() {
    const studentNames = [];
    dispM("output1", "Student names array declared: " + studentNames);
    //JSON.stringify() <-- useful for servers and stuff.
}

// 2. Declare an Empty Array Using Object Notation
function declareEmptyObjectArray() {
    let studentNames = new Array();
    dispM("output2", "Student names object array declared: " + JSON.stringify(studentNames));
}

// 3. Declare and Initialize a Strings Array
function initializeStringsArray() {
    let stringsArray = ["Alice", "Bob", "Charlie"];
    dispM("output3", "Strings Array: " + JSON.stringify(stringsArray));
}

// 4. Declare and Initialize a Numbers Array
function initializeNumbersArray() {
    let numbersArray = [1, 2, 3, 4, 5];
    dispM("output4", "Numbers Array: " + JSON.stringify(numbersArray));
}

// 5. Declare and Initialize a Boolean Array
function initializeBooleanArray() {
    let booleanArray = [true, false, true];
    dispM("output5", "Boolean Array: " + JSON.stringify(booleanArray));
}

// 6. Declare and Initialize a Mixed Array
function initializeMixedArray() {
    let mixedArray = ["John", 25, true, null];
    dispM("output6", "Mixed Array: " + JSON.stringify(mixedArray));
}

// 7. Education Qualifications in Pakistan
function showQualifications() {
    let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
    dispM("output7", "Qualifications: " + qualifications.join(", "));
}

// 8. Store Student Names and Scores
function storeStudentScores() {
    let studentNames = ["Alice", "Bob", "Charlie"];
    let scores = [450, 370, 490]; // Example scores
    let totalMarks = 500;
    let output = "Scores & Percentages:\n";

    for (let i = 0; i < studentNames.length; i++) {
        let percentage = (scores[i] / totalMarks) * 100;
        output += `${studentNames[i]}: Score = ${scores[i]}, Percentage = ${percentage.toFixed(2)}%\n`;
    }

    dispM("output8", output);
}

// 9. Color Names Array Manipulation
function colorNamesManipulation() {
    let colors = ["Red", "Green", "Blue"];
    dispM("output9", "Initial Colors: " + colors.join(", "));

    let colorToAddStart = prompt("Enter a color to add to the beginning:");
    colors.unshift(colorToAddStart);
    dispM("output9", "After adding to the start: " + colors.join(", "));

    let colorToAddEnd = prompt("Enter a color to add to the end:");
    colors.push(colorToAddEnd);
    dispM("output9", "After adding to the end: " + colors.join(", "));

    colors.unshift("Purple", "Yellow");
    dispM("output9", "After adding two colors to the start: " + colors.join(", "));

    colors.shift();
    dispM("output9", "After deleting the first color: " + colors.join(", "));

    colors.pop();
    dispM("output9", "After deleting the last color: " + colors.join(", "));

    let indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
    let colorToAdd = prompt("Enter the color:");
    colors.splice(indexToAdd, 0, colorToAdd);
    dispM("output9", "After adding color at index " + indexToAdd + ": " + colors.join(", "));

    let indexToDelete = parseInt(prompt("At which index do you want to delete colors?"));
    let countToDelete = parseInt(prompt("How many colors do you want to delete?"));
    colors.splice(indexToDelete, countToDelete);
    dispM("output9", "After deleting colors from index " + indexToDelete + ": " + colors.join(", "));
}

// 10. Sort Student Scores
function sortStudentScores() {
    let scores = [450, 370, 490, 320, 460];
    scores.sort((a, b) => a - b);
    dispM("output10", "Sorted Scores: " + scores.join(", "));
}

// 11. Copy City Names
function copyCityNames() {
    let cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Multan"];
    let selectedCities = cities.slice(0, 3);
    dispM("output11", "Selected Cities: " + selectedCities.join(", "));
}

// 12. Create String from Array
function createStringFromArray() {
    let arr = ["This ", "is ", "my ", "cat"];
    let result = arr.join("");
    dispM("output12", "Combined String: " + result);
}

// 13. FIFO Array
function fifoArray() {
    let fifo = [];
    fifo.push("First");
    fifo.push("Second");
    fifo.push("Third");
    dispM("output13", "FIFO Array: " + fifo.join(", "));
}

// 14. LIFO Array
function lifoArray() {
    let lifo = [];
    lifo.push("First");
    lifo.push("Second");
    lifo.push("Third");
    dispM("output14", "LIFO Array: " + lifo.reverse().join(", "));
}

// 15. Phone Manufacturers Dropdown
function showPhoneManufacturers() {
    const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    let dropdown = "<select>";
    manufacturers.forEach(manufacturer => {
        dropdown += `<option value="${manufacturer}">${manufacturer}</option>`;
    });
    dropdown += "</select>";
    dispM("output15", dropdown);
}