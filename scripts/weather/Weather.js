export const weatherHTML = (weatherObj) => {
    return `
        <section class="weatherCard">
            <img src="http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png">
            <div>Forcast: ${weatherObj.weather[0].description}</div>
            <div>Temp: ${weatherObj.temp}</div>
        </section>     
    `
}
