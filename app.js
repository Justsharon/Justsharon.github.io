//selecting elements//
const iconElement = document.querySelector(".weather-icon");
const locationIcon = document.querySelector(".location-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");
//calling elements//
var input= document.getElementById("search")
let city=""
//initialing the value//
let latitude=0.0
let longitude=0.0

input.addEventListener("keyUp", function(event){
    if(event.keyCode===13)
    event.preventDefault();
    city=input.Value
    getSearchWeather(city)
    console.log(city)
} )
//get the data
const weather={}
weather.temperature ={
    unit: "celcius"
}

const KELVIN=273
//the code that is from the weatherapi sit//
const key= 

if("Geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition,showError)
} else{
    notificationElement.style.display="block"
    notificationElement.innerHTML=<p>Browser does not support geolocation</p>
}
function setPosition(position) {
    latitude =position.coords.latitude
    longitude =position.coords.longitude

    getWeather(latitude, longitude)
}
locationIcon.addEventListener(click, function(event){
 getWeather(latitude, longitude)
})

//defining a function//

function showError(error){
notificationElement.style.display="block"
 notificationElement.innerHTML=<p>Browser does not support geolocation</p>
}

 function getSearchWeather(city){
    let api= "http://api.openweathermap.org/data/2.5/weather?q=${city}&appid${key}"
    fetch(api).then(function(response) {
        let data= response.json()
        return data
    })
    .then(function(data) {
weather.temperature.value= Math.floor(data.main.temp- KELVIN)
weather.description= data.weather[0].description
weather.iconId=data.weather[0].icon
weather.city=data.name
weather.country= data.sys.country
    })
    .then (function() {
        displayWeather()
    })
 }
function getWeather(latitude, longitude) {
    let api= "http://api.openweathermap.org/data/2.5/weather?lat=${latitude}& lon=${longitude}&appid${key}"
fetch(api).then(function(response) {
        let data= response.json()
        return data
    })
    .then(function(data) {
weather.temperature.value= Math.floor(data.main.temp- KELVIN)
weather.description= data.weather[0].description
weather.iconId=data.weather[0].icon
weather.city=data.name
weather.country= data.sys.country
    })
    .then (function() {
        displayWeather()
    })
}