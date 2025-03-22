import { getWeather } from "./weatherApp.js";

export async function checkStoredCity() {
    try {
        let storedCity = localStorage.getItem("city");
        let changeLocation = document.getElementById("change-location");

        if (storedCity) {
            changeLocation.classList.remove("hidden");
            getWeather(storedCity);
        }
    }catch (exception) {
        console.log("Something went wrong with getting stored city checked.");
    }
}