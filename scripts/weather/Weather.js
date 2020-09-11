<<<<<<< HEAD
export const weatherHTML = (weatherObj) => {
    return `
        <section class="weatherCard">
            <img src="http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png">
            <div>Forcast: ${weatherObj.weather[0].description}</div>
            <div>Temp: ${weatherObj.temp}</div>
        </section>     
    `
}
=======

export const WeatherHTML = (weatherObj) => {
    return `
        <section class="weather-card"> 
        <div id="weather-forcast">
            <div>Park Name: ${weatherObj.name}</div>
            <div>Forcast: ${weatherObj.forcast[0].description}</div>
            <div>Temperature: ${weatherObj.temp}</div>
            <div>${new Date(weatherObj.date).toLocaleDateString('en-US')}</div>
        </section>
    `
};
>>>>>>> master
