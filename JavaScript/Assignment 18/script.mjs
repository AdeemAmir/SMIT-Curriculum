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

let currentMode = "clock";
let stopwatchInterval;
let stopwatchTime = 0;
let timerInterval;
let timerTime = 0;

document.getElementById("clock").addEventListener("click", switchMode);

function switchMode() {
  if (currentMode === "clock") {
    document.getElementById("clock").classList.add("hidden");
    document.getElementById("stopwatch").classList.remove("hidden");
    currentMode = "stopwatch";
    document.getElementById("modeTitle").innerText = "Stopwatch";
  } else if (currentMode === "stopwatch") {
    document.getElementById("stopwatch").classList.add("hidden");
    document.getElementById("timer").classList.remove("hidden");
    currentMode = "timer";
    document.getElementById("modeTitle").innerText = "Timer";
  } else {
    document.getElementById("timer").classList.add("hidden");
    document.getElementById("clock").classList.remove("hidden");
    currentMode = "clock";
    document.getElementById("modeTitle").innerText = "Digital Clock";
  }
}

// Clock
function updateTime(city = "Karachi") {
  fetch(`https://worldtimeapi.org/api/timezone`)
    .then(response => response.json())
    .then(data => {
      const timezone = data.find(tz => tz.toLowerCase().includes(city.toLowerCase())) || 'Asia/Karachi';
      return fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date(data.datetime);
      document.getElementById("clock").innerText = time.toLocaleTimeString();
      setTimeout(() => updateTime(city), 1000);
    })
    .catch(() => alert("Invalid city!"));
}

function updateCityTime() {
  const city = document.getElementById("cityInput").value || "Karachi";
  updateTime(city);
}

// Stopwatch
function startStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    document.getElementById("stopwatchTime").innerText = new Date(stopwatchTime * 1000).toISOString().substr(11, 8);
  }, 1000);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById("stopwatchTime").innerText = "00:00:00";
}

// Timer
function startTimer() {
  timerTime = parseInt(document.getElementById("timerInput").value, 10);
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timerTime <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    } else {
      timerTime--;
      document.getElementById("timerTime").innerText = new Date(timerTime * 1000).toISOString().substr(14, 5);
    }
  }, 1000);
}

updateTime(); // Start with Karachi
