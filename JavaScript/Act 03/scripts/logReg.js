const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');
const loginStatus = document.getElementById('login-status');

window.onload = function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        loginStatus.textContent = "Logged In";
        loginStatus.style.color = "green";
        setTimeout(() => {
            window.location.href = "hero.html";
        }, 2000);
    } else {
        loginStatus.textContent = "Not Logged In";
        loginStatus.style.color = "red";
    }

    wrapper.classList.add('active-popup');
};

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});

document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    const email = document.getElementById("signup-email").value;

    // Generate unique CstID :P
    const CstID = Date.now();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.email === email)) {
        alert("Email already exists!");
        return;
    }

    const newUser = { username, password, email, CstID };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("User signed up successfully!");
    wrapper.classList.remove('active');
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email);

    if (!user) {
        alert("User not found!");
        return;
    } else if (user.password !== password) {
        alert("Incorrect password!");
        return;
    }

    localStorage.setItem('loggedInUser', JSON.stringify(user));

    //console.log("Login successful!");
    //alert("Login successful!");
    window.location.href = "hero.html";
});
