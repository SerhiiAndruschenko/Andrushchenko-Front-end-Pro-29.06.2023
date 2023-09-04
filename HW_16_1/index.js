const citySelect = document.getElementById("citySelect");
const temperature = document.getElementById("temp");
const pressure = document.getElementById("pressure");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const speed = document.getElementById("speed");
const deg = document.getElementById("deg");
const weatherIcon = document.getElementById("weatherIcon");

citySelect.addEventListener("change", function() {
  let selectedCity = this.value;
  if(selectedCity !== 'default'){
    console.log(selectedCity);
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        temperature.textContent = data.main.temp;
        pressure.textContent = data.main.pressure;
        description.textContent = data.weather[0].description;
        humidity.textContent = data.main.humidity;
        speed.textContent = data.wind.speed;
        deg.textContent = data.wind.deg;
        weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      })
      .catch((error) => {
        alert("Помилка при отриманні даних про погоду.");
      });
  }  
});

//Async/await спосіб
/*
citySelect.addEventListener("change", function() {
  let selectedCity = this.value;
  if(selectedCity !== 'default'){
    weatherJSON(selectedCity).then(data => {
      console.log(data);
      temperature.textContent = data.main.temp;
      pressure.textContent = data.main.pressure;
      description.textContent = data.weather[0].description;
      humidity.textContent = data.main.humidity;
      speed.textContent = data.wind.speed;
      deg.textContent = data.wind.deg;
      weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    });
  }
});

async function weatherJSON(city) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error(error);
  }
  
}
*/