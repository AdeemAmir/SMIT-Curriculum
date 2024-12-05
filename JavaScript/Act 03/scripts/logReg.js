const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');
const loginStatus = document.getElementById('login-status');

document.addEventListener('DOMContentLoaded', function() {
    const totalImages = 23;
    const formats = ['jpg', 'jpeg', 'png', 'gif']; 
    const images = [];

    for (let i = 1; i <= totalImages; i++) {
        let exists = false;
        
        for (let format of formats) {
            const imageUrl = `files/live${i}.${format}`;
            console.log(imageUrl);
            if (checkImageExists(imageUrl)) {
                images.push(imageUrl);
                exists = true;
                break;
            }
        }}

    function checkImageExists(imageUrl) {
        return fetch(imageUrl, { method: 'HEAD' })
            .then(response => response.ok)
            .catch(() => false);
    }


    const randomIndex = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(${images[randomIndex]})`;

});

window.onload = function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        loginStatus.textContent = "Logged In";
        loginStatus.style.color = "green";
        loginStatus.classList.add('logged-in');
        wrapper.style.background = "rgba(0, 200, 0, 0.3)";
        wrapper.style.border = "2px solid green";
        wrapper.style.boxShadow = "0 0 30px rgba(0, 255, 0, 0.5)"; 
        setTimeout(() => {
            window.location.href = "hero.html";
        }, 4321);
    } else {
        loginStatus.textContent = "Not Logged In";
        loginStatus.style.color = "red";
        loginStatus.classList.add('not-logged-in');
        wrapper.style.background = "rgba(100, 50, 50, 0.7)";
        wrapper.style.border = "2px solid red";
        wrapper.style.boxShadow = "0 0 30px rgba(255, 0, 0, 0.5)"; 
    }

    wrapper.classList.add('active-popup');
};

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

/*iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
}); FOR THE X ICON*/ 

document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Generate unique CstID :P
    const CstID = Date.now();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    const email = document.getElementById("signup-email").value;

    const c1 = /.{6,}/.test(password);
    const c2 = /^[a-zA-Z]/.test(password);
    const c3 = /^(?=.*[a-zA-Z])(?=.*\d)/.test(password); 

    if (!c1 || !c2 || !c3) {
        alert("Password must be at least 6 characters long, start with a letter, and contain both letters and numbers.");
        return;
    }

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

    window.location.href = "hero.html";
});
