/*************************************************
Code by Adeem Amir
*************************************************/
        // 1. Add Two Numbers
        function addNumbers(num1,num2) {
            return `The Sum of ${num1} & ${num2} is: ` + (num1 + num2);
        }
        document.getElementById('cOutp1').innerHTML = addNumbers(3,5);
        

        // 2. Perform Basic Operations
        function math_Plus(num1,num2) {
            return `The Sum of ${num1} & ${num2} is: ` + (num1 + num2);
        }
        function math_Minus(num1,num2) {
            return `\nThe Subtraction of ${num1} with ${num2} is: ` + (num1 - num2);
        }
        function math_Mult(num1,num2) {
            return `\nThe Multiplication of ${num1} times ${num2} is: ` + (num1 * num2);
        }
        function math_Div(num1,num2) {
            return `\nThe Division of ${num1} by ${num2} is: ` + (num1 / num2);
        }
        document.getElementById('cOutp2').innerHTML = math_Plus(6,9)+ math_Minus(1,9) + math_Mult(3,5) + math_Div(0,10);

        // 3. Math Expressions
        function mathExpressions() {
	        const res = document.getElementById("cOutp3");
            let variable=0;
            res.innerText = `Value after variable declaration is: ${variable}`;
            variable = 5;
            res.innerText += `\nInitial value: ${variable}`;
            variable++;
            res.innerText += `\nValue after increment is: ${variable}`;
            variable += 7;
            res.innerText += `\nValue after addition is: ${variable}`;
            variable--;
            res.innerText += `\nValue after decrement is: ${variable}`;
            const remainder = variable % 3;
            res.innerText += `\nThe remainder is: ${remainder}`;
        }mathExpressions();

        // 4. Movie Ticket Cost
        function calculateTicketCost() {
            const ticketPrice = 600;
            const totalCost = ticketPrice * 5;
            document.getElementById('cOutp4').innerText = `Total cost of 5 tickets: ${totalCost} PKR`;
        }calculateTicketCost();

        // 5. Multiplication Table
function mult_Tab() {
    const number = 7;
    let table = '';
    for (let i = 1; i <= 10; i++) {
        const twoD_i = String(i).padStart(2, '0');
        table += `${number} x ${twoD_i} = ${number * i}<br>`;
    }
    return table;
}
document.getElementById('cOutp5').innerHTML = mult_Tab();

        // 6. Temperature Converter
        function temperatureConverter() {
            const celsius = 25;
            const fahrenheit = (celsius * 9/5) + 32;
            const fahrenheitInput = 70;
            const celsiusOutput = (fahrenheitInput - 32) * 5/9;
            document.getElementById('cOutp6').innerText= `${celsius}°C is ${fahrenheit}°F\n${fahrenheitInput}°F is ${celsiusOutput}°C`;
        }temperatureConverter();

// 7. Shopping Cart Checkout
function shoppingCartCheckout() {
    const priceItem1 = 500;
    const priceItem2 = 300;
    const quantityItem1 = 2;
    const quantityItem2 = 3;
    const shippingCharges = 100;
    const totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
    document.getElementById('cOutp7').innerHTML = `<h1 class="h1_ovr">Shopping Cart</h1><br>Price of Item 1: ${priceItem1} PKR<br>Quantity: ${quantityItem1}<br>Price of Item 2: ${priceItem2} PKR<br>Quantity: ${quantityItem2}<br>Shipping Charges: ${shippingCharges} PKR<br>Total Cost: ${totalCost} PKR`;
}
shoppingCartCheckout();

// 8. Student Percentage
function calculatePercentage() {
    const totalMarks = 980;
    const marksObtained = 804;
    const percentage = (marksObtained / totalMarks) * 100;
    document.getElementById('cOutp8').innerHTML = `<h1 class="h1_ovr">Marks Sheet</h1>Total Marks: ${totalMarks}\nMarks Obtained: ${marksObtained}\nPercentage: ${percentage.toFixed(2)}%`;
}
calculatePercentage();

// 9. Currency Converter
function convertCurrency() {
    const usDollars = 10;
    const saudiRiyals = 25;
    const totalPKR = (usDollars * 104.80) + (saudiRiyals * 28);
    document.getElementById('cOutp9').innerHTML = `<h1 class="h1_ovr">Currency in PKR</h1>Total in PKR: ${totalPKR.toFixed(2)} PKR`;
}
convertCurrency();

// 10. Arithmetic Operations
function arithmeticSequence() {
	init = 100;
    const result = ((init + 5) * 10) / 2;
    document.getElementById('cOutp10').innerHTML = `Result: ${result}`;
}
arithmeticSequence();

// 11. Age Calculator
function calculateAge() {
    const currentYear = 2024;
    const birthYear = 2002;
    const age1 = currentYear - birthYear;
    const age2 = currentYear - birthYear - 1;
    document.getElementById('cOutp11').innerHTML = `<h1 class="h1_ovr">Age Calculator</h1>Current Year: ${currentYear}\nBirth Year: ${birthYear}\nYour Age is: ${age1} or ${age2} years old.`;
}
calculateAge();

// 12. Geometrizer
function calculateCircleProperties() {
    const radius = 5;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    document.getElementById('cOutp12').innerHTML = `The circumference is: ${circumference.toFixed(2)}<br>The area is: ${area.toFixed(2)}`;
}
calculateCircleProperties();

// 13. Lifetime Supply Calculator
function lifetimeSupplyCalculator() {
    const favoriteSnack = "Chocolate bars";
    const currentAge = 25;
    const maxAge = 80;
    const amountPerDay = 2; // Snack amount per day
    const totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;
    document.getElementById('cOutp13').innerHTML = `<h1 class="h1_ovr">The Lifetime Supply Calculator</h1>Favorite Snack: ${favoriteSnack}\nCurrent Age: ${currentAge}\nestimated Maximum Age: ${maxAge}\nAmount of snacks per day: ${amountPerDay}\nYou will need ${totalNeeded} ${favoriteSnack}(s) to last you until the ripe old age of ${maxAge}.`;
}
lifetimeSupplyCalculator();