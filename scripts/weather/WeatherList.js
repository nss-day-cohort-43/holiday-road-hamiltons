import { getWeather, useWeather} from "./WeatherProvider.js";
import { WeatherHTML } from "./Weather.js";

const eventHub = document.querySelector(".weatherContainer");

const render = (appWeather) => {
    const targetElement = document.querySelector(".weatherContainer");

    let HTMLArray = appWeather.map(weatherObj => {
        return WeatherHTML(weatherObj);
    })
    // console.log("HTMLArray", HTMLArray);
    targetElement.innerHTML = HTMLArray.join("")
};

// Render weather forcast initally
export const weatherList = () => {
    getWeather()
    .then(() => {
        const weatherArray = useWeather();
        //console.log('weatherArray', weatherArray);
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