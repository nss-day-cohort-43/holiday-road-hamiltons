import {keys} from "../Settings.js"

let parks = [];

export const usePark = () => {
    return parks.slice();
}

export const getParks = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=" + keys.npsKey)
        .then(response => response.json())
        .then(parsedParks => {
            parks = parsedParks
        }
    )
}