/*************************************************
Code by Adeem Amir
*************************************************/
function dispM(a, b) {
    document.getElementById(a).innerHTML += b;
    document.getElementById(a).classList.add('active');
}


let arr=[];

document.getElementById("indx").value = 0;
document.getElementById("count").value = 1;

function arrUpd() {
    const cOutp1 = document.getElementById("cOutp1");
    dispM("cOutp1", "\nResult: " + arr.join(", ")+"\n");
}

function clsArr() {
    arr=[];
    dispM("cOutp1","\nCleared the Array.");
    arrUpd();
}

/*function valGrbr() {
    const indx = parseInt(document.getElementById('indx').value);
    const 
}*/


function adder() {
    const indx = parseInt(document.getElementById('indx').value);
    const val = document.getElementById('arrdata').value;
    arr.splice(indx,0,val);
    dispM("cOutp1", `\nAdded "${val}" at index ${indx}.`);
    arrUpd();
}

function deleter() {
    const indx = parseInt(document.getElementById('indx').value);
    const count = parseInt(document.getElementById('count').value);
    const res = arr.splice(indx,count);
    dispM("cOutp1", `\nRemoved ${res.join(", ")} from index ${indx}.`);
    arrUpd();
}

function clrScr() {
    document.getElementById('cOutp1').innerText="";
}
