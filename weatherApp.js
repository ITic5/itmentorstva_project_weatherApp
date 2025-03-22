import axios from "axios";
import { getDateInFuture } from "../helpers/dateHelper";
import { buildBoxesForForecast, buildBoxForCurrent } from "../helpers/boxBuilder";
export let forecastWrapper = document.getElementById("forecast-wrapper");

export async function getWeather(city){
  try {
      const response = await axios.get(process.env.API_URL + "v1/current.json", {
          params: {
              key: process.env.API_KEY,
              q: city,
          }
      });

      forecastWrapper.innerHTML = "";

      buildBoxForCurrent(response);

      if (response.data.current.is_day !== 1) {
          document.querySelector("body").classList.add("day");
      } else {
          document.querySelector("body").classList.add("night");
      }
  }catch(exception) {
      console.log("Something went wrong with getting weather data");
  }


}

export async function getForecast(city){
    try {
        const response = await axios.get(process.env.API_URL + "v1/forecast.json", {
            params: {
                key: process.env.API_KEY,
                q: city,
                days: 7,
                aqi: "no",
                alerts: "no"
            }
        });

        forecastWrapper.innerHTML = "";

        buildBoxesForForecast(response);

    }catch (exception) {
        console.log("Something went wrong with getting weather data for 3 days forecast");
    }

}

const futureDate = getDateInFuture(30);

export async function getFutureWeather(city){
    try {
        return await axios.get(process.env.API_URL + "v1/future.json", {
            params: {
                key: process.env.API_KEY,
                q: city,
                dt: futureDate,
            }
        });
    }catch(exception) {
        console.log("Something went wrong with getting weather data for day in future");
    }
}

