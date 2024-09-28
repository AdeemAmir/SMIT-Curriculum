/*************************************************
Code by Adeem Amir
*************************************************/
function dispM(id, message) {
    const outputElement = document.getElementById(id);
    outputElement.innerText += message;
    outputElement.classList.add('active');
}
/*
dispM has been modified for Q9 causing unintended behavior une01
une01: pressing answer multiple times, duplicated the output.
possible hotfix: have Answer button f{cls} on trigger.
current workaround: dont press answer multiple times.
*/



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
    dispM("output1", "JS literal Notation array declared: " + JSON.stringify(studentNames));
    //JSON.stringify() <-- useful for servers and stuff.
}

// 2. Declare an Empty Array Using Object Notation
function declareEmptyObjectArray() {
    let studentNames = new Array();
    dispM("output2", "JS Object Notation array declared: " + JSON.stringify(studentNames));
}

// 3. Declare and Initialize a Strings Array
function initializeStringsArray() {
    let stringsArray = ["Adeem", "Shahb", "Aliyan"];
    dispM("output3", "Strings Array: " + JSON.stringify(stringsArray));
}

// 4. Declare and Initialize a Numbers Array
function initializeNumbersArray() {
    let numbersArray = [16050, 271965, 3, 4, 5];
    dispM("output4", "Numbers Array: " + JSON.stringify(numbersArray));
}

// 5. Declare and Initialize a Boolean Array
function initializeBooleanArray() {
    let booleanArray = [true, ,true,false, true];
    dispM("output5", "Boolean Array: " + JSON.stringify(booleanArray));
}

// 6. Declare and Initialize a Mixed Array
function initializeMixedArray() {
    let mixedArray = ["Adeem", 20, true, null];
    dispM("output6", "Mixed Array: " + JSON.stringify(mixedArray));
}

// 7. Education Qualifications in Pakistan
function showQualifications() {
    const qf = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
    dispM("output7", "Qualifications: \n1) " + qf[0]
			+ "\n2) " + qf [1]
			+ "\n3) " + qf [2]
			+ "\n4) " + qf [3]
			+ "\n5) " + qf [4]
			+ "\n6) " + qf [5]
			+ "\n7) " + qf [6]
			+ "\n8) " + qf [7]);
    //qualifications.join(", ")
}

// 8. Store Student Names and Scores
function storeStudentScores() {
    let studentNames = ["Adeem", "Astrid", "Alice"];
    let scores = [99, 98, 97];
    let totalMarks = 100;
    let output = ""; // <-- needed to be declared in loop below.

    for (let i = 0; i < studentNames.length; i++) {
        let percentage = (scores[i] / totalMarks) * 100;
        output += `Score of ${studentNames[i]} is ${scores[i]}, Percentage: ${percentage.toFixed(2)}%\n`;
    }

    dispM("output8", output);
}

// 9. Color Names Array Manipulation
let colors = ["Red", "Green", "Blue"];

function showColorManipulation() {
    const container = document.getElementById("colorManipulationContainer");
    container.style.display = "block";
    dispM("colorOutput", "\nColor Array: " + colors.join(", "));

    document.getElementById("indexInput").value = 0; // a{I} = 0
    document.getElementById("countInput").value = 1; // # = 1
}

function addColorToStart() {
    const colorInput = document.getElementById("colorInput").value;
    if (colorInput) {
        colors.unshift(colorInput); //.unshift adds at start.
        dispM("colorOutput", `\nAdded "${colorInput}" to the start at index 0.`);
        updateColorDisplay();
    }
}

function addColorToEnd() {
    const colorInput = document.getElementById("colorInput").value;
    if (colorInput) {
        colors.push(colorInput); // push\pop
        dispM("colorOutput", `\nAdded "${colorInput}" to the end at index ${colors.length - 1}.`);
        updateColorDisplay();
    }
}

function addColorAtIndex() {
    const index = parseInt(document.getElementById("indexInput").value);
    const colorInput = document.getElementById("colorInput").value;
    if (!isNaN(index) && colorInput) {
        colors.splice(index, 0, colorInput);
        dispM("colorOutput", `\nAdded "${colorInput}" at index ${index}.`);
        updateColorDisplay();
    }
}

function deleteFirstColor() {
    if (colors.length > 0) {
        const removedColor = colors.shift();
        dispM("colorOutput", `\nRemoved "${removedColor}" from the start.`);
        updateColorDisplay();
    } else {
        dispM("colorOutput", "\nNo colors to remove from the start.");
    }
}

function deleteLastColor() {
    if (colors.length > 0) {
        const removedColor = colors.pop();
        dispM("colorOutput", `\nRemoved "${removedColor}" from the end.`);
        updateColorDisplay();
    } else {
        dispM("colorOutput", "\nNo colors to remove from the end.");
    }
}

function deleteColorsAtIndex() {
    const index = parseInt(document.getElementById("indexInput").value);
    const countToDelete = parseInt(document.getElementById("countInput").value);
    if (!isNaN(index) && !isNaN(countToDelete) && index < colors.length) {
        const removedColors = colors.splice(index, countToDelete);
        dispM("colorOutput", `\nRemoved ${removedColors.join(", ")} from index ${index}.`);
        updateColorDisplay();
    } else {
        dispM("colorOutput", "\nInvalid index or count for deletion.");
        updateColorDisplay();
    }
}

function clearColors() {
    colors = []; //ez
    dispM("colorOutput", "\nCleared all colors.");
    updateColorDisplay();
}

function updateColorDisplay() {
    const colorOutput = document.getElementById("colorOutput");
    dispM("colorOutput", "\n\nColor Array: " + colors.join(", "));
    colorOutput.scrollTop = colorOutput.scrollHeight; //scroll to latest upd8.
}

// 10. Sort Student Scores
function descender(a,b) {
	return b-a;}
	
function sortStudentScores() {
    let scores = [320, 230, 480, 320, 120];
    let AscScr = [...scores].sort((a, b) => a - b);
    let DescScr = [...scores].sort(descender);
    //bruh... sort fn sorts original array.
    // [...scores] this makes a dupe.
    // a = scores; also doesn't work.
    // somehow links to original.
    dispM("output10", "Original Scores:\t " + scores.join(", ")
		+ "\nAscending Scores:\t " + AscScr.join(", ")
		+ "\nDescending Scores:\t " + DescScr.join(", ")
		);
}

// 11. Copy City Names
function copyCityNames() {
    let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    let selectedCitiesq = cities.slice(0, 3);
    let selectedCitiesp = cities.slice(2, 4);
    //[...dupe] is not needed here.
    dispM("output11", "Cities List: \n" + cities.join(", ")
		+ "\n\nSelected Cities List: (a/c to Question)\n" + selectedCitiesq.join(", ")
		+ "\n\nSelected Cities List: (a/c to Picture)\n" + selectedCitiesp.join(", ")
		);
}

// 12. Create String from Array
function createStringFromArray() {
    let arr = ["This ", "is ", "my ", "cat"];
    let res = arr.join("");
    //[...dupe] is not needed here.
    dispM("output12", "Array: \n"+arr/*.join(", ")*/ +"\n\nString: \n" + res);
}

// 13. FIFO Array
function fifoArray() {
    let fifo = [];
    fifo.push("keyboard");
    fifo.push("mouse");
    fifo.push("printer");
    fifo.push("monitor");
    
    dispM("output13", "Devices:\n"+fifo+"\n");

    // Loop through the fifo array in reverse
    for (let i = fifo.length - 1; i >= 0; i--) 
        dispM("output13", /*fifo[${i}]:*/`\nOut: \n${fifo[i]}`);
}

// 14. LIFO Array
function lifoArray() {
    let lifo = [];
    lifo.push("keyboard");
    lifo.push("mouse");
    lifo.push("printer");
    lifo.push("monitor");

    dispM("output13", "Devices:\n" + lifo.join(", "));

    dispM("output13", `\n\nBy Reverse Looping:`);
    for (let i = lifo.length - 1; i >= 0; i--) {
        dispM("output13", `\nOut:\n${lifo[i]}`);
    }
    
    lifoed = [...lifo].reverse().join(", ");
    dispM("output13", `\n\nBy Reverseing Array:`);
    for (let i = lifo.length - 1; i >= 0; i--) 
        dispM("output13", /*lifo[${i}]:*/`\nOut: \n${lifo[i]}`);
}

// 15. Phone Manufacturers Dropdown
function showPhoneManufacturers() {
    const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    const selectElement = document.getElementById("DispRel");
    selectElement.style.display = "block";
    selectElement.classList.add("active");
    
    /*
    const outputDiv = document.getElementById("output15");
    outputDiv.style.backgroundColor = "black";
    */
}