//     function dispM(a, b) {
//     document.getElementById(a).innerText = b;
//     document.getElementById(a).classList.add('active');
// }

//     var x;
//     var y;
//     function inputval() {
//         x=prompt("x")
//         y=prompt("y")

//         if(x>=300 && y<=15){
//     dispM('cOutp1','True');
// }
// else{
//     dispM('cOutp1','False');
// }
//     }

function dispM(a, b) {
    document.getElementById(a).innerText = b;
    document.getElementById(a).classList.add('active');
}

    var x;
    var y;
    var cit;
    function inputval() {
        y=prompt("Enter Your Name: ")
		x=prompt("Enter Your Age: ")
        cit=prompt("Enter Cizitenship")

        if((x<21||x>61) && cit=="U.S."){
    dispM('cOutp1',`Hello ${y}. Your age is ${x}. \nCitizenship: ${cit}\nYou are eligible.`);
}
else{
    dispM('cOutp1',`Hello ${y}. Your age is ${x}. \nCitizenship: ${cit}\nYou are ineligible.`);
}
    }


//     const tm = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):\nOr as follow ({Hour}AM/PM)");
//     if (tm.length>3) {
//     var hr = parseInt(tm.slice(0, 2));
// }else{
//     if
// }

function checkTime() {
    const tm = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM) or as follows ({Hour}AM/PM):");
    let hr;
    console.log("hr is " +hr);

if (tm.length === 4 && (tm.endsWith("AM") || tm.endsWith("PM"))) {
        hr = parseInt(tm.slice(0, 2));
        

        if (tm.endsWith("PM") && hr < 12) {
            hr += 12;
        } else if (tm.endsWith("AM") && hr === 12) {
            hr = 0;
        }
    } else if (tm.length >= 3) {
        hr = parseInt(tm.slice(0, 2));
    } else {
        dispM("cOutp2", "Invalid time input. Please enter a valid hour.");
        return;
    }


    if (hr < 0 || hr > 23) {
        dispM("cOutp2", "Invalid time input. Please enter a valid hour (0-23).");
    } else if (hr < 5 || hr >= 18 || hr=="") {
        dispM("cOutp2", "Good Evening");
    } else if (hr < 12) {
        dispM("cOutp2", "Good Morning");
    } else if (hr < 18) {
        dispM("cOutp2", "Good Afternoon");
    }else {
        dispM("cOutp2", "Invalid Input.");
    }

}