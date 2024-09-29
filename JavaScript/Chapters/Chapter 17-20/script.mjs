/*************************************************
Code by Adeem Amir
*************************************************/
function dispM(a, b) {
    document.getElementById(a).innerText = b;
    document.getElementById(a).classList.add('active');
}
function dispMx(a,b) {
  document.getElementById(a).innerHTML += b;
  document.getElementById(a).classList.add('active');
}

// Function to declare and initialize an empty multidimensional array
function empty2DArray() {
    let arr = [[]];
    dispM("cOutp1", JSON.stringify(arr));
}

// Function to declare and initialize a multidimensional array
function initializeMatrix() {
    let matrix = [
      [0, 1, 2, 3],
      [1, 0, 1, 2],
      [2, 1, 0, 1]
    ];
    dispM("cOutp2", `${matrix[0].join(" ")}\n${matrix[1].join(" ")}\n${matrix[2].join(" ")}`);
}

// Function to print counting from 1 to 10
function printCounting() {
    let counting = [];
    for (let i = 0; i < 10; i++) {
      counting.push(i+1);
      dispMx("cOutp3",counting[i]+"\n");
    }
}

// Function to print multiplication table of any number
function multiplicationTable() {
    let num = parseInt(prompt("Enter a number for multiplication table:"), 10);
    let length = parseInt(prompt("Enter the length of the table:"), 10);
    let table = [];
    
    for (let i = 1; i <= length; i++) {
      table.push(`${num} x ${i} = ${num * i}`);
    }
    
    dispM("cOutp4", `Multiplication table of ${num}\nLength: ${length}\n\n`+table.join("\n"));
}

// Function to print items of the fruits array
function printFruits() {
    const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    
    for (i=0;i<fruits.length;i++) {
      dispMx("cOutp5", `Element at index ${i} is ${fruits[i]}\n`);
    }
    
}

// Function to generate various series
function generateSeries() {
    let counting = Array.from({length:15}, (_, i) => i + 1).join(", ");
    let reverseCounting = Array.from({length:10}, (_, i) => 10 - i).join(", ");
    let evenNumbers = Array.from({length:11}, (_, i) => i * 2).join(", ");
    let oddNumbers = Array.from({length:10}, (_, i) => i * 2 + 1).join(", ");
    //let seriesK = Array.from({length:10}, (_, i) => 2+i * 2).join("k, ")+"k"; //this also works.
    let seriesK = Array.from({ length: 10 }, (_, i) => (i + 1) * 2 + "k").join(", ");

    dispM("cOutp6", `Counting:\n${counting}\n\n`+
    `Reverse Counting:\n${reverseCounting}\n\n`+
    `Even:\n${evenNumbers}\n\n`+
    `Odd:\n${oddNumbers}\n\n`+
    `Series:\n${seriesK}`);
}

// Function to search for an item in an array
function searchInArray() {
    const A = ["cake", "apple pie", "cookie", "chips", "patties"];
    const itemToSearch = prompt("Welcome to Heaven Bakery. What do you want to order sir/ma'am?");
    
    if (A.includes(itemToSearch)) {
      /*dispM("cOutp7", `${itemToSearch} is <span style="font-weight: bold">available</span> at ${A.indexOf(itemToSearch)} in our bakery.`);*/
      document.getElementById("cOutp7").innerHTML = `${itemToSearch} is <span style="font-weight: bold">available</span> at index ${A.indexOf(itemToSearch)} in our bakery.`;
    } else {
      /*dispM("cOutp7", `${itemToSearch} is not found in the list.`);*/
      document.getElementById("cOutp7").innerHTML = `${itemToSearch} is <span style="font-weight: bold">not available</span> at index ${A.indexOf(itemToSearch)} in our bakery.`;
    }
    document.getElementById("cOutp7").classList.add('active');
}

// Function to identify the largest number in an array
function findLargestNumber() {
    const A = [24, 53, 78, 91, 12];
    const largest = Math.max(...A);
    dispM("cOutp8", `The largest number is ${largest}.`);
}

// Function to identify the smallest number in an array
function findSmallestNumber() {
    const A = [24, 53, 78, 91, 12];
    const smallest = Math.min(...A);
    dispM("cOutp9", `The smallest number is ${smallest}.`);
}

// Function to print multiples of five from range of one to hundred
function printMultiplesOfFive() {
    let multiplesOfFive = [];
    
    for (let i = 1; i <=100; i++) {
      if (i % 5 ===0) multiplesOfFive.push(i);
   }
   dispM("cOutp10", multiplesOfFive.join(", "));
}

// Utility function to display output
function dispM(a, b) {
   document.getElementById(a).innerText = b;
   document.getElementById(a).classList.add('active');
}