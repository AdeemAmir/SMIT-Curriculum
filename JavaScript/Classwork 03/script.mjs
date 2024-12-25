/**************************
CODE BY ADEEM AMIR 
**************************/
//alert("Working");

/*
var msg1 = prompt("Enter your 1st Character");
var char1 = msg1.charAt(0); // Get the first character
var ascii1 = char1.charCodeAt(0); // Get ASCII value
var msg2 = prompt("Enter your 2nd Character");
var char2 = msg2.charAt(0); // Get the first character
var ascii2 = char2.charCodeAt(0); // Get ASCII value
var ans = "The sum of the ASCII values is: " + (ascii1 + ascii2);
alert(ans);
*/

function mathop(){

while (isNaN(n1) || isNaN(n2)) {
var msg1 = prompt("Enter your 1st Number");
var n1 = Number(msg1);
var msg2 = prompt("Enter your 2nd Number");
var n2 = Number(msg2);

    if (isNaN(n1) || isNaN(n2))
    alert("Not Number. Try Again.");
}

var msg3 = prompt("Choose Operator:");
if (msg3 == '+') {
    var ans = `${n1} plus ${n2} = ${n1+n2}\n`;
    document.getElementById('mathop').innerText += ans;
}
else if (msg3 == '-'){
    var ans = `${n1} minus ${n2} = ${n1-n2}\n`;
    document.getElementById('mathop').innerText += ans;

}else if (msg3 == '*'){
    var ans = `${n1} times ${n2} = ${n1*n2}\n`;
    document.getElementById('mathop').innerText += ans;

}else if (msg3 == '/'){
    var ans = `${n1} div ${n2} = ${n1/n2}\n`;
    document.getElementById('mathop').innerText += ans;
}
else{
    document.getElementById('mathop').innerText += "ERROR! Invalid Operator.\n";
}
    document.getElementById('mathop').classList.add('active');
}

/****************************************************/

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}
