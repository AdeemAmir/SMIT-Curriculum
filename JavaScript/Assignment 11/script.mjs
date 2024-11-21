/*************************************************
Code by Adeem Amir
*************************************************/
/*function outP(a, b) {
    document.getElementById(a).innerText += "blank";
    document.getElementById(a).setAttribute('active');
}*/

function loadStudentData() {
    const data = JSON.parse(localStorage.getItem('studentData'));
    if (data) {
        for (let studentNumber in data) {
            if (students[studentNumber]) {
                students[studentNumber].splice(1, 3, ...data[studentNumber].slice(1, 4));
                students[studentNumber][4] = data[studentNumber][4];
                students[studentNumber][5] = data[studentNumber][5]; 
                students[studentNumber][6] = data[studentNumber][6];
            }
        }
    }
}

const students = {
    16050: ["Adeem 1", 85, 78, 92, 0, 0, 0],
    271965: ["Adeem 2", 90, 88, 95, 0, 0, 0]
};

function calculateDetails(index) {
    const student = students[index];
    const total = student[1] + student[2] + student[3];
    const percentage = (total / 300) * 100;
    const cgpa = percentage / 25;

    student[4] = total; 
    student[5] = percentage;
    student[6] = cgpa;
}

function getStudentDetails(index, infoType) {
    if (!(index in students)) {
        return "Invalid student number.";
    }

    if (students[index][4] === 0) {
        calculateDetails(index);
    }

    const student = students[index];
    let output = `Name: ${student[0]}<br>`;

    switch (infoType) {
        case "subject1":
            output += `Subject 1 Mark: ${student[1]}`;
            break;
        case "subject2":
            output += `Subject 2 Mark: ${student[2]}`;
            break;
        case "subject3":
            output += `Subject 3 Mark: ${student[3]}`;
            break;
        case "total":
            output += `Marks Obtained: ${student[4]}`;
            break;
        case "percentage":
            output += `Percentage: ${student[5].toFixed(2)}%`;
            break;
        case "cgpa":
            output += `CGPA: ${student[6].toFixed(2)}`;
            break;
        case "all":
            output += `Subject 1 Mark: ${student[1]}<br>`;
            output += `Subject 2 Mark: ${student[2]}<br>`;
            output += `Subject 3 Mark: ${student[3]}<br>`;
            output += `Marks Obtained: ${student[4]}<br>`;
            output += `Percentage: ${student[5].toFixed(2)}%<br>`;
            output += `CGPA: ${student[6].toFixed(2)}`;
            break;
        default:
            output = "Invalid information type.";
    }

    return output;
}

function toggleAdmin() {
    const isAdmin = document.getElementById('adminButton').innerText === "Admin Logout";
    if (isAdmin) {
        document.getElementById('adminButton').innerText = "Admin Login";
        document.getElementById('subjectButtons').style.display = 'none'; // Hide subject buttons
    } else {
        const username = prompt("Enter admin username:");
        const password = prompt("Enter admin password:");
        if (username === "admin" && password === "admin") {
            document.getElementById('adminButton').innerText = "Admin Logout";
            document.getElementById('subjectButtons').style.display = 'block'; // Show subject buttons
        } else {
            alert("Invalid username or password. Please try again.");
        }
    }
}

function editMarks(subjectIndex) {
    const studentNumber = document.getElementById('studentNumber').value;
    const newMark = prompt(`Enter new mark for Subject ${subjectIndex + 1}:`);
    if (newMark !== null && !isNaN(newMark)) {
        students[studentNumber][subjectIndex + 1] = parseInt(newMark); // subjectIndex + 1 because index 0 is name
        localStorage.setItem('studentData', JSON.stringify({
            [studentNumber]: students[studentNumber]
        }));
        calculateDetails(studentNumber);
        alert(`Subject ${subjectIndex + 1} updated to ${newMark}.`);
    } else {
        alert("Invalid input. Please enter a valid mark.");
    }
}

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('infoForm').style.display = 'block'; // Show the info form
    loadStudentData(); // Load student data from localStorage
});

// Event listener for getting information by select
document.getElementById('getInfoBySelect').addEventListener('click', function(e) {
    e.preventDefault();
    const studentNumber = document.getElementById('studentNumber').value;
    const infoType = document.getElementById('infoType').value;

    const output = getStudentDetails(studentNumber, infoType);
    document.getElementById('output').innerHTML = output;
});

// Event listener for getting information by index
document.getElementById('getInfoByIndex').addEventListener('click', function(e) {
    e.preventDefault();
    const studentNumber = document.getElementById('studentNumber').value;
    const indexInput = parseInt(document.getElementById('indexInput').value);

    let output;
    if (!isNaN(indexInput) && indexInput >= 0 && indexInput < 7) { 
        calculateDetails(studentNumber); //failsafe for 0%s.
        //look for a better method.

        if (indexInput === 0) {
            output = `Name: ${students[studentNumber][0]}`;
        } else if (indexInput === 1) {
            output = `Subject 1 Mark: ${students[studentNumber][1]}`;
        } else if (indexInput === 2) {
            output = `Subject 2 Mark: ${students[studentNumber][2]}`;
        } else if (indexInput === 3) {
            output = `Subject 3 Mark: ${students[studentNumber][3]}`;
        } else if (indexInput === 4) {
            output = `Total Marks: ${students[studentNumber][4]}`;
        } else if (indexInput === 5) {
            output = `Percentage: ${students[studentNumber][5].toFixed(2)}%`;
        } else if (indexInput === 6) {
            output = `CGPA: ${students[studentNumber][6].toFixed(2)}`;
        }
    } else {
        output = "Invalid array index. Please enter a valid index (0-6).";
    }

    document.getElementById('output').innerHTML = output;
});

function addStudent() {
    const studentNumber = prompt("Enter new student number:");
    if (studentNumber && !(studentNumber in students)) {
        const studentName = prompt("Enter student name:");
        const marks = [0, 0, 0, 0]; // Initial marks for three subjects
        students[studentNumber] = [studentName, ...marks, 0, 0, 0]; // Initial total, percentage, CGPA
        alert(`Student ${studentName} added successfully!`);
        localStorage.setItem('studentData', JSON.stringify(students)); // Save to local storage
    } else {
        alert("Invalid student number or student already exists.");
    }
}

function editStudentName() {
    const studentNumber = prompt("Enter student number to edit:");
    if (studentNumber in students) {
        const newName = prompt("Enter new student name:");
        if (newName) {
            students[studentNumber][0] = newName; // Update student name
            alert(`Student name updated to ${newName}.`);
            localStorage.setItem('studentData', JSON.stringify(students)); // Save to local storage
        }
    } else {
        alert("Invalid student number.");
    }
}

/**************************************/

// admin event listener
document.getElementById('adminButton').addEventListener('click', function() {
    toggleAdmin();
});

// subsequent to admin.

document.getElementById('addStudentButton').addEventListener('click', addStudent);
document.getElementById('editStudentNameButton').addEventListener('click', editStudentName);

document.getElementById('subject1Button').addEventListener('click', function() {
    editMarks(0);
});
document.getElementById('subject2Button').addEventListener('click', function() {
    editMarks(1);
});
document.getElementById('subject3Button').addEventListener('click', function() {
    editMarks(2);
});

/**************************************/

loadStudentData();