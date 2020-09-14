import { keys } from "../Settings.js";
import { usePark } from "../parks/ParkProvider.js";

let weather = [];

const eventHub = document.querySelector(".weatherPreview");

export const useWeather = () => {
    return weather.slice();
};

export const getWeather = (zipCode) => {

    return fetch(`https://api.openweathermap.org/data/2.5/forecast?&units=imperial&zip=${zipCode}&appid=${keys.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list;
        })
};

//EVENT LISTENER FOR THE WEATHER TO COMMUNICATE WITH PARKS DROP DOWN

//REFERENCE THE CLASS FOR THE HTML
// const contentTarget = document.querySelector(".sideshow") 
//REFERENCE THE MAIN CONTAINER
// const eventHub = document.querySelector("#state-fair")

// export const ShowTicketHolders = () => {
    //REFERENCE THE EVENT CREATED PREVIOUSLY 
//     eventHub.addEventListener("showPurchased", customEvent => {
//         contentTarget.innerHTML += `<div class="person gawker"></div>`

// }
//     )}