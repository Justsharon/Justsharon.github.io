const dateElement = document.getElementById("date");
const weatherForecastEl = document.getElementById("weather-forecast");
const searchWindow = document.querySelector("search-window");

const apiKey = "31f080f758eb3f4c39a31c0cbaa3df10";

getWeatherData();
function getWeatherData() {
  navigator.geolocation.getCurrentPosition((great) => {
    let { latitude, longitude } = great.coords;

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        showWeatherData(data);
      });
  });
}
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function tellTime() {
  const now = new Date();
  const month = now.getMonth();
  const date = now.getDate();
  const day = now.getDay();
  const hour = now.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = now.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";
}

function submitBtn(event) {
  event.preventDefault();
  let input = document.querySelector("#go");
  console.log(input.value);
}
let form = document.querySelector("form");
form.addEventListener("submit", submitBtn);
