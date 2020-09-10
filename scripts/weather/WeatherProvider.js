let weather = [];

const eventHub = document.querySelector(".weatherContainer");

const dispatchChangeEvent = () => {
    const zipCodeChangedEvent = new CustomEvent("weatherChanged")

    eventHub.dispatchEvent(zipCodeChangedEvent)
};

export const useWeather = () => {
    return weather.slice();
};

export const getWeather = (zipCode) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?&units=imperial&zip=${zipCode}&appid=${weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            // console.table(parsedCriminals)
            weather = parsedWeather.list;
        })
};