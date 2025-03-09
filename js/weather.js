const weatherArea = document.querySelector('.weather');
const city = weatherArea.querySelector('.city');
const weatherCondition = weatherArea.querySelector('.weather-condition');
const icon = weatherCondition.querySelector('.icon');
const tempArea = weatherCondition.querySelector('em');
const API_KEY = "23ebfa0074ff1b0b0376c7fde8e119f7";

function getGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const temp = data.main.temp;
    const weatherIconNum = data.weather[0].icon.slice(0, 2);

    city.innerText = data.name;
    icon.src = `./images/${weatherIconNum}.png`;
    tempArea.innerText = `${temp} ℃`;
  })

}

function getGeoError(){
  alert("위치를 불러올 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(getGeoOk, getGeoError);