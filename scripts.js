function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'cca8d6c6784674fdff021692dab14695';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${(data.main.temp-273.15).toFixed(2)}°C</p>
                <p>Description: ${data.weather[0].description}</p>

            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
