import { getWeather, useWeather } from "./WeatherProvider.js";
import { WeatherHTML } from "./Weather.js";

const targetElement = document.querySelector(".weatherPreview");

const eventHub = document.querySelector(".dropdownContainer");
    eventHub.addEventListener("parkSelected", event => {
        const zipCode = event.detail.postalCode
        weatherList(zipCode);
        }) 

    // Render weather forcast initally
export const weatherList = () => {  
    getWeather()
    // renderWeather()
        .then(() => {
            const weatherArray = useWeather()
            renderWeather(weatherArray)
        })
    }

    // the render HTML
const renderWeather = (appWeather) => {
    
    let HTMLArray = appWeather.map(weatherObj => {

        return WeatherHTML(weatherObj);
    })

    targetElement.innerHTML = HTMLArray.join("");
};