import { getWeather, useWeather} from "./WeatherProvider.js";





// Render weather forcast initally
export const weatherList = () => {
    getWeather()
    .then(() => {
        const appWeather = useWeather();
        console.log('appWeather', appWeather);
        render(appWeather);
    })
};

const render = appWeather => {
    const targetElement = document.querySelector(".weatherContainer");

    let HTMLArray = appWeather.map(singleCrimianl => {
        return CriminalHTML(singleCrimianl);
    })
    // console.log("HTMLArray", HTMLArray);
    targetElement.innerHTML = HTMLArray.join("")
};