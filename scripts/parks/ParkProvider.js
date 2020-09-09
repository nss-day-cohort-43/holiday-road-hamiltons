let parks = [];

export const usePark = () => {
    return parks.slice();
};

export const getParks = () => {
    return fetch("")
        .then(response => response.json())
        .then(parsedParks => {
            // console.table(parsedCriminals)
            parks = parsedParks
        }
    )
};