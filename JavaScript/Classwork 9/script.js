/*************************************************
Code by Adeem Amir
*************************************************/
function dispM(a, b) {
    document.getElementById(a).innerHTML = b;
    document.getElementById(a).classList.add('active');
}

function dispMx(a, b) {
    document.getElementById(a).innerHTML += b;
    document.getElementById(a).classList.add('active');
}

function Concept() {
    const dt = new Date();
    const nl = dt.toString();
    const tday = dt.getDay();
    const daysNm = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    const tdayNm = daysNm[tday];

    const dday = new Date("THIS THE END");
    const dday2 = new Date(2);
    const dday3 = new Date("July 21, 1982 12:55:44");
    
    
    console.log("Object Date: "+dt+"\n"+typeof(dt));
    console.log("String Date: "+nl+"\n"+typeof(nl));
    console.log("getDay: "+tday+"\n"+typeof(tday));
    console.log("getDay Named: "+tdayNm+"\n"+typeof(tdayNm));
    console.log("DDay 1: "+dday+"\n"+typeof(dday));
    console.log("DDay 2: "+dday2+"\n"+typeof(dday2));
    console.log("DDay 3: "+dday3+"\n"+typeof(dday3));
    //getDay;Month;Date;FullYear;Hours;Minutes;Seconds;Miliseconds;Time;();
    //setFullyear;Month;Date;Hours;Minutes;Seconds;Miliseconds;();
    }
    
    function openMonkeyWindow() {
        // Open a new window
        var monkeyWindow = window.open();

        // Content for the new window
        var windowContent = "<h1>Capuchin monkey</h1><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown robes with large hoods covering their heads.</p>";

        // Write content to the new window
        monkeyWindow.document.write(windowContent);
    }

    function openFaqPage() {
        var windowSpecs = "width=420,height=380,left=200,top=100";  // Window properties
        var faqPage = window.open("faq.html", "faq", windowSpecs);  // Open faq.html with the specs
    }

    function checkForPopBlocker() {
        // Attempt to open a small popup window
        var testPop = window.open("", "", "width=100,height=100");

        // Check if the popup was blocked
        if (testPop === null) {
            // Show a message on the page if pop-up is blocked
            document.getElementById("popUpMessage").textContent = "Please disable your popup blocker to continue.";
        } else {
            // Close the test popup if it was opened successfully
            testPop.close();
            document.getElementById("popUpMessage").textContent = "";
        }
    }


/*
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
*/

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}