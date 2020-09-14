import { keys } from "../Settings.js";
import {usePark} from "../parks/ParkProvider.js";

let weather = [];

export const useWeather = () => {
    return weather.slice();
}

// const eventHub = document.querySelector(".weatherContainer");
// const dispatchChangeEvent = () => {
//     const zipCodeChangedEvent = new CustomEvent("weatherChanged")
//     eventHub.dispatchEvent(zipCodeChangedEvent)
// };

export const getWeather = (zipCode) => {
    parks = usePark()
    const parkTarget = parks.map(parkObj => {
        return parkObj.name === document.querySelector(".parkPreview").value
    })

    return fetch(`https://api.openweathermap.org/data/2.5/forecast?&units=imperial&zip=${zipCode}&appid=${keys.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
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