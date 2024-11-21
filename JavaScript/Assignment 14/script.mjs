/*************************************************
Code by Adeem Amir
*************************************************/
        function isPalindrome(word) {
            const stabString = word.replace(/\s+/g, '').toLowerCase(); // removes spaces and lowers all. using regular expressions.
            // /.../ triggers ; \s is all spaces ; + is more than one ; g for global (whole string).
            const reverseString = stabString.split('').reverse().join(''); // split into array, reverse array, return to string.
            return stabString === reverseString; // returns if both r equal.
        }

        function checkPalindrome() {
            const stringKw = document.getElementById('palinInp').value;
            const resultDiv = document.getElementById('cOutp1');
            resultDiv.classList.add('active');
            if (stringKw) {
                const isPalin = isPalindrome(stringKw);
                resultDiv.textContent = isPalin ? `"${stringKw}" is a palindrome.` : `"${stringKw}" is not a palindrome.`;
            } else {
                resultDiv.textContent = `"${stringKw}" is not a palindrome.`;
            }
        }

        function userPrompt() {
            const userInput = prompt("Enter to Check for Palindrome :");
            if (userInput) {
                console.log("User input by alert:", userInput);
                const resultDiv = document.getElementById('cOutp1');
                resultDiv.classList.add('active');
                const isPalin = isPalindrome(userInput);
                resultDiv.textContent = isPalin ? `"${userInput}" is a palindrome.` : `"${userInput}" is not a palindrome.`;
                alert("You entered: " + userInput);
            } else {
                console.log("No input provided.");
                alert("No input provided.");
            }
        }

        function howToCons() {
            alert("To check if your string name is a palindrome using the console, use the following command:\n\n" +
                  "cnslPalin('Your String');\n\n" +
                  "Replace 'Your String' with the actual name you want to check.");
        }

        // Console method 
        window.cnslPalin = function(x) {
            const resultDiv = document.getElementById('cOutp1');
            resultDiv.classList.add('active');
            const isPalin = isPalindrome(x);
            resultDiv.textContent = isPalin ? `"${x}" is a palindrome.` : `"${x}" is not a palindrome.`;
        };

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}