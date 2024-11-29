function ciciphus(text, shift) {
const alphU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphL = 'abcdefghijklmnopqrstuvwxyz';
const nmn = '0123456789';
let fallback = '';
for (let i = 0; i < text.length; i++) {let a = text[i];
if (alphL.includes(a)) {
const index = (alphL.indexOf(a) + shift + 26) % 26; 
fallback += alphL[index];
}else if (alphU.includes(a)) {
const index = (alphU.indexOf(a) + shift + 26) % 26;
fallback += alphU[index];
}else if (nmn.includes(a)) {
const index = (nmn.indexOf(a) + shift + 10) % 10; 
fallback += nmn[index];
}else {fallback += a;}}return fallback;}
export async function apiCall() {try {
        const rez = await fetch('.ignore/file');
        const ciphX = await rez.text();
        const deciF = ciciphus(ciphX, -3);
        return deciF;} catch (error) {
        console.error('Error f:d: ', error);
return null;}}
