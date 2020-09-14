import {keys} from "../Settings.js"

let parks = [];

export const usePark = () => {
    return parks.slice();
}

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=TN&stateCode=&api_key=${keys.npsKey}`)
        .then(response => response.json())
        .then(parsedParks => {
            parks = parsedParks.data // json result is an object so get the array out of the data property
        }
    )
}