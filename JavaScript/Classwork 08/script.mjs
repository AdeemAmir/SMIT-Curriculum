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

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}

import { dbg, dbgLogging, activateDebugging } from '../CommonJS/debug.mjs';
activateDebugging(true)
dbg("test")

function Concept1(){
let a= +"5";
let b=5;
let c=a+b;
console.log("Printing +\"5\" and 5");
console.log(c);
}

//JS Function
function Concept2(){
let person = {
    name: "Nadir",
    cnic: 1234567890,
    color_eyes: "light brown",
    canSpeakEnglish: false,
    speak: function(sen) {
        console.log(sen +this.name);
    }
};

console.log("Type of JS FN: " + person);
person.speak("Hello ");
};

//Constructor Function Instances
function Concept3() {
function Person(name, cnic, color_eyes, canSpeakEnglish) {
    this.name = name;
    this.cnic = cnic;
    this.color_eyes = color_eyes;
    this.canSpeakEnglish = canSpeakEnglish;

    this.speak = function(sen) {
        console.log(sen + this.name);
    };
}

let person1 = new Person("Nadir", 1234567890, "light brown", false);
let person2 = new Person("Ayesha", 9876543210, "dark brown", true);
let person3 = new Person("Ali", 1122334455, "blue", true);

console.log("Type of Cons. FN: " + person1);
person1.speak("Hello, my name is ");
person2.speak("Hi, I'm ");
person3.speak("Hey, it's ");
}

// Factory Function
function Concept4() {
function createPerson(name, cnic, color_eyes, canSpeakEnglish) {
    return {
        name: name,
        cnic: cnic,
        color_eyes: color_eyes,
        canSpeakEnglish: canSpeakEnglish,

        speak: function(sen) {
            console.log(sen + this.name);
        }
    };
}

let person1 = createPerson("Nadir", 1234567890, "light brown", false);
let person2 = createPerson("Ayesha", 9876543210, "dark brown", true);
let person3 = createPerson("Ali", 1122334455, "blue", true);

console.log("Type of Fact. FN: " + person1);
person1.speak("Hello, my name is ");
person2.speak("Hi, I'm ");
person3.speak("Hey, it's ");
}


function Concept5() {
class Person {
    constructor(name, cnic, color_eyes, canSpeakEnglish) {
        this.name = name;
        this.cnic = cnic;
        this.color_eyes = color_eyes;
        this.canSpeakEnglish = canSpeakEnglish;
    }

    speak(sen) {
        console.log(sen + this.name);
    }
}

let person1 = new Person("Nadir", 1234567890, "light brown", false);
let person2 = new Person("Ayesha", 9876543210, "dark brown", true);
let person3 = new Person("Ali", 1122334455, "blue", true);

console.log("Type of ES6 Class: " + person1);
person1.speak("Hello, my name is ");
person2.speak("Hi, I'm ");
person3.speak("Hey, it's ");

}

function abc(a, b) {
    let std = {
      name: a,
      test: b
    };
  
    // Example of accessing properties of std
    console.log("Name:", std.name);
    console.log("Test:", std.test);
  }
  
  // Call the function with parameters
  abc("John", "Math");

  function avc() {
    let std = {
      name: prompt("Enter your name:")
    };
  
    // Output the result to the console or alert the user
    console.log("Name:", std.name);  // Logs the name entered by the user
    alert("Your name is: " + std.name);  // Optionally, show an alert with the entered name
  }
  
  avc(); 