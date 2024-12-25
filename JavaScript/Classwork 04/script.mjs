function dispM(a, b) {
    document.getElementById(a).innerHTML = b;
    document.getElementById(a).classList.add('active');
}


city_arr=["Karachi","Lahore","Islamabad","Larkana"]
console.log(city_arr);
document.getElementById("cOutp2").innerText = "Array Content : " +city_arr.join(", "); 

function citcheck() {

    x = prompt("Enter City Name: ");
    flag=false;

for (i=0; i<city_arr.length;i++) {

res="";

    if (city_arr[0]==x) {
        flag=true;
        res = "City A found.";
    }

    else if (city_arr[1]==x) {
        flag=true;
        res = "City C found.";
    }

    else if (city_arr[2]==x) {
        flag=true;
        res = "City C found.";
    }

    else if (city_arr[3]==x) {
        flag=true;
        res = "City D found.";
    }

    dispM("cOutp1",res);

}

if (!flag) {
    dispM("cOutp1","FLAG RAISED! \nCOMPLETE LOOP RUN. CITY NOT FOUND IN ARRAY : " +JSON.stringify(city_arr));
}
}

//Cap only 1st letter.
function fCap(a) {
    return a.charAt(0).toUpperCase()+a.slice(1)
}
text1 = "asd";
console.log(fCap(text1));

//Cap 1st letter, rest lower.
function fCapRLow(a) {
    a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()
}
text2 = 'zXC';
console.log(fCapRLow(text2));


/*
let str = "Hello World";
let indices = [];

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'l') {
        indices.push(i);
    }
}
console.log(indices);
*/

/*
MY OWN FLIPCASE

function flipCase(str) {
    let flipped = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // Check if the character is uppercase
        if (char === char.toUpperCase()) {
            flipped += char.toLowerCase(); // Convert to lowercase
        } else {
            flipped += char.toUpperCase(); // Convert to uppercase
        }
    }

    return flipped;
}

let original = "Hello, World!";
let flipped = flipCase(original);

console.log(flipped);

*/

/*
str[i]
//vs.
str.charAt(i)

// bracket notation vs method call
// out of range = undef(no err) vs ""(empty str)
// str[i] more concise, more preferred
*/

/*
a.slice(0,1);
//vs.
a.charAt(0);
*/

/*
str2 = str.slice(0);
//vs.
str2 = str;
*/