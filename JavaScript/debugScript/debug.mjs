/*************************************************
Code by Adeem Amir
*************************************************/
let isDebugging = false;

export const dbg = (state) => {
    if (state === true) {
        isDebugging = true;
        console.log('Debugging is ON');
    } else if (state === false) {
        isDebugging = false;
        console.log('Debugging is OFF');
    } else {
        console.log('Invalid!');
    }
};

export const dbgLog = (...args) => {
    if (isDebugging) {
        console.log('DEBUG:', ...args);
    }
};

// Action below should also be possible by dbg(true)... //not tested
// Allow direct activation in your working JavaScript file
export const activateDebugging = () => {
    isDebugging = true;
    console.log('Debugging activated directly from script.');
};

//Global Exposure
window.dbg = dbg;
window.dbgLog = dbgLog;
window.activateDebugging = activateDebugging;