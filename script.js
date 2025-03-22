import { checkStoredCity } from "./components/locations.js";
import {getForecast, getWeather} from "./components/weatherApp.js"
import {getCityForCoord} from "./components/getCityForCoords.js";

let cityName = document.getElementById("city-name");
let changeLocation = document.getElementById("change-location");
let getForecastButton = document.getElementById("forecast-button");
let locationWeatherBtn = document.getElementById("location-weather");



let debounceTimer;

checkStoredCity();

cityName.addEventListener("input", async function () {
   try {
       clearTimeout(debounceTimer);

       localStorage.setItem("city", cityName.value);

       getForecastButton.classList.remove("hidden");
       changeLocation.classList.remove("hidden");


       debounceTimer = setTimeout(async () => {
           if (cityName.value.trim() !== "") {
               await getWeather(cityName.value);
           }
       }, 1500);
   }catch (exception) {
       console.log("Something went wrong with getting user input for city name.");
   }
});

changeLocation.addEventListener("click", () => {
    localStorage.removeItem("city");
    window.location.reload();
});


locationWeatherBtn.addEventListener("click", async () => {
   try {
       if(!navigator.geolocation){
           alert("Location access denied");
       }

       navigator.geolocation.getCurrentPosition(async (position) => {
           const lat = position.coords.latitude;
           const long = position.coords.longitude;
           let city = await getCityForCoord(lat, long);
           localStorage.setItem("city", city.data[0].name);
           cityName.value = city.data[0].name;
           checkStoredCity();
           getForecastButton.classList.remove("hidden");
           getWeather(cityName.value);
       });


   }catch(exception) {
       console.log("Something went wrong with getting user location.");
   }
});

getForecastButton.addEventListener("click", async () => {

    await getForecast(cityName.value);

})




