/*************************************************
Code by Adeem Amir
*************************************************/
//import './debug.mjs'; // Doesn't work in this way.
// import * as Debug from './debug.mjs'; //or
// import { dbg, dbgLog, activateDebugging } from './debug.mjs'; //or
import { dbg, dbgLog, activateDebugging } from './debug.mjs';

activateDebugging();
dbgLog('This debug message will now be shown.');
dbg(false);
dbg(true);

document.getElementById('debugButton').addEventListener('click', () => {
    dbgLog('Button clicked! Debugging message generated.');
});












/*
// Ensure debug.js is imported correctly
// The functions are available globally due to the debug.js script

// Set up the button to log a debug message
document.getElementById('debugButton').addEventListener('click', () => {
    dbgLog('Button clicked! Debugging message generated.');
});

// Activate debugging directly
activateDebugging();
dbgLog('This debug message will now be shown.');

// Initially turn off debugging (optional, can be omitted)
dbg(false);
*/