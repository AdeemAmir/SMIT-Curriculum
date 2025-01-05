/*************************************************
Code by Adeem Amir
*************************************************/
function dispMd(...a) {
  const x = a.join(' ');
  document.getElementById("output").innerHTML = x;
  document.getElementById("output").classList.add('active');
}

function dispMdx(...a) {
  const x = a.join(' ');
  document.getElementById("output").innerHTML += x;
  document.getElementById("output").classList.add('active');
}

document.getElementById('backButton').addEventListener('click', () => {window.history.back();});
document.getElementById('homeButton').addEventListener('click', () => {window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum';});

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
let otp;

document.getElementById("sendOtpEmail_btn").addEventListener("click", () => {
  const email = document.getElementById("emailForOtp").value;
  otp = generateOtp();
  dispMd("Generated OTP:", otp);
  dispMdx(`\nOTP sent to: ${email}`);
});

document.getElementById("veriftOtpEmail_btn").addEventListener("click", () => {

  const enteredOtp = Array.from(document.querySelectorAll('.otp-input'))
    .map(input => input.value)
    .join('');

  if (enteredOtp === otp) {
    dispMd("OTP Verified Successfully!");
    dispMdx("\nOTP Verified:", enteredOtp);
    otp=undefined;
  } else {
    dispMd("Invalid OTP! Please try again.");
    dispMdx("\nInvalid OTP:", enteredOtp);
  }
});
