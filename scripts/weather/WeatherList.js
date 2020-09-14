import { getWeather, useWeather } from "./WeatherProvider.js";
import { WeatherHTML } from "./Weather.js";

const eventHub = document.querySelector(".weatherPreview");

eventHub.addEventListener("chosenPark", event => {
    const zipCode = event.detail.parkZip;
    weatherList(zipCode);
});

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

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveWeather") {
        const weatherContent = new CustomEvent("parkSelected", {
            detail: {
                parkSelected: event.target.value
            }
        })

        if (weatherContent.value !== "0") {
            const newforcast = {

            }
        }
    }
});

eventHub.addEventListener("change", event => {
    if (event.target.id === "selectPark") {
        const customEvent = new CustomEvent("parkSelected", {
            detail: {
                parkThatWasSelected: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
});

// const eventHub = document.querySelector(".weatherContainer");
// const dispatchChangeEvent = () => {
//     const zipCodeChangedEvent = new CustomEvent("weatherChanged")
//     eventHub.dispatchEvent(zipCodeChangedEvent)
// };