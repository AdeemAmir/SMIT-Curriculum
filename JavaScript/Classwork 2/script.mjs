/*************************************************
Code by Adeem Amir
*************************************************/
var a_st=5;
var b_st=5;
var c_st=a_st+b_st;
//document.write("<h1>Output Result: </h1>" + c); //shows at last
var num_st = 50;
var b_st = num_st + 500;
console.log(b_st);

//cOutp.textContent = "<h1>Output Result: </h1>" + c;

//var cOutp = document.getElementById('cOutp'); //link to M1
const nout1 = document.getElementById("cOutp1"); //link to M1+M2
cOutp1.textContent = "This is 1st Printing Method; Method 1 "+"\n";
nout1.innerHTML += "This is 2nd Printing Method;  Method 2 ";
//doesn't comply with '\n' \\ BIZZARE BEHAVIOR:
//	IN CSS, requires {white-space: pre;} for \n.

const nout2 = document.getElementById("cOutp2");
cOutp2.textContent = "test";

// var msg = "Thank you for the input"
// alert(msg);
var  username  = prompt("Enter User Name")

alert("thanks, " + username + "!");
//alert("2 plus 2 equals " + 2 + 2);

var a = prompt("Text 1");
var b = prompt("Text 2");
var add = Number(a)+Number(b)
console.log("Shows both text \n",a,b);
console.log(add);





