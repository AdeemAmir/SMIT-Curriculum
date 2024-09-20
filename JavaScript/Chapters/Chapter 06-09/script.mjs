/*************************************************
Code by Adeem Amir
*************************************************/
        // 1. Arithmetic Operations
        function performArithmetic() {
            let a = 10; 
            res = document.getElementById('arithmeticOutput');
            res.innerText = `Result:\nThe value of a is: ${a}\n----------------------------\n\nThe value of ++a is: ${++a}`;
            res.innerText+=`\nNow the value of a is: ${a}\n\nThe value of a++ is: ${a++}`;
            res.innerText+=`\nNow the value of a is: ${a}\n\nThe value of --a is: ${--a}`;
            res.innerText+=`\nNow the value of a is: ${a}\n\nThe value of a-- is: ${a--}`;
            res.innerText+=`\nNow the value of a is: ${a}`;

            
            document.getElementById('arithmeticOutput').classList.add('active');
        }

        // 2. Variable Output Explanation
        function explainVariables() {
            let a = 2, b = 1;
            let explanation = 
            `--a = ${--a} (a becomes 1)\n`;
            a = 2, b = 1;
            explanation += `--a - --b = ${--a} - ${--b} = ${a - b} (b becomes 0)\n`;
            a = 2, b = 1;
            explanation += `--a - --b + ++b = ${a - b} + ${++b} = ${a - b + b} (b becomes 2)\n`;
            a = 2, b = 1;
            explanation += `--a - --b + ++b + b-- = ${a - b + b} + ${b--} = `;
            a = 2, b = 1;
            let result = (--a) - (--b) + (++b) + (b--);
            explanation +=`${result} (answer becomes 3 after this)`;


            document.getElementById('variablesOutput').innerText = explanation;
            document.getElementById('variablesOutput').classList.add('active');
            
        }

        // 3. Greet User
        function greetUser() {
            const name = prompt("Please enter your name:");
            if (name) {
                alert(`Hello, ${name}! Welcome to my website.`);
            } else {
                alert("Hello, Guest! Welcome to my website.");
            }
        }

        // 4. Multiplication Table
        function showMultiplicationTable() {
            const number = prompt("Enter a number for multiplication table (leave blank for 5):") || 5;
            let table = '';
            for (let i = 1; i <= 10; i++) {
	            const fdi= String(i).padStart(2,'0');
	            	const res = i*number;
	fdres=String(res).padStart(2,'0');
                table += `${fdi} x ${number} = ${fdres}\n`;
            }
            document.getElementById('tableOutput').innerText = table;
            document.getElementById('tableOutput').classList.add('active');
        }

        // 5. Marks and Percentage
        function calculatePercentage() {
            const s1 = prompt("Enter the name of the first subject:");
            const s2 = prompt("Enter the name of the second subject:");
            const s3 = prompt("Enter the name of the third subject:");

            const tot = 100;
            const ob1 = parseInt(prompt(`Enter obtained marks for ${s1}:`));
            const ob2 = parseInt(prompt(`Enter obtained marks for ${s2}:`));
            const ob3 = parseInt(prompt(`Enter obtained marks for ${s3}:`));

            const obt = ob1 + ob2 + ob3;
            const percentage = (obt / (tot * 3)) * 100;

            const output = 
            `Subject 1: ${s1}, Obtained Marks: ${ob1}\n` +
            `Subject 2: ${s2}, Obtained Marks: ${ob2}\n` +
            `Subject 3: ${s3}, Obtained Marks: ${ob3}\n` +
            `Total Marks: ${tot * 3}\n` +
            `Total Obtained: ${obt}\n` +
            `Percentage: ${percentage.toFixed(2)}%`;
            document.getElementById('percentageOutput').innerText = output;
            document.getElementById('percentageOutput').classList.add('active');
        }
        