const apiKey = 'f91dbbe5218fb0907f3d7e758e0eb37c';

function getWeather(event) {
  event.preventDefault(); // prevent the form from submitting

  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.getElementById('weather');
      weather.innerHTML = `Current temperature in ${city}: ${data.main.temp}°C`;
    })
    .catch(error => console.error(error));
}

document.getElementById('weather-form').addEventListener('submit', getWeather);
