// app.js
document.getElementById('getWeather').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  if (city) {
    fetchWeather(city);
  }
});

function fetchWeather(city) {
  const apiKey = '0f6846293ef54f5eb16213820241409'; // Replace this with your actual API key
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.error('Error fetching the weather data:', error));
}

function displayWeather(data) {
  console.log(data);
  const weatherInfo = document.getElementById('weatherInfo');
  if (data && data.current) {
    const temperature = data.current.temp_c;
    const description = data.current.condition.text;
    const icon = data.current.condition.icon;
    const dayOrNight = (data.current.is_day === 1) ? "It's Day Time" : "It's Night Time Now";
    weatherInfo.innerHTML = `
      <p>Temperature: ${temperature}°C</p>
      <p>Condition: ${description}</p>
      <img src="${icon}" alt="weather icon">
      <p>${dayOrNight}</p>
    `;
  } else {
    weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;
  }
}
