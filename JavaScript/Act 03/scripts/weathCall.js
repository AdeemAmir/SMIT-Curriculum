import { apiCall } from './manage.js';

let apiW = { key: '', base: "https://api.openweathermap.org/data/2.5/" };

apiCall().then(x => {
    apiW.key = x;
});

/**
 * Get weather information for a given city and country.
 * @param {string} city - City name.
 * @param {string} country - Country code.
 * @returns {boolean} - Returns true if there is bad weather (Thunderstorm, Fog, or Rain), false otherwise.
 */
export async function getWeather(city, country) {
    try {
        const response = await fetch(`${apiW.base}weather?q=${city},${country}&appid=${apiW.key}&units=metric`);
        const data = await response.json(); // Only call this once

        if (data && data.weather) {
            // Check for bad weather conditions
            return data.weather.some(condition => 
                condition.main === 'Thunderstorm' || condition.main === 'Fog' || condition.main === 'Rain');
        }

        return false; // Default to no bad weather if no conditions are found
    } catch (error) {
        console.log('Network error or other unexpected issue occurred');
        return false; // If there’s an error, assume no bad weather
    }
}
