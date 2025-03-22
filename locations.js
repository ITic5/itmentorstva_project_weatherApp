import {getForecast, getWeather} from "./weatherApp.js";
import {changeLocation, cityName, getForecastButton} from "../script";

export async function checkStoredCity() {
    try {
        let storedCity = localStorage.getItem("city");

        if (storedCity) {

            cityName.value = storedCity;
            changeLocation.classList.remove("hidden");
            getForecastButton.classList.remove("hidden");


            getWeather(storedCity);

            getForecastButton.removeEventListener("click", handleForecastClick);
            getForecastButton.addEventListener("click", handleForecastClick);
        }
    }catch (exception) {
        console.log("Something went wrong with getting stored city checked.");
    }
}

function handleForecastClick() {
    cityName.value = localStorage.getItem("city");
    getForecast(localStorage.getItem("city"));
}
