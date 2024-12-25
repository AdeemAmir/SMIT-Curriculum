/*************************************************
Code by Adeem Amir
*************************************************/
function dispMd(...a) {
    const x = a.join(' ');
    document.getElementById("output").innerHTML = x;
    document.getElementById("output").classList.add('active');
}

function dispMdx(...a) {
    const x = a.join(' ');
    document.getElementById("output").innerHTML += x;
    document.getElementById("output").classList.add('active');
}

function dispM(a, b) {
    document.getElementById(a).innerHTML = b;
    document.getElementById(a).classList.add('active');
}

function dispMx(a, b) {
    document.getElementById(a).innerHTML += b;
    document.getElementById(a).classList.add('active');
}

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}

const Btn = {};

function createButtons(n) {
    const container = document.getElementById("button-container");
    const fragment = document.createDocumentFragment();

    for (let i = 0; i <= n; i++) {
        const button = document.createElement("button");
        button.id = "T"+i;
        button.innerText = "T"+i;
        Btn["T" + i] = button;
        fragment.appendChild(button);
    }
    container.appendChild(fragment);
}//createButtons(n);
createButtons(30);

function EdBtnTxt(buttonId, newText) {
    const button = Btn[buttonId];
    if (button) {
        button.innerText = newText;
    } else {
        console.error(`Button with ID ${buttonId} not found`);
    }
}

// T1: Arrow Function
function T1() {
    try {
        const greet = (x) =>`Hello, ${x}!`;
        dispMd(greet("Adeem"));

        const calcArea = (l,w) => {
            const area = l*w;
            return area;
        }
        dispMdx("\n"+calcArea(5,6));

        const prHi = () => dispMdx("\n"+"Hi!");
        prHi();

    } catch (error) {
        console.log("Error: ", error)   
    }
}
document.getElementById("T1").addEventListener("click", function() {T1();});
EdBtnTxt("T1", "T1. Arrow Function");

// T2: .reduce
function T2() {
    try {
        const numbers = [1, 2, 3, 4, 5];
        // Arrow function to calculate the sum of array elements
        const sum = numbers.reduce((total, num) => total + num, 0);
        dispMd("Sum of array elements: ", sum);
    } catch (error) {
        dispMd("Error: ", error);
    }
}
document.getElementById("T2").addEventListener("click", function () { T2(); });
EdBtnTxt("T2","T2. ArrFn: Arr. Reduce")

// T3: .filter
function T3() {
    try {
        const numbers = [1, 2, 3, 4, 5];
        // Arrow function to filter out even numbers
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        dispMd("Filtered even numbers: ", evenNumbers);
    } catch (error) {
        dispMd("Error: ", error);
    }
}
document.getElementById("T3").addEventListener("click", function () { T3(); });
EdBtnTxt("T3","T3. Filter: Even")

// T4: .map
function T4() {
    try {
        const numbers = [1, 2, 3, 4, 5];
        // Arrow function to square each number in the array
        const squaredNumbers = numbers.map(num => num ** 2);
        console.log("Squared numbers: ", squaredNumbers);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T4").addEventListener("click", function () { T4(); });
EdBtnTxt("T4","T4. Map: Squared");


function T5() {
    try {

    } catch (error) {
        console.log("Error: ", error)   
    }
}
document.getElementById("T5").addEventListener("click", function() {T5();});
EdBtnTxt("T5","T5. {Empty}");


// T6: Using .reduce to find the product of an array
function T6() {
    try {
        const numbers = [1, 2, 3, 4, 5];
        const product = numbers.reduce((total, num) => total * num, 1);
        console.log("Product of array elements: ", product);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T6").addEventListener("click", function () { T6(); });
EdBtnTxt("T6","T6. Arr. Reduce")

// T7: Using .filter to find numbers greater than 3
function T7() {
    try {
        const numbers = [1, 2, 3, 4, 5];
        const greaterThanThree = numbers.filter(num => num > 3);
        console.log("Numbers greater than 3: ", greaterThanThree);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T7").addEventListener("click", function () { T7(); });
EdBtnTxt("T7","Fliter: +3");

// T8: Using .map to double each number in the array
function T8() {
    try {
        const numbers = [1, 2, 3, 4, 5];
        const doubledNumbers = numbers.map(num => num * 2);
        console.log("Doubled numbers: ", doubledNumbers);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T8").addEventListener("click", function () { T8(); });
EdBtnTxt("T8","Map: Double");

// T9: Using .sort to sort numbers in descending order
function T9() {
    try {
        const numbers = [5, 3, 8, 1, 2];
        const sortedNumbers = numbers.sort((a, b) => b - a);
        console.log("Numbers sorted in descending order: ", sortedNumbers);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T9").addEventListener("click", function () { T9(); });

// T10: Using .find to locate the first number greater than 2
function T10() {
    try {
        const numbers = [1, 2, 3, 4, 5];
        const firstGreaterThanTwo = numbers.find(num => num > 2);
        console.log("First number greater than 2: ", firstGreaterThanTwo);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T10").addEventListener("click", function () { T10(); });

// T11: Using .map to add 10 to each number
function T11() {
    try {
        const numbers = [1, 2, 3, 4, 5];
        const addedTen = numbers.map(num => num + 10);
        console.log("Each number added by 10: ", addedTen);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T11").addEventListener("click", function () { T11(); });

// T12: Using .filter to find numbers that are odd
function T12() {
    try {
        const numbers = [1, 2, 3, 4, 5];
        const oddNumbers = numbers.filter(num => num % 2 !== 0);
        console.log("Odd numbers: ", oddNumbers);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T12").addEventListener("click", function () { T12(); });

// T13: Using .reduce to find the average of an array
function T13() {
    try {
        const numbers = [1, 2, 3, 4, 5];
        const sum = numbers.reduce((total, num) => total + num, 0);
        const average = sum / numbers.length;
        console.log("Average of numbers: ", average);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T13").addEventListener("click", function () { T13(); });

// T14: Using .sort to sort strings alphabetically
function T14() {
    try {
        const fruits = ["banana", "apple", "orange", "pear"];
        const sortedFruits = fruits.sort();
        console.log("Sorted fruits alphabetically: ", sortedFruits);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T14").addEventListener("click", function () { T14(); });

// T15: Using .find to find a number divisible by 3
function T15() {
    try {
        const numbers = [1, 2, 3, 4, 5];
        const divisibleByThree = numbers.find(num => num % 3 === 0);
        console.log("First number divisible by 3: ", divisibleByThree);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T15").addEventListener("click", function () { T15(); });

// T16: Using .map to convert an array of strings to uppercase
function T16() {
    try {
        const words = ["hello", "world", "javascript"];
        const uppercasedWords = words.map(word => word.toUpperCase());
        console.log("Uppercased words: ", uppercasedWords);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T16").addEventListener("click", function () { T16(); });

// T17: Using .filter to remove non-numeric values
function T17() {
    try {
        const mixedArray = [1, "hello", 3, "world", 5];
        const numbersOnly = mixedArray.filter(item => typeof item === 'number');
        console.log("Numbers only: ", numbersOnly);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T17").addEventListener("click", function () { T17(); });

// T18: Using .reduce to flatten a nested array
function T18() {
    try {
        const nestedArray = [[1, 2], [3, 4], [5, 6]];
        const flattenedArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
        console.log("Flattened array: ", flattenedArray);
    } catch (error) {
        console.log("Error: ", error);
    }
}
document.getElementById("T18").addEventListener("click", function () { T18(); });

function T19() {
    try {
        function* infNums() {
            let num = 0;
            while(true) {
                num++;
                return num;
            }
        }
        
        
        const NumGen = infNums();
        console.log(NumGen.next());
    } catch (error) {
        console.log("Error: ", error)   
    }
}
document.getElementById("T19").addEventListener("click", function() {T19();});
EdBtnTxt("T19","GenFn Brok");

//Object Literal, Object Method
function T20() {
    try {
        const P = {
        greet1() {dispMd("Henro!");},
        greet2() {dispMdx("\nHeron!");}
        }
        P.greet1(),P.greet2();
    } catch (error) {
        console.log("Error: ", error)   
    }
}
document.getElementById("T20").addEventListener("click", function() {T20();});

function T21() {
    try {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        
        const merArr = [...arr1, ...arr2];
        dispMd(merArr);
        
    } catch (error) {
        dispMd("Error: ", error)   
    }
}
document.getElementById("T21").addEventListener("click", function() {T21();});
EdBtnTxt("T21","Spread: Merged Array")

function T22() {
    try {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3, d: 4 };
        
        const merObj = { ...obj1, ...obj2 };
        
        dispMd(merObj);
    } catch (error) {
        dispMd("Error: ", error)   
    }
}
document.getElementById("T22").addEventListener("click", function() {T22();});
EdBtnTxt("T22","Spread: Merged Obj.")

function T23() {
    try {
        function sum(...numbers) {
            return numbers.reduce((total, num) => total + num, 0);
        }
        
        dispMd(sum(1, 2, 3));
        dispMdx("\n"+sum(5, 10, 15, 20));
    } catch (error) {
        dispMd("Error: ", error)   
    }
}
document.getElementById("T23").addEventListener("click", function() {T23();});
EdBtnTxt("T23","Rest: Summing")

function T24() {
    try {
        const [a, b, ...z] = [1, 2, 3, 4, 99];

        dispMd(a);
        dispMdx("\n"+b);
        dispMdx("\n"+z);
        
    } catch (error) {
        console.log("Error: ", error)   
    }
}
document.getElementById("T24").addEventListener("click", function() {T24();});
EdBtnTxt("T24","Dest by Rest");

function T25() {
    try {
        const dynKey = "age";

        const person = {
            name: "Alice",
            [dynKey]: 30,
        };
        
        dispMd(JSON.stringify(person));
        
    } catch (error) {
        dispMd("Error: ", error)   
    }
}
document.getElementById("T25").addEventListener("click", function() {T25();});
EdBtnTxt("T25","Obj w\\ Dyn. Key");

function T26() {
    try {

    } catch (error) {
        console.log("Error: ", error)   
    }
}
document.getElementById("T26").addEventListener("click", function() {T26();});

function T27() {
    try {

    } catch (error) {
        console.log("Error: ", error)   
    }
}
document.getElementById("T27").addEventListener("click", function() {T27();});

function T28() {
    try {

    } catch (error) {
        console.log("Error: ", error)   
    }
}
document.getElementById("T28").addEventListener("click", function() {T28();});

function T29() {
    try {

    } catch (error) {
        console.log("Error: ", error)   
    }
}
document.getElementById("T29").addEventListener("click", function() {T29();});

function T30() {
    try {

    } catch (error) {
        console.log("Error: ", error)   
    }
}
document.getElementById("T30").addEventListener("click", function() {T30();});



/*
function Tn() {
    try {

    } catch (error) {
        console.log("Error: ", error)   
    }
}
document.getElementById("Tn").addEventListener("click", function() {Tn();});
*/
