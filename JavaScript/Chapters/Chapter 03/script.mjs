/*************************************************
Code by Adeem Amir
*************************************************/
//QUESTION 1
function showAlertAge() {
            const age = 20; // Replace with your age
            alert(`I am ${age}`);
        }

//QUESTION 2
        function updateVisitCount() {
            if (localStorage.getItem('visitCount')) {
                let visitCount = parseInt(localStorage.getItem('visitCount')) + 1;
                localStorage.setItem('visitCount', visitCount);
            } else {
                localStorage.setItem('visitCount', 1);
            }

            document.getElementById('visitCount').innerText = `You have visited this site ${localStorage.getItem('visitCount')} times.`;
        }updateVisitCount();

//QUESTION 3
            const birthYear = 2002;
var cout1 = document.getElementById('cOutp1');
cout1.innerHTML = "My birth year is <span style='color: red;'>" + birthYear +"</span>.\nData type of my declared variable is <span style='color: red;'>number</span>.";


//QUESTION 4
            const visitorName = "John Doe";
            const productTitle = "T-shirt";
            const quantity = 5;
            document.getElementById("cOutp2").innerText = `${visitorName} ordered ${quantity} ${productTitle}(s) on XYZ Clothing store.`;
