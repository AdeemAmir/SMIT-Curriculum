/*************************************************
Code by Adeem Amir
*************************************************/
function dispM(a, b) {
    document.getElementById(a).innerHTML = b;
    document.getElementById(a).classList.add('active');
}

function dispMx(a, b) {
    document.getElementById(a).innerHTML += b;
    document.getElementById(a).classList.add('active');
}

function gotoBack() {
    window.history.back();
}

function gotoHome() {
    window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum'
}

const api = {
    key: 'b2decc1fe307928afdcc0876d59c149d',
    base: "https://api.openweathermap.org/data/2.5/"
};

document.addEventListener('DOMContentLoaded', () => {
    getResults('Karachi'); // Default city on load
});


const searchbox = document.querySelector('.search-box');

let debounceTimer;
searchbox.addEventListener('input', () => {
    clearTimeout(debounceTimer); // Clear the previous timer
    if (searchbox.value.length > 2) {
        debounceTimer = setTimeout(() => {
            getResults(searchbox.value);
        }, 100); // Delay of 500ms
    }
});

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => weather.json())
        .then(displayResults)
        .catch(err => {
            console.error('Error fetching weather data:', err);
            document.querySelector('.location .city').innerText = "City not found!";
            document.body.style.backgroundImage = `url('files/watermk.png')`; // Default image
        });
}

function displayResults(weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    let weatherCondition = weather.weather[0].main;
    weather_el.innerText = weatherCondition;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

    updateBackground(weatherCondition);
}

function updateBackground(weatherCondition) {
    let backgroundGif = `${weatherCondition.toLowerCase()}.gif`;

    // More complex for the most unncessary reasons :P
    const validConditions = ['clear', 'clouds', 'rain', 'drizzle', 'thunderstorm', 'snow', 'mist', 'fog', 'haze', 'smoke'];
    if (!validConditions.includes(weatherCondition.toLowerCase())) {
        backgroundGif = 'watermk.png';
    }

    document.body.style.backgroundImage = `url('files/${backgroundGif}')`;
}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}
/*Partial Inspiration, thanks and credits to Shehryar Khan https://github.com/ShehrryarKhan/WeatherApp-Es6*/
