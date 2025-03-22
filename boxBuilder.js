import {forecastWrapper} from "../components/weatherApp";


export async function buildBoxesForForecast(response){

    for(let i=1; i < response.data.forecast.forecastday.length; i++){
        let weatherWrapper = document.createElement("div");
        weatherWrapper.classList.add("weather-wrapper");

        let date = document.createElement("p");
        date.innerText = response.data.forecast.forecastday[i].date;

        let weatherImage = document.createElement("img");
        weatherImage.classList.add("weather-image");
        weatherImage.src = response.data.forecast.forecastday[i].day.condition.icon;

        let weatherDescription = document.createElement("p");
        weatherDescription.classList.add("weather-description");
        weatherDescription.innerText = response.data.forecast.forecastday[i].day.condition.text;

        let weatherTempMax = document.createElement("p");
        weatherTempMax.classList.add("weather-temp");
        weatherTempMax.innerText = "Max temp: " + response.data.forecast.forecastday[i].day.maxtemp_c + "°C";

        let weatherTempMin = document.createElement("p");
        weatherTempMin.classList.add("weather-temp");
        weatherTempMin.innerText = "Min temp: " + response.data.forecast.forecastday[i].day.mintemp_c + "°C";

        let weatherAirHumidity = document.createElement("p");
        weatherAirHumidity.classList.add("weather-air-humidity");
        weatherAirHumidity.innerText = "Avg air humidity: " + response.data.forecast.forecastday[i].day.avghumidity;

        weatherWrapper.append(date, weatherImage, weatherDescription, weatherTempMax, weatherTempMin, weatherAirHumidity);
        forecastWrapper.append(weatherWrapper);
    }
}

export async function buildBoxForCurrent(response){

        let weatherWrapper = document.createElement("div");
        weatherWrapper.classList.add("weather-wrapper");

        let date = document.createElement("p");
        date.innerText = "Today";

        let weatherImage = document.createElement("img");
        weatherImage.classList.add("weather-image");
        weatherImage.src = response.data.current.condition.icon;

        let weatherDescription = document.createElement("p");
        weatherDescription.classList.add("weather-description");
        weatherDescription.innerText = response.data.current.condition.text;

        let weatherTemp = document.createElement("p");
        weatherTemp.classList.add("weather-temp");
        weatherTemp.innerText = "Current temp: " + response.data.current.temp_c + "°C";

        let weatherAirHumidity = document.createElement("p");
        weatherAirHumidity.classList.add("weather-air-humidity");
        weatherAirHumidity.innerText = "Avg air humidity: " + response.data.humidity;

        weatherWrapper.append(date, weatherImage, weatherDescription, weatherTemp, weatherAirHumidity);
        forecastWrapper.append(weatherWrapper);

}