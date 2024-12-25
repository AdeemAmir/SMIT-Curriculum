function Scopring() {
    try {
        var x = 5; console.log(x);
        console.log(z); var z = 2; // Undefined
        let y = 10; console.log(y);
        console.log(a); let a = 3; // ERROR
    } catch (error) {
        console.log("Error: ", error)   
    }
    }
//Scopring();
//document.addEventListener("click", Scorping()); // dir ref. // make doc.EvLis to a  button
document.getElementById("T1").addEventListener("click", function() {
    Scopring();
});

function IDontGetIt() {    
    function innerTEST() {
        console.log(message);
    };
    
    function outerTEST() {
        let message = "Hello";
        return innerTEST();
    }
    
    function outer() {
        let message = "Hello";
        return function inner() {
            console.log(message);
        };
    }
    
    
    //console.log(message); //error
    const greet = outer();
    greet();
    //outer();
    //inner();
    
    //TEST AND UNDERSTAND THESE ^^^^^^^^^^^^^^^^^^^^^^
}
//IDontGetIt();
document.getElementById("T2").addEventListener("click", function() {
    IDontGetIt();
});

function Counter() {
    function createCounter() {
        let count = 0;
return function() {
    count++
    return count;
};
    }
const counter = createCounter();
console.log(counter());
//createCounter(); ERRS

}
//Counter();
document.getElementById("T3").addEventListener("click", function() {
    Counter();
});

//A closure occurs when a function has access to its own scope, the scope of the outer function, and global variables.
function ClosurePvtVar() {
    function createSecret(x) {        
        return function () {
            console.log(x);
        };
    }
    const y = createSecret("Secret Msg Printed");
    y();

}
//ClosurePvtVar();

function Retuns() {
    function addNConstRet(a, b) {
        return a + b; // Returns the sum of a and b
    }

    function addNLog(a,b) {
        return console.log(a+b);
    }
    let res2 = addNLog(5,3);
    console.log(res2);
    //res2();

    let res1 = addNConstRet(5, 3);
    console.log(res1);


    //Conceptually, if u wann run res2 properly, make it closure function, have it sep logged (w def. fn), or base return like addNConstRet
/*
    function addNLog(a, b) {
        console.log(a + b); // Logs the sum
    }

    function addNLog(a, b) {
        console.log(a + b); // Logs the sum
        return a + b;       // Returns the sum
    }

    function addNLog(a, b) {
        return a + b; // Returns the sum of a and b
    }

    function addNLog(a,b) {
        return added() {
            console.log(a+b);
        };
    }
*/


}
//Retuns();
function DestingArr() {
    const arr = [10,20];
    const [x,y] = arr;
    //const [x,y] = [10,20];
    console.log(x,y)
}
//DestingArr();

function DestingObj() {
const person = {x:"Adeem",y:21};
//const {a,b} = person;
//console.log(a,b);
// OBJ DESTING NEEDS SAME KEY FROM OBJ TO GET VALUE
const {x,y} = person;
console.log(x,y);
}
//DestingObj();

function defPar() {
    //Default Params
    const [a=1,b=2] = [10];
    console.log(a,b);
}
//defPar();

function ErrCheck() {
    function adder(a=5,b=6) {
        return a+b;
    }
    console.log(adder(2,3,4,5)); // apparently, extra args dont throw err.
}
//ErrCheck();

function arrFun() {
    let arr1= [1,2,3]
    var arr3= [1,2,3]
    const arr2 = [...arr1,4,5]
    let arr4 = [arr1,4,5]
    console.log(arr1);
    console.log(arr3);
    console.log(arr2);
    arr1=[3,4,5];
    arr3=[3,4,5];
    console.log(arr1);
    console.log(arr3);
    console.log(arr4);
    console.log(arr4[0][1]);
}
//arrFun();
