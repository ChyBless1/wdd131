const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const windchill = document.querySelector("#windchill");

const temperature = 28;
const windSpeed = 10;

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

if (temperature <= 10 && windSpeed > 4.8) {
    windchill.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windchill.textContent = "N/A";
}