const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');
const loginStatus = document.getElementById('login-status');

document.addEventListener('DOMContentLoaded', function() {
    const totalImages = 1;
    const formats = ['jpg', 'jpeg', 'png', 'gif']; 
    const images = [];

    for (let i = 1; i <= totalImages; i++) {
        let exists = false; // Use let to reassign exists
        // Try each format
        for (let format of formats) {
            const imageUrl = `files/live${i}.${format}`;
            console.log(imageUrl);
            if (checkImageExists(imageUrl)) { // Assume checkImageExists is a function that returns true/false
                images.push(imageUrl);
                exists = true;
                break; // If the image exists, break out of the loop
            }
        }}


    function checkImageExists(imageUrl) {
        return fetch(imageUrl, { method: 'HEAD' })
            .then(response => response.ok)  // Return true if the image exists
            .catch(() => false);  // Return false if there is an error (e.g., network issue or 404)
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
