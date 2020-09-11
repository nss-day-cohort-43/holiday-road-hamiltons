import {keys} from "../Settings.js";

let parks = [];

export const usePark = () => {
    return parks.slice();
}

export const getParks = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?stateCode=TN&stateCode=&api_key=${Settings.npsKey}")
        .then(response => response.json())
        .then(parsedParks => {
            console.table(parsedParks)
            parks = parsedParks
        }
    )
}