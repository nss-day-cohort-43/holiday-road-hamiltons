import { getWeather, useWeather } from "./WeatherProvider.js";
import { WeatherHTML } from "./Weather.js";

const eventHub = document.querySelector(".weatherPreview");
// const targetElement = document.querySelector(".weatherPreview");
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
    let days = []

        .then(() => {
            const weatherArray = useWeather();
            
            render(weatherArray);
        })
        return days;
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
})