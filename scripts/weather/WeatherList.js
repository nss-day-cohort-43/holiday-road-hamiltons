import { getWeather, useWeather } from "./WeatherProvider.js";
import { WeatherHTML } from "./Weather.js";
// import { getParkByName } from "../parks/ParkProvider.js";

// const targetElement = document.querySelector(".weatherPreview");
const eventHub = document.querySelector(".dropdownContainer");


    eventHub.addEventListener("parkSelected", event => {
        const zipCode = event.detail.parkZip;
         
        weatherList(zipCode);
        eventHub.dispatchEvent(zip)
    })
      
const render = (appWeather) => {
    const targetElement = document.querySelector(".weatherPreview")

    let HTMLArray = appWeather.map(weatherObj => {
        return WeatherHTML(weatherObj);
    })
    targetElement.innerHTML = HTMLArray.join("");
};
 
// Render weather forcast initally
export const weatherList = (zipCode) => {
    getWeather(zipCode)

        .then(() => {
            const weatherArray = useWeather();
            render (weatherArray);
        })
        .then((weatherArray) => {
            const fiveDayForcast = weatherArray.filter(timeReport => {
                const weatherTime = timeReport.dt_txt
                if (weatherTime.includes("12:00:00")) {
                    render(weatherTime);
                }
            })
    return fiveDayForcast;
        })
};