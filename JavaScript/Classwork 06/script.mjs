function dispM(a, b) {
    document.getElementById(a).innerHTML = b;
    document.getElementById(a).classList.add('active');
}

function dispMx(a, b) {
    document.getElementById(a).innerHTML += b;
    document.getElementById(a).classList.add('active');
}

function getRandomDecimal() {
    //return Math.random() * (8 - 6) + 6;
    const x=Math.random() * (8 - 6) + 6;
    dispM("cOutp1","Random Number: "+x);
    console.log(x);
}

function getRandomNumberFloored() {
    //return Math.floor(Math.random() * (8 - 6 + 1)) + 6;
    const x =Math.floor(Math.random() * (8 - 6 + 1)) + 6;
    dispM("cOutp2","Floored Random: "+x);
    console.log(x);
}

function Concept() {
var String = "100"; // String
var z = -"100";     // Number
var x = +"100";     // Number
var v = "100" + "200"; // + doesn't work but others, /*- works.
console.log(`x: ${typeof(x)}`);
}

function AgeInt() {
    //parseInt is used to force val to int.
    //parseFloat
    const age = document.getElementById('ageInp').value;
    var AgeStr = age+1;
    var AgeInt = parseInt(age)+1;
    dispMx("cOutp3",`Age(Str) + 1 = : ${AgeStr}`);
    dispMx("cOutp3",`\nAge(Int) + 1 = : ${AgeInt}`);
    }

function AgeFloat() {
    const n = document.getElementById('nInp').value;
    var nFl = parseFloat(n);
    dispM("cOutp3",`Age + 1 = : ${nFl}`);
    }

function numFunc() {
    const n = document.getElementById('nNum').value;
    var a = "one";
    var b = Number(a)
    console.log(b);
    console.log(typeof(b));
    dispM("cOutp3",`Number "One" = ${b}\nType of = ${typeof(b)}`);
}

function stringMaker() {
    const str = document.getElementById('val6').value;
    let StrF = String(str);
    let toStr = str.toString();
    dispMx("cOutp6",`String Function = : ${StrF}`);
    dispMx("cOutp6",`\nString Function Type = : ${typeof(StrF)}`);
    dispMx("cOutp6",`\nBy .toString = : ${toStr}`);
    dispMx("cOutp6",`\nBy .toString Type = : ${typeof(toStr)}`);
}

function toFixed() {
    const str = document.getElementById('val7').value;
    var item = 123;
    var tp = item * 1.065; // 6.5%
    var fix = tp.toFixed();
    dispMx("cOutp7",`Value = : ${item}`);
    dispMx("cOutp7",`\nValue Type = : ${typeof(item)}`);
    dispMx("cOutp7",`Total = : ${tp}`);
    dispMx("cOutp7",`\nTotal Type = : ${typeof(tp)}`);
    dispMx("cOutp7",`Fixed = : ${fix}`);
    dispMx("cOutp7",`\nFixed Type = : ${typeof(fix)}`);
}

function funw5() {
    const str = document.getElementById('val8').value;
    if (str.charAt(str.length - 1)==="5") {
        dispMx("cOutp8","Str Length: " +str.length);
        dispMx("cOutp8","Slice 0,1: " + str.slice(0,1) +"6");
        str = str.slice(0,str.length-1) + "6";
    }
    num = Number(str)
    prettyNum = num.toFixed(2);
    console.log(Number(num));
    console.log(prettyNum);
//x.tofixed(); math.floor(x)
//x.tofixed(0)
}

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}