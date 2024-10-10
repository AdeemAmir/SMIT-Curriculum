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