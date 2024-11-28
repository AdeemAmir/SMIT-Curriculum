import { BST } from './priceBST.js';
import { Graph } from './flightgraph.js';

let flights = [];
let selectedFlight = null;
const priceBST = new BST();
const routeGraph = new Graph();

let priceTrackingInterval = null; 
let isTracking = false;
let priceUpdateInterval = null;
let isUpdating = false;

async function fetchFlights() {
    try {
        const response = await fetch('flights.json');
        flights = await response.json();
        displayFlights(flights);

        flights.forEach(flight => {
            priceBST.insert(flight.price_pkr, flight);
            routeGraph.addRoute(flight.dep_city, flight.arrv_city);
        });
    } catch (error) {
        console.error('Error fetching flights:', error);
    }
}

function displayFlights(flights) {
    const flightsContainer = document.getElementById('flightsContainer');
    flightsContainer.innerHTML = '';

    flights.forEach(flight => {
        const flightDiv = document.createElement('div');
        flightDiv.className = 'flight';
        flightDiv.id = `flight-${flight.flight_number}`;
        flightDiv.innerHTML = `
            <h3>${flight.flight_code} - ${flight.airline_name}</h3>
            <p><strong>From:</strong> ${flight.dep_city}, ${flight.dep_country} (${flight.dep_airport})</p>
            <p><strong>To:</strong> ${flight.arrv_city}, ${flight.arrv_country} (${flight.arrv_airport})</p>
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

    return flights.filter(flight => {
        const matchesSource = !source || flight.dep_city.toLowerCase().includes(source) || flight.dep_airport.toLowerCase().includes(source) || flight.dep_country.toLowerCase().includes(source);
        const matchesDestination = !destination || flight.arrv_city.toLowerCase().includes(destination) || flight.arrv_airport.toLowerCase().includes(destination) || flight.arrv_country.toLowerCase().includes(destination);
        const matchesAirline = !airline || flight.airline_name.toLowerCase().includes(airline) || flight.flight_code.toLowerCase().includes(airline);
        return matchesSource && matchesDestination && matchesAirline;
    });
}

function filterFlights() {
    const filteredFlights = getFilteredFlights();
    displayFlights(filteredFlights);
}

function startPriceTracking() {
    const source = document.getElementById('sourceInput').value.toLowerCase();
    const destination = document.getElementById('destinationInput').value.toLowerCase();
    const airline = document.getElementById('airlineInput').value.toLowerCase();
    const threshold = parseInt(document.getElementById('priceThreshold').value);

    if (isNaN(threshold) || threshold <= 0) {
        alert('Please enter a valid price threshold.');
        return;
    }

    if (!isTracking) {
        priceTrackingInterval = setInterval(() => {
            const filteredFlights = getFilteredFlights();

            const priceDroppedFlight = filteredFlights.find(flight => flight.price_pkr <= threshold);
            if (priceDroppedFlight) {
                alert(`Price for flight ${priceDroppedFlight.flight_code} has dropped below the threshold! New price: PKR ${priceDroppedFlight.price_pkr}`);
                clearInterval(priceTrackingInterval);
                isTracking = false;
                console.log('Price tracking stopped');
            }

        }, 1000);

        isTracking = true;
        console.log('Price tracking started');
    } else {
        console.log('Price tracking is already running');
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

// button stuff
document.getElementById('sourceInput').addEventListener('input', filterFlights);
document.getElementById('destinationInput').addEventListener('input', filterFlights);
document.getElementById('airlineInput').addEventListener('input', filterFlights);
document.getElementById('startTrackingButton').addEventListener('click', startPriceTracking);
document.getElementById('forceUpdateButton').addEventListener('click', forcePriceUpdate);
document.addEventListener('DOMContentLoaded', fetchFlights);
