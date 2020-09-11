import { getWeather, useWeather } from "./WeatherProvider.js";
import { WeatherHTML } from "./Weather.js";

const eventHub = document.querySelector(".weatherContainer");
eventHub.addEventListener("chosen", event => {
    const zipCode = event.detail.parkZip;
    weatherList(zipCode);
});

const render = (appWeather) => {
    const targetElement = document.querySelector(".weatherContainer");

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
            
            render(weatherArray);
        })
};

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveWeather") {

        const weatherContent = document.querySelector(".weatherContainer")

        if (weatherContent.value !== "0") {
            const newforcast = {

            }
        }
    }
});
