import { BST } from './priceBST.js';
import { Graph } from './flightgraph.js';
import { apiCall } from './manage.js';

let flights = [];
let greyedOutFlights = [];
let selectedFlight = null;
const priceBST = new BST();
const routeGraph = new Graph();
let api = {key: '',base: "https://api.openweathermap.org/data/2.5/"};

let priceTrackingInterval = null; 
let isTracking = false;
let priceUpdateInterval = null;
let isUpdating = false;

apiCall().then(x => {
    api.key = x;
});

async function getWeather(city, country) {
    try {
        const response = await fetch(`${api.base}weather?q=${city},${country}&appid=${api.key}&units=metric`);
            if (response.status === 404) {console.log(`City ${city} not found`);}
        const data = await response.json();    
        return data;
    } catch (error) {
        console.log('Network error or other unexpected issue occurred');
    }

    const data = await response.json();

    // Check for weather conditions or visibility
    if (data && data.weather && data.weather.some(condition => condition.main === 'Thunderstorm' || condition.main === 'Fog' || condition.main === 'Rain' || data.visibility < 1000)) {
        return true;
    }
    return false;
}

async function fetchFlights() {
    try {
        const response = await fetch('flights.json');
        flights = await response.json();
        displayFlights(flights);

        // Build BST and Graph
        flights.forEach(flight => {
            priceBST.insert(flight.price_pkr, flight); // Insert into BST based on price
            routeGraph.addRoute(flight.dep_city, flight.arrv_city);
        });


    } catch (error) {
        console.error('Error fetching flights:', error);
    }
}

function checkWeatherForFlights(flights) {
    const weatherChecks = flights.map(flight => {
        return Promise.all([
            getWeather(flight.dep_city, flight.dep_country),
            getWeather(flight.arrv_city, flight.arrv_country)
        ]).then(results => {
            const [isBadWeatherDep, isBadWeatherArr] = results;
            if (isBadWeatherDep || isBadWeatherArr) {
                greyedOutFlights.push(flight.flight_number);
                return true; // This is greyed out
            }

            return false; // This fight is okay
        });
    });

    Promise.all(weatherChecks).then(() => {
        displayFlights(flights);
    });
}

function displayFlights(flights) {
    const flightsContainer = document.getElementById('flightsContainer');
    flightsContainer.innerHTML = '';

    flights.forEach(flight => {
        
        const flightDiv = document.createElement('div');
        flightDiv.className = 'flight';
        flightDiv.id = `flight-${flight.flight_number}`;
        if (greyedOutFlights.includes(flight.flight_number)) {
            flightDiv.classList.add('greyed-out');
        }
        flightDiv.innerHTML = `
            <h3>${flight.flight_code} - ${flight.airline_name}</h3>
            <p><strong>From:</strong> ${flight.dep_city}, ${flight.dep_country} (${flight.dep_airport})</p>
            <p><strong>To:</strong> ${flight.arrv_city}, ${flight.arrv_country} (${flight.arrv_airport})</p>
            <p><strong>Departure:</strong> ${flight.dep_time}</p>
            <p><strong>Arrival:</strong> ${flight.arrv_time}</p>
            <p class="price"><strong>Price:</strong> PKR ${flight.price_pkr}</p>
        `;
        flightDiv.addEventListener('click', () => selectFlight(flightDiv, flight));
        flightsContainer.appendChild(flightDiv);
    });
}

function selectFlight(flightDiv, flight) {
    document.querySelectorAll('.flight').forEach(f => f.classList.remove('selected'));
    flightDiv.classList.add('selected');
    selectedFlight = flight;
    console.log('Selected Flight:', flight);
}



function getFilteredFlights() {
    const source = document.getElementById('sourceInput').value.toLowerCase();
    const destination = document.getElementById('destinationInput').value.toLowerCase();
    const airline = document.getElementById('airlineInput').value.toLowerCase();
    const date = document.getElementById('dateInput').value.toLowerCase();

    return flights.filter(flight => {
        const matchesSource = !source || flight.dep_city.toLowerCase().includes(source) || flight.dep_airport.toLowerCase().includes(source) || flight.dep_country.toLowerCase().includes(source);
        const matchesDestination = !destination || flight.arrv_city.toLowerCase().includes(destination) || flight.arrv_airport.toLowerCase().includes(destination) || flight.arrv_country.toLowerCase().includes(destination);
        const matchesAirline = !airline || flight.airline_name.toLowerCase().includes(airline) || flight.flight_code.toLowerCase().includes(airline);
        const matchesDate = !date || flight.dep_time.toLowerCase().includes(date);
        return matchesSource && matchesDestination && matchesAirline && matchesDate;
    });
}

function filterFlights() {
    const filteredFlights = getFilteredFlights();
    displayFlights(filteredFlights);
}

function createNotification(message) {
    const resultsContainer = document.getElementById('resultsContainer') || createResultsContainer();

    const flightDiv = document.createElement('div');
    flightDiv.classList.add('price-drop-result');

    const flightDetails = document.createElement('p');
    flightDetails.textContent = message;

        const closeButton = document.createElement('span');
        closeButton.classList.add('close-btn');
        closeButton.textContent = '×';
        closeButton.onclick = function () {
            flightDiv.remove(); 
        };
        flightDiv.appendChild(closeButton);
    document.getElementById('resultsContainer').style.display = 'block';
    flightDiv.appendChild(flightDetails);
    resultsContainer.appendChild(flightDiv); 
}

function createResultsContainer() {
    const container = document.createElement('div');
    container.id = 'resultsContainer';
    container.style.display = 'none';
    container.classList.add('floating-container');
    document.body.appendChild(container);

    const closeAllButton = document.createElement('span');
    closeAllButton.classList.add('close-all-btn');
    closeAllButton.textContent = '×';
    closeAllButton.onclick = function () {
        container.style.display = 'none';
    };
    container.appendChild(closeAllButton);
    return container;
}

function startPriceTracking() {
    const source = document.getElementById('sourceInput').value.toLowerCase();
    const destination = document.getElementById('destinationInput').value.toLowerCase();
    const airline = document.getElementById('airlineInput').value.toLowerCase();
    const date = document.getElementById('dateInput').value.toLowerCase();
    const threshold = parseInt(document.getElementById('priceThreshold').value);

    if (isNaN(threshold) || threshold <= 0) {
        alert('Please enter a valid price threshold.');
        return;
    }

    if (!isTracking) {
        priceTrackingInterval = setInterval(() => {
            const filteredFlights = getFilteredFlights();
            const priceDroppedFlights = filteredFlights.filter(flight => flight.price_pkr <= threshold);
            if (priceDroppedFlights.length > 0) {
                priceDroppedFlights.forEach(flight => {
                    createNotification(`Price for flight ${flight.flight_code} has dropped below the threshold! New price: PKR ${flight.price_pkr}`);
                });
                clearInterval(priceTrackingInterval);
                isTracking = false;
                console.log('Price tracking stopped');
            }
        }, 1000);

        isTracking = true;
        console.log('Price tracking started');
    } else {
        console.log('Price tracking stopeed');
        isTracking = false;
    }
}

function forcePriceUpdate() {
    if (isUpdating) {
        console.log("Stopping price updates...");
        clearInterval(priceUpdateInterval); // inv back to null
        isUpdating = false;
        console.log('Start Price Update'); 
        console.log('Price updates stopped.');
    } else {
        console.log("Starting price updates...");
        priceUpdateInterval = setInterval(() => {
            console.log("Updating prices...");
            const filteredFlights = getFilteredFlights(); 
            flights.forEach(flight => {
                const priceChange = Math.floor(Math.random() * 2000) - 1000; // +-1000
                flight.price_pkr = Math.max(flight.price_pkr + priceChange, 1000); 
                priceBST.insert(flight.price_pkr, flight);
                console.log(`Updated price for flight ${flight.flight_code}: PKR ${flight.price_pkr}`);
            });

            displayFlights(filteredFlights);
        }, 5000);
        isUpdating = true;
        console.log('Stop Price Update');
        console.log('Price updates started.');
    }
}

document.getElementById('bookFlightButton').addEventListener('click', function() {
    if (!selectedFlight) {
        createNotification("Please select a flight to book.");
        return;
    }

    if (greyedOutFlights.includes(selectedFlight.flight_number)) {
        createNotification("Cannot book this flight due to bad weather conditions.", true);
        return;
    }

    const phone = prompt("Enter your phone number:");
    const cnic = prompt("Enter your CNIC number:");
    const numSeats = parseInt(prompt("Enter number of seats:"));
    const seatClass = prompt("Enter seat class (Economy/Business/First):");

    if (!phone || !cnic || isNaN(numSeats) || numSeats <= 0 || !seatClass) {
        createNotification("Please provide valid information.");
        return;
    }

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    const booking = {
        userId: loggedInUser.CstID,
        phone,
        cnic,
        numSeats,
        seatClass,
        flight: selectedFlight
    };

    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(booking);

    localStorage.setItem('bookings', JSON.stringify(bookings));

    createNotification("Flight booked successfully!");
    console.log("Booking Details:", booking);
});

const button = document.getElementById('viewBookedFlightsButton');
const userInfoSection = document.getElementById('userInfoSection');

button.addEventListener('mouseover', function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        alert("You must be logged in to view booked flights.");
        return;
    }

    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    const userBookings = bookings.filter(booking => booking.userId === loggedInUser.CstID);

    if (userBookings.length === 0) {
        alert("You have no booked flights.");
        return;
    }


    let bookedFlightsHtml = `<h3>Your Customer ID: ${loggedInUser.CstID}</h3>`;
    bookedFlightsHtml += `<ul>`;

    userBookings.forEach(booking => {
        bookedFlightsHtml += `
            <li>
                <strong>Flight: ${booking.flight.flight_code}</strong><br>
                <strong>Airline:</strong> ${booking.flight.airline_name}<br>
                <strong>From:</strong> ${booking.flight.dep_city}, ${booking.flight.dep_airport}<br>
                <strong>To:</strong> ${booking.flight.arrv_city}, ${booking.flight.arrv_airport}<br>
                <strong>Departure:</strong> ${booking.flight.dep_time}<br>
                <strong>Arrival:</strong> ${booking.flight.arrv_time}<br>
                <strong>Seats:</strong> ${booking.numSeats} ${booking.seatClass} class<br>
                <strong>CNIC:</strong> ${booking.cnic}<br>
                <strong>Phone:</strong> ${booking.phone}
            </li>
        `;
    });

    bookedFlightsHtml += `</ul>`;

    userInfoSection.innerHTML = bookedFlightsHtml;
    userInfoSection.style.display = 'block';
});


button.addEventListener('mouseleave', function() {
    userInfoSection.style.display = 'none';
});

userInfoSection.addEventListener('mouseenter', function() {
    userInfoSection.style.display = 'block';
});

userInfoSection.addEventListener('mouseleave', function() {
    userInfoSection.style.display = 'none'; 
});


// button stuff
document.getElementById('checkWeatherForFlights').addEventListener('click', function() {checkWeatherForFlights(flights);});
document.getElementById('sourceInput').addEventListener('input', filterFlights);
document.getElementById('destinationInput').addEventListener('input', filterFlights);
document.getElementById('airlineInput').addEventListener('input', filterFlights);
document.getElementById('dateInput').addEventListener('input', filterFlights);
document.getElementById('startTrackingButton').addEventListener('click', startPriceTracking);
document.getElementById('forceUpdateButton').addEventListener('click', forcePriceUpdate);
document.addEventListener('DOMContentLoaded', fetchFlights);
