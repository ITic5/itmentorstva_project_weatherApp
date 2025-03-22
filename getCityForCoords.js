import axios from "axios";

export async function getCityForCoord(lat, long) {
  try {
      return await axios.get(process.env.OW_API_URL, {
          params: {
              lat: lat,
              lon: long,
              limit: 1,
              appid: process.env.OW_API_KEY
          }
      });
  }catch (exception) {
      console.log("Something went wrong with getting city by coords provided.");
  }
}