<<<<<<< HEAD
import { useWeather, getWeather } from "./WeatherProvider.js"
import { weatherHTML } from "./Weather.js"

const contentTarget = document.querySelector('.weatherPreview');
const eventHub = document.querySelector("main")

eventHub.addEventListener('parkChosen', event => {  
    const zipCode = event.detail.parkZip
    weatherPrev(zipCode)
})

export const weatherPrev = (zipCode) => {
    getWeather(zipCode)   
        .then(() => {
            const weatherArray = useWeather()
            return weatherArray
        })
        .then((weatherArray) => {
            const fiveDay = weatherArray.filter(tacoReport => {
                const weatherTime = tacoReport.dt_txt
                if (weatherTime.includes("15:00:00")) {
                    return weatherTime
                }
            })
        render(fiveDay)
        })
}
=======
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
    // console.log("HTMLArray", HTMLArray);
    targetElement.innerHTML = HTMLArray.join("");
};

// Render weather forcast initally
>>>>>>> master
export const weatherList = (zipCode) => {
    getWeather(zipCode)
        .then(() => {
            const weatherArray = useWeather();
            //console.log('weatherArray', weatherArray);
            render(weatherArray);
        })
};

<<<<<<< HEAD




const render = (aDayTacoArray) => {
    let HTMLArray = aDayTacoArray.map(singleTacoDay => {
        return weatherHTML(singleTacoDay);
    })
    contentTarget.innerHTML += HTMLArray.join("");
} 
=======
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveWeather") {

        const weatherContent = document.querySelector(".weatherContainer")

        if (weatherContent.value !== "0") {
            const newforcast = {

            }
        }
    }
});
>>>>>>> master
