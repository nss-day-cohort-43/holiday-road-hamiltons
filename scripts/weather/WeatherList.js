import { getWeather, useWeather } from "./WeatherProvider.js";
import { WeatherHTML } from "./Weather.js";

const targetElement = document.querySelector(".weatherPreview");
const eventHub = document.querySelector(".dropdownContainer");


    eventHub.addEventListener("parkSelected", event => {
        const zipCode = event.detail.parkZip;
        weatherList(zipCode);
        console.log("parkSelect")
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
            return(weatherArray);
        })
        .then((weatherArray) => {
            const fiveDayForcast = weatherArray.filter(tacoReport => {
                const weatherTime = tacoReport.dt_txt
                if (weatherTime.includes("12:00:00")) {
                    return weatherTime
                }
            })
    return fiveDayForcast;
        })
};