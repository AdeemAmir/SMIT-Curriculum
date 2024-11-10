/*************************************************
Code by Adeem Amir
*************************************************/
function dispM(a, b) {
    document.getElementById(a).innerText = b;
    document.getElementById(a).classList.add('active');
}

function dispMx(a, b) {
    document.getElementById(a).innerHTML += b;
    document.getElementById(a).classList.add('active');
}

// 1. Current Date and Time
function displayCurrentDateTime() {
    const now = new Date();
    dispM("currentDateTimeOutput", now.toString());
}

// 2. Current Month
function alertCurrentMonth() {
    const now = new Date();
    alert(now.toLocaleString('default', { month: 'long' }));
}

// 3. Current Day (First 3 Letters)
function alertCurrentDay() {
    const now = new Date();
    alert(now.toLocaleString('default', { weekday: 'short' }));
}

// 4. Fun Day Message
function checkFunDay() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const message = (day === 0 || day === 6) ? "It’s Fun day" : "";
    dispM("funDayOutput", message);
}

// 5. First or Last Days of the Month
function checkDaysOfMonth() {
    const now = new Date();
    const date = now.getDate();
    const message = (date < 16) ? "First fifteen days of the month" : "Last days of the month";
    dispM("daysOfMonthOutput", message);
}

// 6. Minutes Since Midnight, Jan. 1, 1970
function calculateMinutesSinceEpoch() {
    const now = new Date();
    const minutesSinceEpoch = Math.floor(now.getTime() / 60000);
    dispM("minutesSinceEpochOutput", `Minutes since Jan. 1, 1970: ${minutesSinceEpoch}`);
}

// 7. AM or PM
function checkAMPM() {
    const now = new Date();
    const message = now.getHours() < 12 ? "It's AM" : "It's PM";
    alert(message);
}

// 8. Last Day of Last Month of 2020
function showLastDayOf2020() {
    const lastDay = new Date(2020, 0, 0); // January is 0, so this gives us the last day of December 2020
    dispM("lastDay2020Output", `Last day of 2020 was: ${lastDay.toDateString()}`);
}

// 9. Days Since 1st Ramadan 2015
function daysSinceRamadan() {
    const ramadanStart = new Date(2015, 5, 18); // June 18, 2015
    const now = new Date();
    const diffTime = Math.abs(now - ramadanStart);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    dispM("ramadanDaysOutput", `Days since 1st Ramadan: ${diffDays}`);
}

// 10. Seconds Elapsed Since 2015
function secondsSince2015() {
    const referenceDate = new Date(2015, 0, 1);
    const now = new Date();
    const diffTime = Math.abs(now - referenceDate);
    const secondsElapsed = Math.floor(diffTime / 1000);
    dispM("secondsSince2015Output", `Seconds elapsed since 2015: ${secondsElapsed}`);
}

// 11. Current Date and Time + 1 Hour
function addOneHour() {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    dispM("addOneHourOutput", now.toString());
}

// 12. Date 100 Years Back
function dateHundredYearsBack() {
    const now = new Date();
    now.setFullYear(now.getFullYear() - 100);
    alert(now.toDateString());
}

// 13. User Age and Birth Year
function calculateBirthYear() {
    const age = parseInt(document.getElementById("userAge").value);
    if (!isNaN(age) && age >= 0) {
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - age;
        dispM("birthYearOutput", `Your birth year is: ${birthYear}`);
    } else {
        alert("Please enter a valid age.");
    }
}

// 14. K-Electric Bill
function generateBill() {
    const customerName = document.getElementById("customerName").value;
    const units = parseFloat(document.getElementById("units").value);
    const chargesPerUnit = parseFloat(document.getElementById("chargesPerUnit").value);
    const latePaymentSurcharge = 50; // Example value

    if (customerName && !isNaN(units) && !isNaN(chargesPerUnit)) {
        const netAmount = (units * chargesPerUnit).toFixed(2);
        const grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);
        const currentMonth = new Date().toLocaleString('default', { month: 'long' });

        const billOutput = `
            Customer Name: ${customerName} <br>
            Current Month: ${currentMonth} <br>
            Number of Units: ${units} <br>
            Charges per Unit: ${chargesPerUnit} <br>
            Net Amount Payable (within Due Date): ${netAmount} <br>
            Late Payment Surcharge: ${latePaymentSurcharge} <br>
            Gross Amount Payable (after Due Date): ${grossAmount}
        `;
        dispM("billOutput", billOutput);
    } else {
        alert("Please fill out all fields correctly.");
    }
}

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}