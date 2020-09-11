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
export const weatherList = (zipCode) => {
    getWeather(zipCode)
        .then(() => {
            const weatherArray = useWeather();
            //console.log('weatherArray', weatherArray);
            render(weatherArray);
        })
};





const render = (aDayTacoArray) => {
    let HTMLArray = aDayTacoArray.map(singleTacoDay => {
        return weatherHTML(singleTacoDay);
    })
    contentTarget.innerHTML += HTMLArray.join("");
} 