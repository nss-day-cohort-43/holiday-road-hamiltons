import { keys } from "../Settings.js";
import { getParks, usePark } from "../parks/ParkProvider.js";

let weather = [];

const eventHub = document.querySelector(".dropdownContainer");

export const useWeather = () => {
    return weather.slice()
};

export const getWeather = (postalCode) => {
    let parks = usePark()
    const target = parks.find(park => {
        return park.postalCode === document.querySelector(".dropdownContainer").value
    })
    
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?&units=imperial&zip=${target.addresses[0].postalCode}&appid=${keys.weatherKey}`)
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