
const eventHub = document.querySelector(".container");

export const WeatherHTML = (weatherObj) => {
    return `
        <section id="weather-forcast"> 
        <div class="weather-card">
            <div>Park Name: ${weatherObj.name}</div>
            <div>Forcast: ${weatherObj.forcast}</div>
            <div>Temperature: ${weatherObj.temperature}</div>
            <div>${new Date(weatherObj.date).toLocaleDateString('en-US')}</div>
        </section>
    `
};