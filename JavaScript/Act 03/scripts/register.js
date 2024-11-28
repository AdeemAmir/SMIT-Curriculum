const closePopupBtn = document.querySelector('.icon-close');
const popupWrapper = document.querySelector('.wrapper');

closePopupBtn.addEventListener('click', () => {
  popupWrapper.classList.remove('active-popup');
});

const toggleToRegisterLink = document.querySelector('.toggle-register');
const toggleToLoginLink = document.querySelector('.toggle-login');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');
const forgotPasswordForm = document.querySelector('.form-box.forgot-password');

toggleToRegisterLink.addEventListener('click', () => {
  loginForm.classList.add('form-box--hidden');
  registerForm.classList.remove('form-box--hidden');
});

toggleToLoginLink.addEventListener('click', () => {
  registerForm.classList.add('form-box--hidden');
  loginForm.classList.remove('form-box--hidden');
});

const forgotPasswordLink = document.querySelector('.forgot-password-link');
forgotPasswordLink.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.classList.add('form-box--hidden');
  forgotPasswordForm.classList.remove('form-box--hidden');
});

const resetPasswordBtn = document.querySelector('.reset-password-btn');
resetPasswordBtn.addEventListener('click', () => {
  const email = document.getElementById('forgot-email').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email);

  if (user) {
    alert('Password reset link sent to ' + email);
    forgotPasswordForm.classList.add('form-box--hidden');
    loginForm.classList.remove('form-box--hidden');
  } else {
    alert('No account found with that email.');
  }
});

const registerBtn = document.querySelector('.register-btn');
registerBtn.addEventListener('click', () => {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (!email || !password || !confirmPassword) {
    alert('All fields are required.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.find(user => user.email === email)) {
    alert('This email is already registered.');
    return;
  }

  const newUser = { email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registration successful!');
  registerForm.classList.add('form-box--hidden');
  loginForm.classList.remove('form-box--hidden');
});

const loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {

    localStorage.setItem('loggedInUser', JSON.stringify(user));

    alert('Login successful!');
    popupWrapper.classList.remove('active-popup'); 
    window.location.href = "index.html";
  } else {
    alert('Invalid email or password.');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const statusMessage = document.getElementById("statusMessage");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    statusMessage.textContent = "Logged In";
    statusMessage.style.color = "green";
    
    setTimeout(() => {
      window.location.href = "index.html"; 
    }, 5000);
  } else {
    statusMessage.textContent = "Please login or register";
    statusMessage.style.color = "red";
  }
});
