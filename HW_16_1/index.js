const citySelect = document.getElementById('citySelect');
const temperature = document.getElementById('temp');
const pressure = document.getElementById('pressure');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const speed = document.getElementById('speed');
const deg = document.getElementById('deg');
const weatherIcon = document.getElementById('weatherIcon');
const defaultCity = 'Kyiv';

citySelect.addEventListener('change', function() {
  let selectedCity = this.value;
  fetchWeather(selectedCity);
});

function fetchWeather(selectedCity) {
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      temperature.textContent = data.main.temp + ' °C';
      pressure.textContent = data.main.pressure + ' hPa';
      description.textContent = data.weather[0].description;
      humidity.textContent = data.main.humidity + ' %';
      speed.textContent = data.wind.speed + ' m/s';
      deg.textContent = data.wind.deg + ' %';
      weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    })
    .catch((error) => {
      alert('Помилка при отриманні даних про погоду.');
  });
}

fetchWeather(defaultCity);

//Async/await спосіб
/*
citySelect.addEventListener('change', function() {
  let selectedCity = this.value;
  addInfoToPage(selectedCity);
});

async function getWeatherJSON(selectedCity) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error(error);
  }
  
}

function addInfoToPage(selectedCity){
  getWeatherJSON(selectedCity).then(data => {
    temperature.textContent = data.main.temp + ' °C';
    pressure.textContent = data.main.pressure + ' hPa';
    description.textContent = data.weather[0].description;
    humidity.textContent = data.main.humidity + ' %';
    speed.textContent = data.wind.speed + ' m/s';
    deg.textContent = data.wind.deg + ' %';
    weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  });
}

addInfoToPage(defaultCity);*/