let weather = [];

export const useWeather = () => {
    return weather.slice();
};

export const getWeather = () => {
    return fetch("https://openweathermap.org/api")
        .then(response => response.json())
        .then(parsedWeather => {
            // console.table(parsedCriminals)
            weather = parsedWeather
        }
    )
};