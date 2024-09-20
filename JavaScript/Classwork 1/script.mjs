/*************************************************
Code by Adeem Amir
*************************************************/

var a=420;
var b=69;
var c=a+b;

sh = "Adeem";
al  ="Amir";

//alert("Name: "+ sh+" "+al+"\n"+"Result: "+c);

var cOutp1 = document.getElementById('cOutp1');
cOutp1.textContent = "Name: " + sh + " " + al + "\nResult: " + c;
  
    //cOutp2.textContent=loopn;

const nout = document.getElementById("cOutp2");

for(i=1;i<=100;i++) { // this is y
    for(j=1;j<=100;j++) { //this is x

	const res = i*j;
	fdres=String(res).padStart(5,'0');
        nout.innerHTML += fdres+"\t";
        
        //document.write(i*j+"\t"); //for casual print
        //document.write(loopn+"<br>"); //for cascual print

    //loopn=i;
// nout.innerHTML += i+"<br>"; //for sinple loop

    //console.log(loopn) //nOt wORk
    //var cOutp2 = document.getElementById('cOutp2').innerHTML=loopn; //nOt wORk
}
nout.innerHTML += "<br>";
}

console.log("Code by Adeem");
console.log("Var a is: " + a + "\nVar b is: " + b+"\nSumming...\n");
console.log("Result is " + c);
console.log("Printing Name : " +sh +" "+ al);

