/*************************************************
Code by Adeem Amir
*************************************************/
        function declareVariables() {
            const firstName = "Adeem", lastName = "Amir", age = 20;
            document.getElementById("cOutp1").innerText = `Variables declared in 1 statement:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}`;
        }declareVariables();

        function showVariableNames() {
            const legalNames = ["myVariable", "var_1", "firstName", "$amount", "_hidden"];
            const illegalNames = ["1stVariable", "my-variable", "var name", "function", "if"];
            alert(`Legal Variable Names:\n${legalNames.join(", ")}\n\nIllegal Variable Names:\n${illegalNames.join(", ")}`);
        }//used arrays for fun ;) Since, I can't really show illegal vars.