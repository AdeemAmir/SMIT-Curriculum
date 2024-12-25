/*************************************************
Code by Adeem Amir
*************************************************/
        function checkWithIncludes(email) {
            return email.includes('@gmail.com') ? 'Success (includes)' : 'Fail (includes)';
        }

        function checkWithIndexOf(email) {
            return email.indexOf('@gmail.com') !== -1 ? 'Success (indexOf)' : 'Fail (indexOf)';
        }

        function checkWithSlice(email) {
            const gmailDomain = email.slice(email.length - 11); // Corrected length
            return gmailDomain === '@gmail.com' ? 'Success (slice)' : 'Fail (slice)';
        }

        function checkWithEndsWith(email) {
            return email.endsWith('@gmail.com') ? 'Success (endsWith)' : 'Fail (endsWith)';
        }

        function checkWithSliceNoReverse(email) {
            const target = '@gmail.com';
            const length = target.length;
                if (email.length >= length) {
                    const slicedEmail = email.slice(email.length - length);
                    return slicedEmail === target ? 'Success (sliceNoReverse)' : 'Fail (sliceNoReverse)';
                }
            return 'Fail (sliceNoReverse)';
        }

        function checkAllMethods(email) {
            const results = [];
            results.push(checkWithIncludes(email));
            results.push(checkWithIndexOf(email));
            results.push(checkWithSlice(email));
            results.push(checkWithEndsWith(email));
            results.push(checkWithSliceNoReverse(email));
            return results.join('<br>');
        }

        function runEmailCheck() {
            const emailInput = document.getElementById('emailInput').value;
            const selectedMethod = document.getElementById('methodSelect').value;

            let result;
            switch (selectedMethod) {
                case 'includes':
                    result = checkWithIncludes(emailInput);
                    break;
                case 'indexOf':
                    result = checkWithIndexOf(emailInput);
                    break;
                case 'slice':
                    result = checkWithSlice(emailInput);
                    break;
                case 'endsWith':
                    result = checkWithEndsWith(emailInput);
                    break;
                case 'sliceNoReverse':
                    result = checkWithSliceNoReverse(emailInput);
                    break;
                case 'all':
                    result = checkAllMethods(emailInput);
                    break;
                default:
                    result = 'Invalid method selected!';
            }

            if (selectedMethod === 'all') {
                const resultsArray = result.split('<br>');
                const coloredResults = resultsArray.map(res => {
                    const color = res.includes('Success') ? 'green' : res.includes('Fail') ? 'red' : 'blue';
                    return `<span style="color: ${color};">${res}</span>`;
                });
                document.getElementById('cOutp1').innerHTML = coloredResults.join('<br>');
            } else {
                const color = result.includes('Success') ? 'green' : result.includes('Fail') ? 'red' : 'blue';
                document.getElementById('cOutp1').innerHTML = `<span style="color: ${color};">${result}</span>`;
            }

            /*document.getElementById('cOutp1').innerHTML = result;*/
        }

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}