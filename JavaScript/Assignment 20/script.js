const API_KEY = "39af3159d98ad3485d1e9e129fc698d8"; 
const API_URL = "https://api.aviationstack.com/v1/flights";

// DOM elements
const searchButton = document.getElementById("search-flights");
const flightsList = document.getElementById("flights");
const originInput = document.getElementById("origin");
const destinationInput = document.getElementById("destination");
const departureDateInput = document.getElementById("departure-date");
const alertButton = document.getElementById("set-alert");
const alertPriceInput = document.getElementById("alert-price");
const alertList = document.getElementById("alert-list");
const bookButton = document.getElementById("book-flight");

async function fetchFlights(origin, destination, date) {
    try {
        const response = await fetch(`${API_URL}?origin=${origin}&destination=${destination}&date=${date}&access_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data.data;  //adjust based on the actual API response???
    } catch (error) {
        console.error("Error fetching flights:", error);
        alert("There was an error fetching the flight data.");
        return [];
    }
}

function displayFlights(flights) {
    flightsList.innerHTML = "";  // cls must!!!
    flights.forEach(flight => {
        const li = document.createElement("li");
        li.textContent = `Flight: ${flight.airline.name} | Price: $${flight.price} | Departure: ${new Date(flight.departure).toLocaleString()}`;
        flightsList.appendChild(li);

        // example site.
        li.addEventListener("click", () => {
            bookButton.disabled = false;
            bookButton.setAttribute("data-flight-url", `https://www.example.com/book?flight_id=${flight.flight_id}`);
        });
    });
}

// call site frm above and redir. on new page.
bookButton.addEventListener("click", () => {
    const flightUrl = bookButton.getAttribute("data-flight-url");
    if (flightUrl) {
        window.open(flightUrl, "_blank");
    }
});

alertButton.addEventListener("click", () => {
    const alertPrice = parseFloat(alertPriceInput.value);
    if (alertPrice && !isNaN(alertPrice)) {
        setAlert(alertPrice);
    } else {
        alert("Please enter a valid price.");
    }
});

function setAlert(price) {
    const alerts = JSON.parse(localStorage.getItem("alerts")) || [];
    alerts.push(price);
    localStorage.setItem("alerts", JSON.stringify(alerts)); //keep page open for alerts
    displayAlerts();
}

function displayAlerts() {
    const alertList = document.getElementById("alert-list");
    if (!alertList) {
        console.error("alert-list element not found!");
        return; // use gmail to get alerts???
    }

    const alerts = JSON.parse(localStorage.getItem("alerts")) || [];
    alertList.innerHTML = "";  // cls
    alerts.forEach(alert => {
        const li = document.createElement("li");
        li.textContent = `Alert for price: $${alert}`;
        alertList.appendChild(li); // show new price in new list.
        //extra, set list in a hidden div below, alert button.
    });
}

// only 100 attempts, can't auto-update. press enter to call an api search.
searchButton.addEventListener("click", async () => {
    const origin = originInput.value;
    const destination = destinationInput.value;
    const date = departureDateInput.value;

    if (origin && destination && date) {
        const flights = await fetchFlights(origin, destination, date);
        displayFlights(flights);
    } else {
        alert("Please fill in all fields.");
    }
});

// Call alerts
displayAlerts();
